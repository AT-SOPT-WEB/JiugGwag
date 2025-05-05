import {
  TodoDTO,
  initTodoStorage,
  getAllTodos,
  addTodo,
  deleteTodos,
  completeTodos,
  getCompletedTodos,
  getUncompletedTodos,
} from '../model/todoModel.js';

import {
  renderTable,
  showModal,
  updateActiveTab,
  validateInput,
  resetInput
} from '../view/todoView.js';

import { todos } from '../data/todoData.js';

const SAMPLE_TODOS = todos;

/**
 * 새 할 일을 추가하는 이벤트 핸들러
 */
const handleAddTodo = () => {
  const titleInput = document.querySelector('.todo-form__input');
  const prioritySelect = document.querySelector('#importance-select');
  
  if (!validateInput(titleInput.value, prioritySelect.value)) {
    return;
  }
  
  const newTodo = new TodoDTO({
    id: Date.now(),
    title: titleInput.value,
    completed: false,
    priority: prioritySelect.value
  });
  
  const updatedTodos = addTodo(newTodo);
  
  resetInput();
  
  renderTable(updatedTodos);
  showModal('할 일이 추가되었습니다.');
};

/**
 * 선택한 할 일을 삭제하는 이벤트 핸들러
 */
const handleDeleteTodos = () => {
  const selectedCheckboxes = document.querySelectorAll('.todo-table__checkbox-item:checked');
  
  if (selectedCheckboxes.length === 0) {
    showModal('삭제할 할 일을 선택해주세요.');
    return;
  }
  
  const selectedIds = Array.from(selectedCheckboxes).map(checkbox => 
    parseInt(checkbox.dataset.id, 10)
  );
  
  const updatedTodos = deleteTodos(selectedIds);
  
  renderTable(updatedTodos);
  showModal(`${selectedIds.length}개의 할 일이 삭제되었습니다.`);
};

/**
 * 선택한 할 일을 완료 처리하는 이벤트 핸들러
 */
const handleCompleteTodos = () => {
  const selectedCheckboxes = document.querySelectorAll('.todo-table__checkbox-item:checked');
  
  if (selectedCheckboxes.length === 0) {
    showModal('완료 처리할 할 일을 선택해주세요.');
    return;
  }
  
  const selectedIds = Array.from(selectedCheckboxes).map(checkbox => 
    parseInt(checkbox.dataset.id, 10)
  );
  
  const result = completeTodos(selectedIds);
  
  if (result.success) {
    renderTable(result.updatedTodos);
  } else {
    showModal(result.message);
  }
};

/**
 * 모든 할 일을 보여주는 이벤트 핸들러
 * @param {Event} event - 클릭 이벤트 객체
 */
const handleShowAllTodos = (event) => {
  updateActiveTab(event.currentTarget);
  const todos = getAllTodos();
  renderTable(todos);
};

/**
 * 완료된 할 일만 보여주는 이벤트 핸들러
 * @param {Event} event - 클릭 이벤트 객체
 */
const handleShowCompletedTodos = (event) => {
  updateActiveTab(event.currentTarget);
  const completedTodos = getCompletedTodos();
  renderTable(completedTodos);
};

/**
 * 미완료된 할 일만 보여주는 이벤트 핸들러
 * @param {Event} event - 클릭 이벤트 객체
 */
const handleShowUncompletedTodos = (event) => {
  updateActiveTab(event.currentTarget);
  const uncompletedTodos = getUncompletedTodos();
  renderTable(uncompletedTodos);
};

/**
 * 테이블 헤더의 전체 선택 체크박스 이벤트 핸들러
 */
const handleSelectAllTodos = (event) => {
  const isChecked = event.target.checked;
  const checkboxes = document.querySelectorAll('.todo-table__checkbox-item');
  
  checkboxes.forEach(checkbox => {
    checkbox.checked = isChecked;
  });
};

/**
 * 개별 체크박스를 클릭할 때, 전체 선택 체크박스를 해제하거나 선택하는 이벤트 핸들러
 */
