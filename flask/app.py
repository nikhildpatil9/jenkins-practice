import os
from flask import Flask
import json
from docx import Document
from htmldocx import HtmlToDocx

# Initialize the Document and HtmlToDocx parser
document = Document()
parser = HtmlToDocx()

app = Flask(__name__)


@app.route('/about', methods=['GET'])
def about():
    version = os.environ.get('APP_VERSION')
    base_directory = input("Enter the base directory to scan: ").strip()
    if not os.path.exists(base_directory):
        print("Invalid directory.")
    else:
        results = scan_directories(base_directory)
        if results:
            print("\nDetected Projects:")
            for proj in results:
                print(f"🛠️ {proj['type']}\n📁 Location: {proj['path']}\n🔍 Indicator File: {proj['indicator']}\n")
        else:
            print("No recognizable projects found.")
    return {'app_version': version}, 200




def detect_project_type(path):
    items = os.listdir(path)

    # Spring Boot: Look for pom.xml or build.gradle with spring-boot
    if 'pom.xml' in items or 'build.gradle' in items:
        for file in ['pom.xml', 'build.gradle']:
            full_path = os.path.join(path, file)
            if os.path.isfile(full_path):
                with open(full_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if 'spring-boot' in content:
                        return 'Spring Boot', file

    # Quarkus: Look for quarkus in pom.xml or build.gradle
    for file in ['pom.xml', 'build.gradle']:
        full_path = os.path.join(path, file)
        if os.path.isfile(full_path):
            with open(full_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if 'quarkus' in content:
                    return 'Java Quarkus', file

    # Angular: Look for angular.json
    if 'angular.json' in items:
        return 'Angular', 'angular.json'

    # React: Look for package.json with "react" dependency
    if 'package.json' in items:
        package_json_path = os.path.join(path, 'package.json')
        with open(package_json_path, 'r', encoding='utf-8') as f:
            try:
                package_data = json.load(f)
                deps = package_data.get('dependencies', {})
                if 'react' in deps:
                    return 'React', 'package.json'
            except json.JSONDecodeError:
                pass

    # Flask: Look for app.py or main.py with Flask imports
    for py_file in ['app.py', 'main.py']:
        full_path = os.path.join(path, py_file)
        if os.path.isfile(full_path):
            with open(full_path, 'r', encoding='utf-8') as f:
                if 'Flask' in f.read():
                    return 'Flask', py_file

    return None, None


def scan_directories(base_path):
    project_info = []

    for root, dirs, files in os.walk(base_path):
        if "node_modules" in root or "." in root:
            continue
        print("\nDetected Projects:",root)

        proj_type, detail = detect_project_type(root)
        if proj_type:
            project_info.append({
                'type': proj_type,
                'path': root,
                'indicator': detail
            })

    return project_info




# Path to your HTML file
html_file = 'Desktop/index.html'
# Output PDF file name
output_pdf = 'output.pdf'

# Optional: If wkhtmltopdf is in a non-standard path
# config = pdfkit.configuration(wkhtmltopdf='/usr/local/bin/wkhtmltopdf')
# pdfkit.from_file(html_file, output_pdf, configuration=config)




@app.route('/pdf', methods=['GET'])
def pdf():
    version = os.environ.get('APP_VERSION')
    try:
        # Read the HTML content from a file
        with open("D:\Devops\index.html", "r", encoding="utf-8") as html_file:
            
       

# Add HTML content to the document
            parser.add_html_to_document(html_file.read(), document)

# Save the document
        document.save("output.docx")

        print("Conversion completed: 'output.docx' has been created.")
        
    except Exception as e:
        print(f"❌ Failed to generate PDF: {e}")
    return {'app_version': version}, 200