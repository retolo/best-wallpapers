import css from './Hero.module.css'
import Link from 'next/link'



export default function Hero(){
    return(


        <>
            <section className={css.hero}>
                <div className={css.container}>

                        <div className={css.heroBlock}>
                            <h1 className={css.heroHeader}>Museum-quality wallpapers.</h1>
                            <p className={css.heroText}>Exclusive impasto wallpapers for desktop & mobile.</p>
                            <Link href={'/catalog'}><button type='button' className={css.heroButton}>SHOP THE COLLECTION</button></Link>
                        </div>

                    
                    
                </div>
            </section>
        
        
        </>
    )
}