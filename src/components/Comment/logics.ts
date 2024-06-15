import axios from "axios";

type CommentParam = {
  text: string;
};

type Comment = {
  id: number;
  text: string;
};

export const fetchComments = async (todoId: number) => {
  const response = await axios.get(`/api/todos/${todoId}/comments`);
  return response.data;
};

export const createComment = async (todoId: number, comment: CommentParam) => {
  const response = await axios.post(`/api/todos/${todoId}/comments`, comment);
  return response.data;
};

export const addComment = async (todoId: number, newCommentText: string, comments: Comment[]) => {
  if (newCommentText.trim() === '') return comments;

  const newComment = {
    text: newCommentText,
  };

  const createdComment = await createComment(todoId, newComment);
  return [...comments, createdComment];
};
