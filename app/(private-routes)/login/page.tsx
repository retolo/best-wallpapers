'use client'
import css from './Login.module.css'
import Link from 'next/link'
import { useRouter } from "next/navigation";

export default function Login(){
    const router = useRouter();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        const form = event.currentTarget;

        event.preventDefault();


        form.reset();

        const time = setTimeout(() =>{
            router.push('/')
        }, 1000)

        return () =>{
            clearTimeout(time)
        }
        
    }

    return(
        <section className={css.container}>
            <Link href={'/'}><h3 className={css.loginHeader}>BestWallPapers</h3></Link>


            <div className={css.wrapper}>
                <h3 className={css.wrapperHeader}>Sign in</h3>
                <p className={css.wrapperText}>Sign in or create an account</p>
                <button type='button' className={css.buttonRegisterGoogle}>
                    Continue with <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                                  </svg>
                </button>
                <div className={css.centerLine}>
                    <span></span>
                    <p>OR</p>
                    <span></span>

                </div>
                <form onSubmit={handleSubmit} className={css.loginForm}>
                    <input type='email' placeholder='Email' className={css.loginInput}/>
                    <button type='submit' className={css.loginButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </button>

                </form>

                <Link href={'/privacy'}><p className={css.policy}>Privacy policy</p></Link>

            </div>

        </section>
    )
}