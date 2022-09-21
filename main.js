//DIOS PRIMERO
const todos = JSON.parse(localStorage.getItem("todos")) || []

const render = () => {
        const todoList = document.getElementById('todo-list')  ;
        const todosTemplate = todos.map(t => "<li>" + t + "</li>")
        // a map de parametro le pasaremos el valor
        //que itera, en este caso t porque ya estamos
        //usando todos y otros, se ejecuta segun tantas
        // veces que tenga el elemento a iterar o sea todos
        //map toma un arreglo y aplica esta función a
        //cada uno de los elementos y saca un arreglo
        // de misma longitud, siempre tiene que haber un
        // valor de return y después le decimos que hará
       
        todoList.innerHTML = todosTemplate.join("")        
        //.join lo que hará será tomar todos los elementos de arreglos y 
        //juntarlos mediante lo que nosotros le indiquemos de parametro
        //como nosotros tenemos el map que inserta el li entonces
        // le pondremos un elemento vacío y después sobre eso se insertará
        // lo del map
        const elements = document.querySelectorAll("#todo-list li")
        elements.forEach((element, i) => {
            element.addEventListener('click', () => {
                element.parentNode.removeChild(element)
                todos.splice(i, 1)
                actualizeTodos(todos)
                render()
            })
        })
}

const actualizeTodos = (todos) => {
    const todoStrings = JSON.stringify(todos)
    localStorage.setItem("todos", todoStrings)
}

window.onload = () => { 
    render()
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        actualizeTodos(todos)
        render()
    }
}

// arr = [1, 2, 3, 4]
// arr.splice(2, 1)