<template>
    <div>
        <li class="todo"  :class="{completed: todo.done , editing: editing}">
            <div class="view">
                 <input class="toggle"
                    type="checkbox"
                    :checked="todo.done"
                    @click="toggleTodo(todo)"
                    > 
                <label v-text="todo.title"
                @dblclick=" editing = true "
                ></label>
                <button class="destroy" @click="removeTodo(todo)" ></button>
            </div>
            <input class="edit" 
            :value="todo.title"
            v-show="editing"
            v-focus="editing"
            @keyup.esc="cancelEdit"
            @keyup.enter="doneEdit"
            @blur="doneEdit"
            >
        </li>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    props:['todo'],    
    data(){
        return{
            editing:false
        }
    },
    directives: {
        focus (el, binding) {
            if (binding.value) {
                el.focus()
            }
        }
    },
    methods:{
        ...mapActions([
            'removeTodo',
            'toggleTodo'
        ]),
        cancelEdit(){
            this.editing = false;
        },doneEdit(e){
            const {todo} = this;
            const editTxt = e.target.value.trim();
            this.$store.dispatch('editTodo',{todo,editTxt});
            this.editing = false;
        }

    }
}
</script>

