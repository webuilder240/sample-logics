import axios from 'axios';

type TodoId = number;
type Todo = {
  id: TodoId;
  title: string;
  completed: boolean;
}

export const fetchTodos = async () => {
  const response = await axios.get('https://dummyjson.com/todos');
  return response.data.todos;
};

export const createTodo = async (todo): Promise<Todo[]> => {
  const response = await axios.post('https://dummyjson.com/todos', todo);

  return response.data;
};

export const deleteTodo = async (todos: Todo[], todo: Todo): Promise<Todo[]> => {
  await axios.delete(`https://dummyjson.com/todos/${todo.id}`);
  todos = todos.filter((t) => t.id !== todo.id);
  return todos
};

export const toggleTodoStatus = async (todo: Todo) => {
  const response = await axios.patch(`https://dummyjson.com/todos/${todo.id}`, {
    completed: !todo.completed,
  });
  return response.data;
};

export const fetchTodoDetail = async (id: TodoId) => {
  const response = await axios.get(`https://dummyjson.com/todos/${id}`);
  return response.data;
};

export const updateTodo = async (todo: Todo) => {
  const response = await axios.put(`/api/todos/${todo.id}`, todo);
  return response.data;
};
