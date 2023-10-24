document.addEventListener('DOMContentLoaded', () => {
  
  function initModalTriggers() {
    const buttonsArr = [...document.querySelectorAll('[data-action="modalTrigger"]')];
    const modalActiveSelector = 'is-open';

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

    const body = document.querySelector('body');

    body.classList.toggle('is-blocked')
    
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
      const interactiveElements = [...modal.querySelectorAll('input, button, a')];
      const allInteractiveElements = [...document.querySelectorAll('input, button, a')];
      let pageInteractiveElements = [];

      allInteractiveElements.forEach((el) => {
        if (!el.closest('.modal')) { 
          pageInteractiveElements.push(el);
        }
      })

      tabindexHandler(interactiveElements, modalActiveSelector,pageInteractiveElements)    
    })
  }

  function tabindexHandler(elements, modalActiveSelector, pageInteractiveElements) {
    elements.forEach((element) => {
      if (!element.closest(`.${modalActiveSelector}`)) {
        element.setAttribute('tabindex', '-1');

        pageInteractiveElements.forEach((element) => {
          element.setAttribute('tabindex', '0');
        })
      } else { 
        element.setAttribute('tabindex', '0');

        pageInteractiveElements.forEach((element) => {
          element.setAttribute('tabindex', '-1');
        })
      }
    })


  }


  initModalTriggers();
  initModals();
});