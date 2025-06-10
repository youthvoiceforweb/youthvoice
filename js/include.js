// js/include.js
function includeHTML() {
  const includes = document.getElementsByTagName('include');
  
  Array.from(includes).forEach(async (include) => {
    try {
      const filePath = include.getAttribute('src');
      const response = await fetch(filePath);
      
      if (!response.ok) {
        throw new Error(`Failed to load ${filePath}: ${response.status}`);
      }
      
      const html = await response.text();
      include.insertAdjacentHTML('afterend', html);
      include.remove();
    } catch (error) {
      console.error('Include error:', error);
      include.style.display = 'none';
    }
  });
}

// Initialize when DOM is loaded
if (document.readyState !== 'loading') {
  includeHTML();
} else {
  document.addEventListener('DOMContentLoaded', includeHTML);
}