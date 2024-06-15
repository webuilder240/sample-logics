<template>
  <div>
    <input v-model="newTodoText" @keyup.enter="addTodo" placeholder="Add a new todo" />
  </div>
</template>

<script>
import { createTodo } from './logics';

export default {
  data() {
    return {
      newTodoText: '',
    };
  },
  methods: {
    async addTodo() {
      if (this.newTodoText.trim() === '') return;

      const newTodo = {
        text: this.newTodoText,
        completed: false,
      };

      const createdTodo = await createTodo(newTodo);
      this.$emit('todo-added', createdTodo);
      this.newTodoText = '';
    },
  },
};
</script>
