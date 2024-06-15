<template>
  <div>
    <div v-for="comment in comments" :key="comment.id">
      <p v-text="comment.text"></p>
    </div>
    <textarea v-model="newCommentText"></textarea>
    <button @click="handleAddComment">Add Comment</button>
  </div>
</template>

<script>
import { fetchComments, addComment } from './logics';

export default {
  props: {
    todoId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      comments: [],
      newCommentText: '',
    };
  },
  async created() {
    this.comments = await fetchComments(this.todoId);
  },
  methods: {
    async handleAddComment() {
      this.comments = await addComment(this.todoId, this.newCommentText, this.comments);
      this.newCommentText = '';
    },
  },
};
</script>
