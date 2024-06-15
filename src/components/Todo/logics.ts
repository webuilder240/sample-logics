import axios from 'axios';

export const fetchTodos = async () => {
  const response = await axios.get('https://dummyjson.com/todos');
  return response.data.todos;
};

export const createTodo = async (todo) => {
  const response = await axios.post('https://dummyjson.com/todos', todo);
  return response.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`/api/todos/${id}`);
};

export const toggleTodoStatus = async (todo) => {
  const response = await axios.patch(`https://dummyjson.com/todos/${todo.id}`, {
    completed: !todo.completed,
  });
  return response.data;
};

export const fetchTodoDetail = async (id) => {
  const response = await axios.get(`https://dummyjson.com/todos/${id}`);
  return response.data;
};

export const updateTodo = async (todo) => {
  const response = await axios.put(`/api/todos/${todo.id}`, todo);
  return response.data;
};
