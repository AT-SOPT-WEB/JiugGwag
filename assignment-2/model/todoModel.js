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


export {
  TodoDTO,
};