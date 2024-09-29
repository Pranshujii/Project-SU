const pdfFileInput = document.getElementById('pdfFile');
const uploadButton = document.getElementById('uploadButton');
const fileInfoDiv = document.getElementById('fileInfo');

uploadButton.addEventListener('click', () => {
    if (pdfFileInput.files.length === 0) {
        alert('Please select a PDF file');
        return;
    }

    const file = pdfFileInput.files[0];
    const fileSize = file.size / 1024 / 1024; // Convert to MB
    const fileType = file.type;

    if (fileType !== 'application/pdf') {
        alert('Only PDF files are allowed');
        return;
    }

    if (fileSize > 10) {
        alert('File size exceeds 10MB');
        return;
    }

    fileInfoDiv.innerHTML = `File Name: ${file.name} <br> File Size: ${fileSize.toFixed(2)}MB`;
});