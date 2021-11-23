const boxes = document.querySelectorAll('.box');




for(const box of boxes) {
    onDragAndDrop(box);
}


function onDragAndDrop(box) {
    const state = {
        shiftX: null,
        shiftY: null
    };
    
    const draggeble = {
        onDrag({ offsetX, offsetY }) {
            state.shiftX = offsetX;
            state.shiftY = offsetY;
    
            document.addEventListener('mousemove', this.onMove);
        },
        onMove({ clientX, clientY }) {
        
            box.style.left = `${clientX - state.shiftX}px`;
            box.style.top = `${clientY - state.shiftY}px`;
    
                // box.style.left = `${clientX }px`;
                // box.style.top = `${clientY }px`;
        },
        onDrop() {
            document.removeEventListener('mousemove', this.onMove);
        }
    };
    
    
    box.addEventListener('mousedown', (event) => draggeble.onDrag(event));
    document.addEventListener('mouseup', () => {
        draggeble.onDrop();
    });
}