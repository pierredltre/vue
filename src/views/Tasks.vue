<script>
  import TaskItem from '../components/TaskItem.vue'
  import CreateTask from '../components/CreateTask.vue'

  export default {
    name: 'Tasks',
    components: { TaskItem, CreateTask },
    data() {
      return {
        tasks: [
          { task: 'test', done: false },
          { task: 'à faire', done: true }
        ]
      }
    }
  }
</script>

<template>
  <div id="tasks">
    <h2>To do list</h2>
    <div class="tasks-items" v-for="item in tasks" :key="item.task">
      <TaskItem :task="item.task" :done="item.done"/>
    </div>
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
  background-color: #FFF; 
  width: 40%;
  margin: 3rem 2rem;
  padding: 3rem 2rem;
}

#tasks > .tasks-items {
  margin: 1rem 0
}
</style>