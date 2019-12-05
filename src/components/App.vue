<template>
    <section class="todoapp">
    <!-- header -->
    <header class="header">
      <h1>vuex-todos</h1>
      <input class="new-todo"
	  @keyup.enter="addTodo"
	  placeholder="What needs to be done?"
      >
    </header>
    <!-- main section -->
    <section class="main" >
      <input class="toggle-all" 
        type="checkbox"
		:checked="allChecked"
        >
      <label for="toggle-all" @click="toggleTodos(allChecked)" ></label>
      <ul class="todo-list">
        <ToDoItem v-for="(item) in filterTodos" :key="item.id" :todo="item"/>
      </ul>
    </section>  
    <!-- footer -->
    <footer class="footer" >
      <span class="todo-count">
        <!-- <strong></strong> -->
       <strong>{{activeTodosCnt}}</strong>
	    {{ activeTodosCnt | plural('item') }} left
      </span>
      <ul class="filters">
        <li v-for="(item,idx) in filters" :key="idx">
			<a herf="#"  
			@click="selectFlilter(idx)" 
			:class="{selected:filterTag === idx}"
			> {{idx}} </a>
        </li>
      </ul>
      <button class="clear-completed" v-show="clearTextShow" @click="clearCompleted">
        Clear completed
      </button>
    </footer>
    
    </section>
  <!-- </div> -->
</template>

<script>
import ToDoItem from './ToDoItem.vue'

const filters = {
	all: todos => todos,
	active: todos => todos.filter(todo => !todo.done),
	completed: todos => todos.filter(todo => todo.done),
}

export default {
  name: 'app',
  data(){
	  return{
		  filters:filters,
		  filterTag:'all'
	  }
  },
  components: {
    ToDoItem
  },computed:{
	  todos(){
		  return this.$store.state.todos; 
	  },filterTodos(){
		  return this.filters[this.filterTag](this.todos);
	  },activeTodosCnt(){
		  return this.filters.active(this.todos).length;
	  },clearTextShow(){
		  return this.filters.completed(this.todos).length > 0 ? true: false;
	  },allChecked(){
		  return this.$store.getters.allChecked;
	  }
  },methods:{
	  addTodo(e){
		  const txt = e.target.value;
		  if(txt.trim()){
		  	this.$store.dispatch('addTodo',txt);
		  }
		  e.target.value = '';
	  },selectFlilter(filterTag){
		  return this.filterTag = filterTag;
	  },toggleTodo(todo){
		   this.$store.dispatch('toggleTodo',todo);
	  },clearCompleted(){
		  this.$store.dispatch('clearCompleted');
	  },toggleTodos(allChecked){
		  return this.$store.dispatch('toggleTodos',allChecked);
	  }
  },filters:{
	  plural: function(cnt,text){ 
		 return cnt < 2 ? text : (text+'s');
	  }
  }
}
</script>

<style lang="scss">

@import 'src/style/todolist';


</style>
