const app = Vue.createApp({
    data() {
        return {
            todoList:[
                {id:1,text:"Vue bootcamp hafta 1",completed:true},
                {id:2,text:"Vue bootcamp hafta 2",completed:false},
                {id:3,text:"Vue bootcamp hafta 3",completed:false},
                {id:4,text:"Vue bootcamp hafta 4",completed:false},
                {id:5,text:"Vue bootcamp hafta 5",completed:false},
                {id:6,text:"Vue bootcamp hafta 6",completed:false},
                {id:7,text:"Vue bootcamp hafta 7",completed:false},
            ]
        }
    },
    methods: {
        
        addTodo(event){
            
            this.todoList.push(
                {id:this.todoList.length+1,
                text:event.target.value,
                completed:false}
                );
            event.target.value="";
          
        },
        removeItem(todoItem){
            this.todoList= this.todoList.filter(todo=>todo!=todoItem);
        }
    },
    computed:{
        completedItemCount(){
            return this.todoList.filter(todo=>todo.completed).length;
        },
        uncompletedItemCount(){
            return this.todoList.filter(todo=>!todo.completed).length;
        },
       
    }
   
}).mount("#app");
