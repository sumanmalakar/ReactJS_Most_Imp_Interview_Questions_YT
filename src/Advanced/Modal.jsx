import react, from 'react';
import ReactDOM from 'react-dom';
import './modal.css'

const Modal = ({onClose}) =>{
    return ReactDOM.createPortal(
        <div className='modal'>
            <h2>This is a modal</h2>
            <button onClick={onClose}>Close Modal</button>
        </div>,
        document.getElementById('modal-root')
    )
}

export default Modal