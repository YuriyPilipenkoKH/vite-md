import React, { useEffect, } from 'react'
import { createPortal } from 'react-dom';
import { useModalStore } from '../../store/useModalStore';




interface MainModalProps {
  contact?: string
}
const modalRoot = document.getElementById('modal-root');

const MainModal: React.FC<MainModalProps> = () => {
  const {modalIsOpen, onModalClose} = useModalStore()

  useEffect(() => {
    const handleBackdropClick =( e:MouseEvent ) => {
      if ((e.target as HTMLElement).classList.contains("modal-backdrop")) {
        onModalClose()
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onModalClose()
        }
    };

    const body = document.body;
    body.style.overflow = 'hidden';
    document.addEventListener('click', handleBackdropClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
        body.style.overflow = 'unset';
        document.removeEventListener('click', handleBackdropClick);
        document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalIsOpen]);


    if (!modalRoot) return null;
    return createPortal(
   
        <div
          className={`modal ModalOverlay  ${
          modalIsOpen
            ? ['active', 'modal-backdrop'].join(' ')
            : 'modal-backdrop'
            }`}>
          <div className='ModalContainer'>
            <p> {'lang.appTitle' } </p>
            <p> {'lang.updateInfo'} </p>

          </div>
        </div>
      ,
      modalRoot
    )

}

export default MainModal