import React from 'react'
import css from './ContactsComponent.module.css'
import Image from 'next/image';
import Link from 'next/link';


export default function ContactsComponent(){

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        const form = event.currentTarget;


        event.preventDefault()



        form.reset();
    }




    return(
        <>
            <section className={css.container}>
                <div className={css.firstWrapper}>
                    <h1 className={css.contactHeader}>Contact</h1>
                    <form onSubmit={handleSubmit} className={css.form}>
                        <div className={css.wrapper}>
                            <input type='text' placeholder='Name' required className={css.contactInput}/>
                            <input type='email' placeholder='Email' required className={css.contactInput}/>
                        </div>
                        <input type='tel' placeholder='Phone' className={css.contactPhoneInput}/>
                        <textarea placeholder='Comment' className={css.contactTextArea}/>
                        <button type='submit' className={css.contactSubmitButton}>Submit</button>
                    </form>

                    <Link href={'/'}><Image className={css.contactImage} src={'/BestWallPapersLogo-black.png'} alt='logo' width={200} height={200}/></Link>
                </div>


                

            </section>
        
        </>
    )
}