<template>
  <div>
    <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete-todo="deleteTodo"
      @toggle-todo="toggleTodo"
      @view-detail="viewDetail"
    />
  </div>
</template>

<script>
import { fetchTodos, deleteTodo, toggleTodoStatus } from './logics';
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [],
    };
  },
  async created() {
    this.todos = await fetchTodos();
  },
  methods: {
    async deleteTodo(todo) {
      this.todos = await deleteTodo(todo);
    },
    async toggleTodo(todo) {
      const originalStatus = todo.completed;
      todo.completed = !todo.completed;

      try {
        await toggleTodoStatus(todo);
      } catch (error) {
        todo.completed = originalStatus; // Rollback on error
        console.error('Failed to update todo status:', error);
      }
    },
    viewDetail(todo) {
      this.$emit('view-detail', todo.id);
    },
  },
};
</script>
