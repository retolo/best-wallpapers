'use client'

import React from 'react';
import css from './ModalSale.module.css'



type ModalProps = {
    onClose: () => void;
}

export default function ModalSale({onClose}: ModalProps){



    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        onClose()

    }


    return(
        <>
            <div className={css.backDrop}>
                <div className={css.modal}>
                    <svg onClick={onClose} className={css.crossIcon} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <div className={css.wrapper}>
                        <div className={css.info}>

                            <h2 className={css.modalHeader}>BestWallPaper Sale - 15% Off!</h2>
                            <p className={css.modalText}>Sign up to &apos;BestWallPaper&apos; newsletter and get 15% off your first order!</p>

                            <form onSubmit={handleFormSubmit} className={css.form}>
                                <input required className={css.input} type='text' placeholder='First name'/>
                                <input required className={css.input} type='text' placeholder='Last name'/>
                                <input required className={css.input} type='email' placeholder='Email name'/>


                                <button type='submit' className={css.submit}>Submit</button>
                            </form>

                            <p className={css.modalText}>By signing up, you agree to receive marketing emails. View our privacy policy and terms of service for more info.</p>


                        </div>

                        {/* <Image className={css.imageModal} src={''} alt='photo modal' width={650} height={500}/> */}
                        <div className={css.bgModal}>

                        </div>
                    </div>
                </div>

            </div>
        
        
        
        
        </>
    )
}