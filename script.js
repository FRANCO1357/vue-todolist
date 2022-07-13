console.log('Vs ok', Vue);

Vue.config.devtools = true;

const root = new Vue({
    name: 'ToDoList',
    el: '#list',
    data: {
        tasks: [
            {text: 'Tagliarsi i capelli', done: true,},
            {text: 'Tagliarsi la barba', done: false,},
        ]
    },
    methods: {
        deleteTask(task){
            this.tasks.splice(task, 1);
        },
        doneTask(i){
            this.tasks[i].done = true;
        },
        unDoneTask(i){
            this.tasks[i].done = false;
        }
    }
})