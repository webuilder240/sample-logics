<template>
  <div>
    <input type="checkbox" :checked="todo.completed" @change="toggleTodo" />
    <span @click="viewDetail">{{ todo.todo }}</span>
    <button @click="deleteTodo">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleTodo() {
      this.$emit('toggle-todo', this.todo);
    },
    deleteTodo() {
      this.$emit('delete-todo', this.todo.id);
    },
    viewDetail() {
      this.$emit('view-detail', this.todo);
    },
  },
};
</script>
