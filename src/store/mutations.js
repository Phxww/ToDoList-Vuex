

const saveStorage = function(state) {
    localStorage.setItem(state.storageName,JSON.stringify(state.todos));
}

export const mutations = {

    addTodo(state,newTodo){
        state.todos.push(newTodo);
        saveStorage(state);
    },removeTodo(state,todo){
        state.todos.splice(state.todos.indexOf(todo),1);
        saveStorage(state);
    },toggleTodo(state,{todo,done}){
        todo.done = done;
        saveStorage(state);
    }
    ,toggleTodos(state,{todo,done}){
        todo.done = !done;
        saveStorage(state);
    },editTodo(state,{todo,editTxt}){
        todo.title = editTxt;
        saveStorage(state);
    }

}