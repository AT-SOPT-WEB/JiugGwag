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


export {
  TodoDTO,
  initTodoStorage,
  getAllTodos,
};