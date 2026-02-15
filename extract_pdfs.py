"""
Script to extract text from PDF files and create markdown versions
"""
import os
try:
    from pypdf import PdfReader
except ImportError:
    print("pypdf not found, trying PyPDF2...")
    try:
        from PyPDF2 import PdfReader
    except ImportError:
        print("\nError: No PDF library found!")
        print("Please install one of these:")
        print("  pip install pypdf")
        print("  pip install PyPDF2")
        exit(1)

def extract_pdf_to_markdown(pdf_path, md_path):
    """Extract text from PDF and save as markdown"""
    print(f"Reading {pdf_path}...")
    reader = PdfReader(pdf_path)
    
    text_content = []
    for page_num, page in enumerate(reader.pages, 1):
        text = page.extract_text()
        if text:
            text_content.append(text)
    
    full_text = "\n\n".join(text_content)
    
    # Write to markdown file
    with open(md_path, 'w', encoding='utf-8') as f:
        f.write(full_text)
    
    print(f"Created {md_path}")
    return full_text

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Extract Study Guide
    study_guide_pdf = os.path.join(base_dir, "D487 Study Guide.pdf")
    study_guide_md = os.path.join(base_dir, "D487 Study Guide.md")
    
    # Extract Multiple Choice Questions
    mcq_pdf = os.path.join(base_dir, "D487 Multiple Choice Question.pdf")
    mcq_md = os.path.join(base_dir, "D487 Multiple Choice Question.md")
    
    try:
        extract_pdf_to_markdown(study_guide_pdf, study_guide_md)
        extract_pdf_to_markdown(mcq_pdf, mcq_md)
        print("\n✓ Successfully created markdown files!")
    except Exception as e:
        print(f"\n✗ Error: {e}")
