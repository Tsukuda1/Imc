export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .tiltle span'),
  buttonClose: document.querySelector('.modal button.close'),
  
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

window.addEventListener('Keydow',handleKeydown)

function handleKeydown(event) {
  if(event.key ===	'Escape') {
    console.log('cliquei no esc')
    Modal.close()
  }
}