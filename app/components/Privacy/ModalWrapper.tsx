import React from 'react'
import css from './ModalWrapper.module.css'
import { createPortal } from 'react-dom'

type PrivacyProps = {
    onClose: () => void
    isOpen: boolean
    children: React.ReactNode
}

export default function ModalWrapper({onClose, isOpen, children}: PrivacyProps){




    return createPortal(
        <div className={`${css.backdrop} ${isOpen ? css.backdropOpen : ''}`} onClick={onClose}>
            <div className={css.modal} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,


        document.body
    )

}


