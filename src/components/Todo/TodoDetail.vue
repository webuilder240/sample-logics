<template>
  <div v-if="todo">
    <h2>{{ todo.text }}</h2>
    <textarea v-model="todo.notes"></textarea>
    <button @click="updateTodo">Update</button>
    <comment-list :todoId="todo.id" />
  </div>
</template>

<script>
import { fetchTodoDetail, updateTodo } from './logics';
import CommentList from '../Comment/CommentList.vue';

export default {
  components: {
    CommentList,
  },
  props: {
    todoId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      todo: null,
    };
  },
  async created() {
    this.todo = await fetchTodoDetail(this.todoId);
  },
  methods: {
    async updateTodo() {
      await updateTodo(this.todo);
      alert('Todo updated');
    },
  },
};
</script>
