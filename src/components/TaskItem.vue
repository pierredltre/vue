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
      },
      lineThrough() {
        if(this.done) {
          return "text-decoration: line-through";
        }
      },
      del(task) {
        this.$emit('del', task)
      }
    }
  }

</script>

<template>
  <div>
    <input type="checkbox" :name="task" :checked="isChecked" @click="$emit('done')">
    <input type="text" :value="task" :style="lineThrough">
    <button @click="del(task)">X</button>
  </div>
</template>

<style scoped>
  div {
    border-top: 1px solid black;
    padding: 1rem 0;
  }

  div > input[type="checkbox"] {
    margin-right: .5rem;
  }

  div > input[type="text"] {
    border: 0;
    font-size: 1.2rem;
    width: 600px;
  }
</style>