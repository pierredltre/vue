<script>
  export default {
    name: 'TaskItem',
    props: {
      task: String,
      done: Boolean
    },
    computed: {
      isChecked() {
        if(this.done) {
          return 'checked';
        }
      }
    },
    methods: {
      updateCheck() {
        this.done == !this.done;
      }
    }
  }

</script>

<template>
  <div>
    <input type="checkbox" name="done" id="done" :checked="isChecked" @click="updateCheck">
    <label for="done">{{ task }}</label>
  </div>
</template>

<style scoped>
  div > input {
    margin-right: .5rem
  }
</style>