import css from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AuthNav from '../AuthNav/AuthNav'

export default function Header(){
    return(
        <>
            
            <header className={css.header}>
                <div className={css.container}>

                    <nav className={css.navigation}>
                        <ul className={css.navigationList}>
                            <li>
                                <Link className={css.linkNavigation} href={'/'}>Home</Link>
                            </li>

                            <li>
                                <Link className={css.linkNavigation} href={'/catalog'}>Catalog</Link>
                            </li>

                            <li>
                                <Link className={css.linkNavigation} href={'/contact'}>Contact</Link>
                            </li>
                        </ul>

                        <Image className={css.icon} src={'/BestWallPapersLogo.png'} alt='Logo of the shop' width={100} height={100}/>
                        
                        <AuthNav/>

                    </nav>

                </div>
            </header>
        
        
        
        </>
    )
}