class TodoDTO {
  /**
   * Todo 객체를 생성합니다.
   * @param {Object} params - Todo 객체 생성을 위한 매개변수
   * @param {number} params.id - Todo의 고유 ID
   * @param {string} params.title - Todo의 제목
   * @param {boolean} params.completed - Todo의 완료 여부
   * @param {number} params.priority - Todo의 우선순위 (1-3)
   */
  constructor({ id, title, completed, priority }) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.priority = parseInt(priority, 10);
    this.createdAt = new Date().toISOString();
  }
}

const STORAGE_KEY = 'todos';

/**
 * 초기 데이터가 없을 경우 샘플 데이터로 초기화합니다.
 * @param {Array} sampleTodos - 샘플 할 일 목록 배열
 */
const initTodoStorage = (sampleTodos) => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleTodos || []));
  }
};

/**
 * 저장된 모든 할 일을 조회합니다.
 * @returns {Array} TodoDTO 객체의 배열
 */
const getAllTodos = () => {
  const todos = localStorage.getItem(STORAGE_KEY);
  return todos ? JSON.parse(todos).map(todo => new TodoDTO(todo)) : [];
};

/**
 * 할 일 목록을 로컬 스토리지에 저장합니다.
 * @param {Array} todos - 저장할 할 일 목록 배열
 */
const saveTodos = (todos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

/**
 * 새 할 일을 추가합니다.
 * @param {TodoDTO} newTodo - 추가할 새 할 일 객체
 * @returns {Array} 업데이트된 할 일 목록
 */
const addTodo = (newTodo) => {
  const todos = getAllTodos();
  const updatedTodos = [...todos, new TodoDTO(newTodo)];
  saveTodos(updatedTodos);
  return updatedTodos;
};

/**
 * 선택한 할 일을 삭제합니다.
 * @param {Array<number>} ids - 삭제할 할 일 ID 배열
 * @returns {Array} 업데이트된 할 일 목록
 */
const deleteTodos = (ids) => {
  const todos = getAllTodos();
  const updatedTodos = todos.filter(todo => !ids.includes(todo.id));
  saveTodos(updatedTodos);
  return updatedTodos;
};

/**
 * 선택한 할 일을 완료 처리합니다.
 * @param {Array<number>} ids - 완료 처리할 할 일 ID 배열
 * @returns {Object} 완료 결과 객체
 */
const completeTodos = (ids) => {
  const todos = getAllTodos();
  
  const selectedTodos = todos.filter(todo => ids.includes(todo.id));
  const alreadyCompletedTodos = selectedTodos.filter(todo => todo.completed);
  
  if (alreadyCompletedTodos.length > 0) {
    return {
      success: false,
      message: '이미 완료된 할 일이 포함되어 있습니다.',
      updatedTodos: todos
    };
  }
  
  const updatedTodos = todos.map(todo => {
    if (ids.includes(todo.id)) {
      return { ...todo, completed: true };
    }
    return todo;
  });
  
  saveTodos(updatedTodos);
  
  return {
    success: true,
    message: '선택한 할 일을 완료 처리했습니다.',
    updatedTodos
  };
};

/**
 * 완료된 할 일만 조회합니다.
 * @returns {Array} 완료된 할 일 목록
 */
const getCompletedTodos = () => {
  return getAllTodos().filter(todo => todo.completed);
};

/**
 * 미완료된 할 일만 조회합니다.
 * @returns {Array} 미완료된 할 일 목록
 */
const getUncompletedTodos = () => {
  return getAllTodos().filter(todo => !todo.completed);
};

/**
 * 중요도 순으로 할 일을 정렬합니다.
 * @param {string} order - 정렬 순서 ('asc' 또는 'desc')
 * @returns {Array} 정렬된 할 일 목록
 */
const getTodosByImportance = (order = 'desc') => {
  const todos = getAllTodos();
  return [...todos].sort((a, b) => {
    return order === 'asc' 
      ? a.priority - b.priority
      : b.priority - a.priority;
  });
};

export {
  TodoDTO,
  initTodoStorage,
  getAllTodos,
  addTodo,
  deleteTodos,
  completeTodos,
  getCompletedTodos,
  getUncompletedTodos,
  getTodosByImportance
};