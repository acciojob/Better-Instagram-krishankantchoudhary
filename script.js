//your code here
let draggedElement=null;
document.querySelectorAll('.image').forEach(image=>{
	image.addEventListener("dragstart",e=>{
		draggedElement=e.target;
		draggedElement.classList.add('selected');
	});

	image.addEventListener("dragover",e=>{
		e.preventDefault();
	});

	image.addEventListener("drop",e=>{
		e.preventDefault();

		if(draggedElement && draggedElement !==e.target){
			let draggedBg=draggedElement.style.backgroundImage;
			draggedElement.style.backgroundImage=e.target.style.backgroundImage;
			e.target.style.backgroundImage=draggedBg;
		}
		draggedElement.classList.remove("selected");
	});

	image.addEventListener('dragend',()=>{
		if(draggedElement){
			draggedElement.classList.remove("selected");
		}
	});
	
	
	
});