const handleIndividualCheckboxChange = () => {
  const checkboxes = document.querySelectorAll('.todo-table__checkbox-item');
  const selectAllCheckbox = document.querySelector('.todo-table__checkbox-all');
  selectAllCheckbox.checked = Array.from(checkboxes).every(checkbox => checkbox.checked);
};


/**
 * 엔터 키로 할 일 추가 처리 이벤트 핸들러
 * @param {KeyboardEvent} event - 키보드 이벤트 객체
 */
const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleAddTodo();
  }
};

/**
 * 모달 오버레이 클릭 시 닫기 이벤트 핸들러
 */
const handleModalOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.modal-overlay');
    
    modal.style.display = 'none';
    overlay.style.display = 'none';
  }
};

/**
 * 중요도 탭 토글 및 드롭다운 표시 이벤트 핸들러
 * @param {Event} event - 클릭 이벤트 객체
 */
const handleImportanceTab = (event) => {
  updateActiveTab(event.currentTarget);
  
  const dropdown = event.currentTarget.nextElementSibling;
  const icon = event.currentTarget.querySelector('.select-icon');
  
  dropdown.classList.toggle('is-active');
  if (icon) {
    icon.classList.toggle('is-active');
  }
  
  const closeDropdown = (e) => {
    if (!event.currentTarget.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('is-active');
      if (icon) {
        icon.classList.remove('is-active');
      }
      document.removeEventListener('click', closeDropdown);
    }
  };
  
  setTimeout(() => {
    document.addEventListener('click', closeDropdown);
  }, 0);
};

/**
 * 중요도 옵션 선택 이벤트 핸들러
 * @param {Event} event - 클릭 이벤트 객체
 */
const handleImportanceSelect = (event) => {
  const value = event.currentTarget.dataset.value;
  const selectElement = document.querySelector('.tab-select--importance');
  selectElement.value = value;
  const dropdown = event.currentTarget.closest('.custom-dropdown');
  const icon = document.querySelector('.tab-button--importance .select-icon');
  dropdown.classList.remove('is-active');
  if (icon) {
    icon.classList.remove('is-active');
  }
  
  const filteredTodos = getAllTodos().filter(todo => 
    todo.priority === parseInt(value, 10)
  );
  
  renderTable(filteredTodos);
};


const initTabButtons = () => {
  document.querySelector('.tab-button--all').addEventListener('click', handleShowAllTodos);
  document.querySelector('.tab-button--completed').addEventListener('click', handleShowCompletedTodos);
  document.querySelector('.tab-button--uncompleted').addEventListener('click', handleShowUncompletedTodos);
};

const initFormButtons = () => {
  document.querySelector('.todo-form__add-button').addEventListener('click', handleAddTodo);
  document.querySelector('.todo-form__delete-button').addEventListener('click', handleDeleteTodos);
  document.querySelector('.todo-form__complete-button').addEventListener('click', handleCompleteTodos);
};

const initInputFields = () => {
  document.querySelector('.todo-form__input').addEventListener('keypress', handleKeyPress);
};

const initCheckboxes = () => {
  document.querySelector('.todo-table__checkbox-all').addEventListener('change', handleSelectAllTodos);
  document.querySelectorAll('.todo-table__checkbox-item').forEach(checkbox => {
    checkbox.addEventListener('change', handleIndividualCheckboxChange);
  });
};

const initModalOverlay = () => {
  document.querySelector('.modal-overlay').addEventListener('click', handleModalOverlayClick);
};

const initCustomDropdown = () => {
  document.querySelector('.tab-button--importance').addEventListener('click', handleImportanceTab);
  document.querySelectorAll('.custom-dropdown__option').forEach(option => {
    option.addEventListener('click', handleImportanceSelect);
  });
};


const initTodo = () => {
  initTodoStorage(SAMPLE_TODOS);
  
  renderTable(getAllTodos());
  
  initTabButtons(); 
  initCustomDropdown(); 
  initFormButtons(); 
  initInputFields(); 
  initCheckboxes(); 
  initModalOverlay();
  
  updateActiveTab(document.querySelector('.tab-button--all'));
};

export { initTodo };