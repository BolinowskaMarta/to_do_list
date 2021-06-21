let $todoInput; 
let $alertInfo; // info o braku zadań
let $addBtn;
let $ulList; //tagi w ul
let $newTask;

let $idNumber = 0;
let $allTasks;

const main = () => {
    prepareDOMelements();
    prepareDOMEvents();
};

const prepareDOMelements = () => {
    $todoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');
    $allTasks = $ulList.getElementsByTagName('li');

};

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click',checkClick);
    $todoInput.addEventListener('keyup', enterCheck); 
};


const addNewTask = () => {
    if($todoInput.value !== '') {
        $idNumber++;
        $newTask = document.createElement('li');
        $newTask.innerText = $todoInput.value;
        $newTask.setAttribute('id', `todo-${$idNumber}`);
        $ulList.appendChild($newTask);
        $todoInput.value = '';
        $alertInfo.innerText = '';

        createToolsArea();

    }else{
        $alertInfo.innerText = 'Musisz wpisać treść zadania!';

    }
}
const enterCheck = (event) => {
    if (event.keyCode === 13) {
        addNewTask();
    }

};
 
const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    $newTask.appendChild(toolsPanel);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    toolsPanel.appendChild(completeBtn); 
    toolsPanel.appendChild(deleteBtn);

   
};




const checkClick = (e) => { 

        if(e.target.closest('button').classList.contains('complete')) //najbliższy
        { e.target.closest('li').classList.toggle('completed');
          e.target.closest('button').classList.toggle('completed');
        } else if (e.target.closest('button').className === 'delete') {
         deleteTask(e); 
         }
    };

    //usuwanie zadania
    const deleteTask = (e) => {
        const deleteTodo = e.target.closest('li');
        deleteTodo.remove();

        if($allTasks.length === 0) {
            $alertInfo.innerText = 'Brak zadań na liście';
        };
    };


document.addEventListener('DOMContentLoaded', main);