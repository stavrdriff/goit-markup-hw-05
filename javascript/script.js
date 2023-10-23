document.addEventListener('DOMContentLoaded', () => {
  
  function initModalTriggers() {
    const buttonsArr = [...document.querySelectorAll('[data-action="modalTrigger"]')];
    const modalActiveSelector = 'show';

    if (!buttonsArr.length) {
      return;
    } 

    buttonsArr.forEach((button, index) => {
      button.addEventListener('click', () => {
        modalHandler(button, index, modalActiveSelector);
        initModals(modalActiveSelector);
      })
    })
  }

  function modalHandler(trigger, index, modalActiveSelector) {
    const modals = [...document.querySelectorAll('.modal')];

    if (!modals.length) { 
      return;
    }
    
    modals.forEach((modal, i) => {
      modal.classList.remove(modalActiveSelector);

      if (i == index && !trigger.closest(`.${modalActiveSelector}`)) {
        modal.classList.add(modalActiveSelector);
      }
    })
  }

  function initModals(modalActiveSelector) {
    const modals = [...document.querySelectorAll('.modal')];

    if (!modals.length) { 
      return;
    }

    modals.forEach((modal) => {
      const interactiveElements = [...modal.querySelectorAll('input, button')];

      tabindexHandler(interactiveElements, modalActiveSelector)    
    })
  }

  function tabindexHandler(elements, modalActiveSelector) {
    elements.forEach((element) => {
      if (!element.closest(`.${modalActiveSelector}`)) {
        element.setAttribute('tabindex', '-1');
      } else { 
        element.setAttribute('tabindex', '0');
      }
    })
  }


  initModalTriggers();
  initModals();
});