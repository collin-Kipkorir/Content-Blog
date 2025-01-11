// Initialize Quill editor with toolbar options
const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
      toolbar: '#toolbar',
    },
  });
  
  // Handle image upload
  document.getElementById('uploadImage').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', reader.result);
      };
      reader.readAsDataURL(file);
    };
    input.click();
  });
  
  // Handle video upload
  document.getElementById('uploadVideo').addEventListener('click', () => {
    const url = prompt('Enter video URL (YouTube, etc.):');
    if (url) {
      const range = quill.getSelection();
      const videoEmbed = `<iframe class="w-full h-64" src="${url}" frameborder="0" allowfullscreen></iframe>`;
      quill.clipboard.dangerouslyPasteHTML(range.index, videoEmbed);
    }
  });
  
  // Handle social media embed
  document.getElementById('addSocialEmbed').addEventListener('click', () => {
    const embedCode = prompt('Enter embed code (e.g., Twitter, Instagram):');
    if (embedCode) {
      const range = quill.getSelection();
      quill.clipboard.dangerouslyPasteHTML(range.index, embedCode);
    }
  });
  
  // Handle save article
  document.getElementById('saveArticle').addEventListener('click', () => {
    const content = quill.root.innerHTML;
    console.log('Article content:', content);
    alert('Article saved! Check the console for content.');
  });
  
  // Handle preview article
  document.getElementById('previewArticle').addEventListener('click', () => {
    const content = quill.root.innerHTML;
    const previewContent = document.getElementById('previewContent');
    previewContent.innerHTML = content;
  
    // Ensure Quill's styles are applied to the preview
    previewContent.className = 'ql-container ql-snow ql-editor';
    document.getElementById('previewModal').classList.remove('hidden');
  });
  
  // Close preview modal
  function closePreview() {
    document.getElementById('previewModal').classList.add('hidden');
  }
  