// Lista de documentos PDF
const documents = [
    'documentacion_proyecto_cyecom.pdf',
    'Backend.pdf',
    'moc.mp4'
];
let currentDocumentIndex = 0;
function showDocument(index) {
    const pdfViewer = document.getElementById('pdf-viewer');
    pdfViewer.src = documents[index];
}

function nextDocument() {
    currentDocumentIndex = (currentDocumentIndex + 1) % documents.length;
    showDocument(currentDocumentIndex);
}

function prevDocument() {
    currentDocumentIndex = (currentDocumentIndex - 1 + documents.length) % documents.length;
    showDocument(currentDocumentIndex);
}
