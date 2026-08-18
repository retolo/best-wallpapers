import css from './Footer.module.css'




export default function Footer(){

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        const form = event.currentTarget;

        form.reset();
    }

    return(
        <>
            <footer className={css.footer}>
                <div className={css.footerWrapper}>
                    <h2 className={css.footerHeader}>New designs. First look. Exclusive offers.</h2>
                    <p className={css.underTextFooter}>Join the list for early access to every new wallpaper collection.</p>
                    <form onSubmit={handleSubmit} className={css.formFooter}>  
                        <input required type='email' placeholder='Email address' className={css.footerInput}/> 
                        <button className={css.buttonSend} type='submit'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </button>
                    </form>
                    
                </div>

                <div className={css.wrapper}>
                    <p className={css.footerText}>© 2026 Akiyo</p>
                    <p className={css.footerText}>Terms and Policies</p>

                </div>
            </footer>
        
        </>
    )
}