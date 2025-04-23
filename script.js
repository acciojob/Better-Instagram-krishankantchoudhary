let draggedElement = null;

document.querySelectorAll('.image').forEach(image => {
  image.addEventListener("dragstart", e => {
    draggedElement = e.target;
    draggedElement.classList.add('selected');
  });

  image.addEventListener("dragover", e => {
    e.preventDefault(); // Allow drop
  });

  image.addEventListener("drop", e => {
    e.preventDefault();

    if (draggedElement && draggedElement !== e.target) {
      // Get the computed styles for background images
      const draggedBg = window.getComputedStyle(draggedElement).backgroundImage;
      const targetBg = window.getComputedStyle(e.target).backgroundImage;

      // Swap the background images
      draggedElement.style.backgroundImage = targetBg;
      e.target.style.backgroundImage = draggedBg;
    }

    draggedElement.classList.remove("selected");
    draggedElement = null;
  });

  image.addEventListener("dragend", () => {
    if (draggedElement) {
      draggedElement.classList.remove("selected");
      draggedElement = null;
    }
  });
});
