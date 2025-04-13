from flask import Flask, render_template, request, send_file
import yaml
import os

app = Flask(__name__)
WORKFLOW_PATH = "generated_workflow/generated.yml"

build_commands = {
    "Maven": "mvn clean install",
    "Gradle": "./gradlew build",
    "npm": "npm install && npm run build",
    "Yarn": "yarn install && yarn build",
    "Poetry": "poetry install && poetry build",
    "Pipenv": "pipenv install && pipenv run python setup.py sdist",
    "Go": "go build ./...",
    "Cargo": "cargo build --release",
    "CMake": "mkdir -p build && cd build && cmake .. && make",
    "Flutter": "flutter pub get && flutter build apk"
}

upload_steps = {
    "JFrog": {
        "name": "Upload to JFrog",
        "run": "curl -u ${{ secrets.JFROG_USER }}:${{ secrets.JFROG_TOKEN }} -T ./build/output.zip https://your-jfrog-url/artifactory/your-repo/"
    },
    "Nexus": {
        "name": "Upload to Nexus",
        "run": "curl -u ${{ secrets.NEXUS_USER }}:${{ secrets.NEXUS_TOKEN }} --upload-file ./build/output.zip https://your-nexus-url/repository/your-repo/"
    }
}

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        build_tool = request.form["build_tool"]
        artifactory = request.form["artifactory"]

        workflow = {
            "name": "CI Pipeline",
            "on": ["push"],
            "jobs": {
                "build": {
                    "runs-on": "ubuntu-latest",
                    "steps": [
                        {"uses": "actions/checkout@v3"},
                        {"name": f"Build with {build_tool}", "run": build_commands.get(build_tool, "echo 'No command'")},
                        upload_steps.get(artifactory, {"name": "Skip Upload", "run": "echo 'No upload'"})
                    ]
                }
            }
        }

        os.makedirs("generated_workflow", exist_ok=True)
        with open(WORKFLOW_PATH, "w") as f:
            yaml.dump(workflow, f)

        return send_file(WORKFLOW_PATH, as_attachment=True)

    return render_template("index.html", tools=build_commands.keys(), repos=upload_steps.keys())

if __name__ == "__main__":
    app.run(debug=True)
