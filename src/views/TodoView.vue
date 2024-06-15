<template>
  <div>
    <todo-input @todo-added="addTodo" />
    <todo-list ref="todoList" @view-detail="showDetail" />
    <todo-detail v-if="selectedTodoId" :todoId="selectedTodoId" />
  </div>
</template>

<script>
import TodoInput from '../components/Todo/TodoInput.vue';
import TodoList from '../components/Todo/TodoList.vue';
import TodoDetail from '../components/Todo/TodoDetail.vue';

export default {
  components: {
    TodoInput,
    TodoList,
    TodoDetail,
  },
  data() {
    return {
      selectedTodoId: null,
    };
  },
  methods: {
    addTodo(todo) {
      this.$refs.todoList.todos.push(todo);
    },
    showDetail(todoId) {
      this.selectedTodoId = todoId;
    },
  },
};
</script>
