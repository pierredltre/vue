<script>
export default {
  name: 'CreateTask',
  data() {
    return {
      task: ""
    }
  },
  methods: {
    clicked(task) {
      if(task.length > 0) {
        this.$emit('addTask', task);
      }
    }
  }
}
</script>

<template>
  <div>
    <input type="text" name="newTask" v-model="task">
    <button @click="clicked(task)">Ajouter</button>
  </div>
</template>

<style scoped>
  div {
    position: absolute;
    bottom: 3rem;
  }

  input {
    border: 0px;
    border-radius: 0;
    border-bottom: 2px solid black;
    height: 32px;
    width: 300px;
    margin-right: 2rem;
    padding: 4px 6px;
  }

  button {
    background-color: black;
    color: white;
    padding: .5rem 1rem;
  }
</style>