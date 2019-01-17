(function () { 
    let data = [];
    const list = document.querySelector('.task-list-js');

    window.app = {};


    function renderList() {
        list.innerHTML = '';

        data.forEach(({ title }, index) => {
            const item = document.createElement('div'); // create element
            item.className = 'item'; // add class for element

            const content = document.createElement('div');  
            content.className = 'content'; 
            item.appendChild(content);  
    
            const checkbox = document.createElement('div');  
            checkbox.className = 'checkbox ui'; 
            content.appendChild(checkbox);  
                
            const input = document.createElement('input'); 
            input.type = 'checkbox'; 
            checkbox.appendChild(input);  
    
            const label = document.createElement('label'); 
            checkbox.appendChild(label);  
            label.innerText = title;

            attachEditHandler(checkbox, index);

            list.appendChild(item);  // add element into html
        });

    }

    function attachEditHandler(elem, index) {
        elem.addEventListener('click', removeTask.bind(null, elem, index));
    }

    function removeTask(elem, index) {
        elem.removeEventListener('click', removeTask);
        
        app.addCompletedTask(data[index]);
        app.renderCompletedList();
        app.buttonShow();
        data.splice(index, index + 1);
        renderList();

    }

    function addTask(task) {
        data.push(task);
    }

    window.app.renderList = renderList;
    window.app.addTask = addTask;
    
    
    
})();