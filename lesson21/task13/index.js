export function getSection(num) {
    const spanElement = document.querySelector(`span[data-number="${num}"]`);
  
    if (spanElement) {
      const parentBox = spanElement.closest('.box');
      return parentBox ? parentBox.dataset.section : null;
    }
  
    return null;
  }