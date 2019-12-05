

export default{
    addTodo({commit},txt){
        commit('addTodo',{
            id:Date.now(),
            title:txt,
            done:false
        })
    },removeTodo({commit},todo){
        commit('removeTodo',todo)
    },toggleTodo({commit},todo){
        commit('toggleTodo',{todo,done: !todo.done})
    },clearCompleted({state,commit}){
        state.todos.filter(todo => todo.done)
        .forEach(todo => commit('removeTodo',todo));
    },toggleTodos({state,commit},allChecked){
        state.todos.forEach(todo => commit('toggleTodos' , {todo , done:allChecked} ));    
    },editTodo({commit},{todo,editTxt}){
        commit('editTodo',{todo,editTxt});
    }   

}