/**
 * 할 일 목록을 테이블에 렌더링합니다.
 * @param {Array} todos - 렌더링할 할 일 목록 배열
 */
const renderTable = (todos) => {
  const tableBody = document.querySelector('.todo-table__body');
  tableBody.innerHTML = '';

  if (todos.length === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.innerHTML = `
      <td colspan="4" class="todo-table__empty-message">표시할 할 일이 없습니다.</td>
    `;
    tableBody.appendChild(emptyRow);
    return;
  }

  todos.forEach((todo) => {
    const row = document.createElement('tr');
    row.classList.add('todo-item');
    if (todo.completed) {
      row.classList.add('todo-item--completed');
    }

    const importanceClass = `todo-table__importance--${todo.priority}`;
    const statusClass = todo.completed ? 'todo-table__status--completed' : 'todo-table__status--uncompleted';
    const contentClass = todo.completed ? 'todo-table__content--completed' : '';

    row.innerHTML = `
      <td>
        <input type="checkbox" class="todo-table__checkbox-item" data-id="${todo.id}">
      </td>
      <td class="${importanceClass}">${todo.priority}</td>
      <td class="${statusClass}">${todo.completed ? '✅' : '❌'}</td>
      <td class="${contentClass}">${todo.title}</td>
    `;
    
    tableBody.appendChild(row);
  });
};

/**
 * 모달을 표시합니다.
 * @param {string} message - 모달에 표시할 메시지
 */
const showModal = (message) => {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.modal-overlay');
  const modalMessage = document.querySelector('.modal__message');

  const closeModal = () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    closeModalButton.removeEventListener('click', closeModal);
  };

  modalMessage.textContent = message;
  modal.style.display = 'flex';
  overlay.style.display = 'block';

  const closeModalButton = document.querySelector('.modal__close-button');
  closeModalButton.addEventListener('click', closeModal);
};

/**
 * 활성 탭 상태를 업데이트합니다.
 * @param {HTMLElement} activeTab - 활성화할 탭 요소
 */
const updateActiveTab = (activeTab) => {
  document.querySelectorAll('.tab-button').forEach(tab => {
    tab.classList.remove('is-active');
  });
  
  activeTab.classList.add('is-active');
};

/**
 * 입력 필드의 유효성을 검사합니다.
 * @param {string} title - 할 일 제목
 * @param {string} priority - 중요도
 * @returns {boolean} 유효성 검사 결과
 */
const validateInput = (title, priority) => {
  if (title.trim() === '') {
    showModal('할 일을 입력해주세요.');
    return false;
  }
  
  if (!priority) {
    showModal('중요도를 선택해주세요.');
    return false;
  }
  
  return true;
};

/**
 * 입력 필드를 초기화합니다.
 */
const resetInput = () => {
  const input = document.querySelector('.todo-form__input');
  const priority = document.querySelector('#importance-select');
  input.value = '';
  priority.selectedIndex = 0;
  input.focus();
};

export { 
  renderTable, 
  showModal, 
  updateActiveTab, 
  validateInput, 
  resetInput 
};