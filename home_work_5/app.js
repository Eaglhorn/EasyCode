// Форма
// Список задач
var a = 6;
const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: false,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c4e88e0',
    completed: true,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

(function(arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  // UI Elements
  const tasksList = document.querySelector('.tasks-list-section .list-group');
  const section = document.querySelector('.section');
  const form = document.forms['addTask'];
  const inputTitle = form.elements['title'];
  const inputBody = form.elements['body'];


  const divConteiner = document.createElement('div');
    divConteiner.classList.add('container','d-block', 'm-10');
  const allTask = document.createElement('button');
    allTask.textContent = 'All Task';
    allTask.classList.add('btn', 'btn-primary', 'ml-auto','w-50', 'allTask-btn');
  const noFinal = document.createElement('button');
    noFinal.textContent = 'Uncomplete Task';
    noFinal.classList.add('btn', 'btn-primary', 'w-50', 'unoFinal-btn');

    divConteiner.appendChild(allTask);
    divConteiner.appendChild(noFinal);

    section.appendChild(divConteiner);

  renderTasks();
  form.addEventListener('submit', onFormSubmitHandler);
  tasksList.addEventListener('click', onDeleteHandler);
  allTask.addEventListener('click',allTasks);
  noFinal.addEventListener('click',unComplete);

  // Functions
  function renderTasks() {
    const fragment = document.createDocumentFragment();
    noData(true);

    Object.values(objOfTasks).forEach(task => {
      const li = listItemTemplate(task);
      noData(false);
      fragment.appendChild(li);
    });
    tasksList.appendChild(fragment);
  }

  function listItemTemplate(task) {
    const li = document.createElement('li');
    li.classList.add(
      'list-group-item',
      'd-flex',
      'align-items-center',
      'flex-wrap',
    );


    li.setAttribute('data-task-id', task._id);

    const span = document.createElement('span');
    span.textContent = task.title;
    span.style.fontWeight = 'bold';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');

    const completeBtn = document.createElement('button');
      completeBtn.textContent = 'Complete task';
      completeBtn.classList.add('btn', 'btn-success','ml-3', 'complete-btn');
      completeBtn.addEventListener('click', onComplete);


    const article = document.createElement('p');
    article.textContent = task.body;
    article.classList.add('mt-2', 'w-100');

      if(task.completed) {
          li.style = 'background-color : yellow';
          completeBtn.textContent = 'Return to hell';
          completeBtn.classList.add('btn', 'btn-info','ml-3', 'return-btn');
      }

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);
    li.appendChild(article);

    return li;
  }

  function onFormSubmitHandler(e) {
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert('Пожалуйста введите title и body');
      return;
    }

    const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTemplate(task);
    tasksList.insertAdjacentElement('afterbegin', listItem);
    form.reset();
  }

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    };

    objOfTasks[newTask._id] = newTask;
      noData(false);
    return { ...newTask };
  }

  function onDeleteHandler(e) {
    const { target } = e;
    if (target.classList.contains('delete-btn')) {
      const parent = target.closest('[data-task-id]');
      const id = parent.dataset.taskId;
      parent.remove();
      delete objOfTasks[id];
      if(Object.keys(objOfTasks).length == 0){
        noData(true)
      }
    }
  }
  function noData(nd) {
    const fragment = document.createDocumentFragment();
    if(Object.keys(objOfTasks).length == 0 && nd) {
      const li = listItemTemplate(objOfTasks);
      tasksList.innerHTML = '';
      li.textContent = 'No data to display';
      fragment.appendChild(li);
      tasksList.appendChild(fragment);
    }
    if(Object.keys(objOfTasks).length == 1 && !nd){
      fragment.innerHTML = '';
      tasksList.innerHTML = '';
    }
  }

  function onComplete(e) {
      const { target } = e;
      const parent = target.closest('[data-task-id]');
      const id = parent.dataset.taskId;
      if (!objOfTasks[id].completed) {
              objOfTasks[id].completed = true;
              parent.style = "background-color : yellow";
              target.textContent = "Return to hell";
              target.classList.add("btn-info", "return-btn");
          } else {
              objOfTasks[id].completed = false;
              parent.style = "background-color : none";
              target.textContent = "Complete task";
             target.classList.remove("btn-info", "return-btn");
         }

  }

    function unComplete(e) {
        noData(false);
        const {target} = e;
        tasksList.innerHTML = '';
        const fragment = document.createDocumentFragment();
        if (target.classList.contains('unoFinal-btn')) {
            const keys = Object.values(objOfTasks);
            let filterArray = keys.filter(item => {
                return item.completed === false;
            });
            Object.values(filterArray).forEach(res =>  {
                const li = listItemTemplate(res);
                fragment.appendChild(li);
                tasksList.appendChild(fragment);

            });
        }
    }
    function allTasks() {
        tasksList.innerHTML = '';
        renderTasks();
        noData(false)
    }
})(tasks);
