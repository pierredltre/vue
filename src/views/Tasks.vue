<script>
  import TaskItem from '../components/TaskItem.vue'
  import CreateTask from '../components/CreateTask.vue'

  export default {
    name: 'Tasks',
    components: { TaskItem, CreateTask },
    data() {
      return {
        tasks: []
      }
    },
    methods: {
      add(task) {
        let p = {
          task: task,
          done: false
        };

        this.tasks.push(p);
      },

      del() {
        let found = Array.from(this.tasks).indexOf(this);
        if (found) {
          this.tasks.splice(found, 1);
          console.log(this.tasks);
        }
      },

      update() {

      }
    }
  }
</script>

<template>
  <div id="tasks">
    <h1>To do list</h1>
    <div class="tasks-items" v-for="item in tasks" :key="item.id">
      <TaskItem :task="item.task" @done="item.done = !item.done" :done="item.done" @del="del" />
    </div>
    <CreateTask @add="add" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0
}

body {
  background-color: #EAEAEA;
}

#tasks {
  position: relative;
  background-color: #FFF; 
  min-height: 300px;
  width: 40%;
  margin: 3rem 2rem;
  padding: 3rem 2rem 6rem 2rem;
  border-radius: 20px;
}

h1 {
  padding-bottom: 1rem;
  border-bottom: 1px solid black
}
</style>