import css from './CatalogComponent.module.css'
import { itemsMark } from '@/app/db/db'
import { type ItemsMarkType } from '@/app/types/types'
import Image from 'next/image'
import Link from 'next/link'






export default function CatalogComponent(){
    return(
        <>
        <section className={css.container}>
            <div className={css.blockCatalog}>
                <h1 className={css.catalogHeader}>The Collection</h1>

                <hr/>


                <ul className={css.catalogList}>
                        {itemsMark.map((item: ItemsMarkType) =>(
                            <li className={css.listCatalogElement} key={item.id}>
                                <p className={css.saleText}>Sale</p>
                                    <div className={css.ImageWrapper}>
                                        <Link href={`/card/${item.id}`}><Image src={item.img} className={css.defaultImage} fill  alt='portrait_pic_1' /></Link>
                                        <Link href={`/card/${item.id}`}><Image src={item.underImg} className={css.hoverImage} fill  alt='under-portrait-1' /></Link>
                                    </div>

                                    <p className={css.nameWallPapers}>{item.name}</p>
                                    <p className={css.priceWallpapers}>{item.price.split(' ')[0]}<span className={css.OldPrice}>{item.price.split(' ')[1]}</span></p>
                            </li>
                        ))}

                </ul>



                <hr/>


                <div className={css.footerBlock}>
                    <p className={css.footerText}>© 2026 BestWallPapers</p>
                    <p className={css.footerText}>Terms and Policies</p>

                </div>

            </div>
        </section>
        
        
        
        </>
    )
}






