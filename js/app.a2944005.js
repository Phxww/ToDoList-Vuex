(function(t){function e(e){for(var n,c,s=e[0],a=e[1],d=e[2],u=0,f=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,d||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,s=1;s<o.length;s++){var a=o[s];0!==r[a]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},i=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var l=a;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"07a7":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"todoapp"},[o("header",{staticClass:"header"},[o("h1",[t._v("vuex-todos")]),o("input",{staticClass:"new-todo",attrs:{placeholder:"What needs to be done?"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}}})]),o("section",{staticClass:"main"},[o("input",{staticClass:"toggle-all",attrs:{type:"checkbox"},domProps:{checked:t.allChecked}}),o("label",{attrs:{for:"toggle-all"},on:{click:function(e){return t.toggleTodos(t.allChecked)}}}),o("ul",{staticClass:"todo-list"},t._l(t.filterTodos,(function(t){return o("ToDoItem",{key:t.id,attrs:{todo:t}})})),1)]),o("footer",{staticClass:"footer"},[o("span",{staticClass:"todo-count"},[o("strong",[t._v(t._s(t.activeTodosCnt))]),t._v(" "+t._s(t._f("plural")(t.activeTodosCnt,"item"))+" left ")]),o("ul",{staticClass:"filters"},t._l(t.filters,(function(e,n){return o("li",{key:n},[o("a",{class:{selected:t.filterTag===n},attrs:{herf:"#"},on:{click:function(e){return t.selectFlilter(n)}}},[t._v(" "+t._s(n)+" ")])])})),0),o("button",{directives:[{name:"show",rawName:"v-show",value:t.clearTextShow,expression:"clearTextShow"}],staticClass:"clear-completed",on:{click:t.clearCompleted}},[t._v(" Clear completed ")])])])},i=[],c=(o("4de4"),o("498a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("li",{staticClass:"todo",class:{completed:t.todo.done,editing:t.editing}},[o("div",{staticClass:"view"},[o("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{click:function(e){return t.toggleTodo(t.todo)}}}),o("label",{domProps:{textContent:t._s(t.todo.title)},on:{dblclick:function(e){t.editing=!0}}}),o("button",{staticClass:"destroy",on:{click:function(e){return t.removeTodo(t.todo)}}})]),o("input",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"},{name:"focus",rawName:"v-focus",value:t.editing,expression:"editing"}],staticClass:"edit",domProps:{value:t.todo.title},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelEdit(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneEdit(e)}],blur:t.doneEdit}})])])}),s=[],a=(o("a4d3"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b"),o("2fa7")),d=o("2f62");function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(o,!0).forEach((function(e){Object(a["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var f={props:["todo"],data:function(){return{editing:!1}},directives:{focus:function(t,e){e.value&&t.focus()}},methods:u({},Object(d["b"])(["removeTodo","toggleTodo"]),{cancelEdit:function(){this.editing=!1},doneEdit:function(t){var e=this.todo,o=t.target.value.trim();this.$store.dispatch("editTodo",{todo:e,editTxt:o}),this.editing=!1}})},p=f,g=o("2877"),h=Object(g["a"])(p,c,s,!1,null,null,null),v=h.exports,m={all:function(t){return t},active:function(t){return t.filter((function(t){return!t.done}))},completed:function(t){return t.filter((function(t){return t.done}))}},b={name:"app",data:function(){return{filters:m,filterTag:"all"}},components:{ToDoItem:v},computed:{todos:function(){return this.$store.state.todos},filterTodos:function(){return this.filters[this.filterTag](this.todos)},activeTodosCnt:function(){return this.filters.active(this.todos).length},clearTextShow:function(){return this.filters.completed(this.todos).length>0},allChecked:function(){return this.$store.getters.allChecked}},methods:{addTodo:function(t){var e=t.target.value;e.trim()&&this.$store.dispatch("addTodo",e),t.target.value=""},selectFlilter:function(t){return this.filterTag=t},toggleTodo:function(t){this.$store.dispatch("toggleTodo",t)},clearCompleted:function(){this.$store.dispatch("clearCompleted")},toggleTodos:function(t){return this.$store.dispatch("toggleTodos",t)}},filters:{plural:function(t,e){return t<2?e:e+"s"}}},T=b,y=(o("c796"),Object(g["a"])(T,r,i,!1,null,null,null)),O=y.exports,k=(o("0d03"),{addTodo:function(t,e){var o=t.commit;o("addTodo",{id:Date.now(),title:e,done:!1})},removeTodo:function(t,e){var o=t.commit;o("removeTodo",e)},toggleTodo:function(t,e){var o=t.commit;o("toggleTodo",{todo:e,done:!e.done})},clearCompleted:function(t){var e=t.state,o=t.commit;e.todos.filter((function(t){return t.done})).forEach((function(t){return o("removeTodo",t)}))},toggleTodos:function(t,e){var o=t.state,n=t.commit;o.todos.forEach((function(t){return n("toggleTodos",{todo:t,done:e})}))},editTodo:function(t,e){var o=t.commit,n=e.todo,r=e.editTxt;o("editTodo",{todo:n,editTxt:r})}}),C=(o("c975"),o("a434"),function(t){localStorage.setItem(t.storageName,JSON.stringify(t.todos))}),w={addTodo:function(t,e){t.todos.push(e),C(t)},removeTodo:function(t,e){t.todos.splice(t.todos.indexOf(e),1),C(t)},toggleTodo:function(t,e){var o=e.todo,n=e.done;o.done=n,C(t)},toggleTodos:function(t,e){var o=e.todo,n=e.done;o.done=!n,C(t)},editTodo:function(t,e){var o=e.todo,n=e.editTxt;o.title=n,C(t)}},x=(o("a623"),{allChecked:function(t){return t.todos.every((function(t){return t.done}))}});n["a"].use(d["a"]);var _=new d["a"].Store({state:{storageName:"vuex-todos",todos:JSON.parse(localStorage.getItem("vuex-todos")||"[]")},actions:k,mutations:w,getters:x});n["a"].config.productionTip=!1,new n["a"]({store:_,render:function(t){return t(O)}}).$mount("#app")},c796:function(t,e,o){"use strict";var n=o("07a7"),r=o.n(n);r.a}});
//# sourceMappingURL=app.a2944005.js.map