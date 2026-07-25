import Link from 'next/link'
import css from './Collections.module.css'
import Image from 'next/image'
import { itemsMark } from '@/app/db/db'
import { type ItemsMarkType } from '@/app/types/types'
export default function Collections(){
    return(
        <>
            <section className={css.collections}>
                
                    <div className={css.blockFirst}>
                        <div className={css.photoBlock}>

                            <Image src={'/car-collection.jpg'} alt='demonstrate photo wallpaper on different displays' width={1100} height={735}/>
                        </div>
                        <div className={css.textBlock}>
                            <h2 className={css.textBlockHeader}>Perfectly framed on every device.</h2>
                            <p className={css.textBlockParagraph}>Designed to display beautifully across desktop, laptop and mobile—with no awkward cropping.</p>
                        </div>
                         
                    </div>

                    <div className={css.block}>
                        <div className={css.track}>
                            <div className={css.group}>
                                <p className={css.text}>
                                CURATED COLLECTIONS · EXCLUSIVE ARTWORKS · INSTANT DOWNLOAD
                                </p>

                                <p className={css.text}>
                                    CURATED COLLECTIONS · EXCLUSIVE ARTWORKS · INSTANT DOWNLOAD
                                </p>

                                <p className={css.text}>
                                    CURATED COLLECTIONS · EXCLUSIVE ARTWORKS · INSTANT DOWNLOAD
                                </p> 
                            </div>
                            

                            <div className={css.group}>
                                <p className={css.text}>
                                CURATED COLLECTIONS · EXCLUSIVE ARTWORKS · INSTANT DOWNLOAD
                                </p>

                                <p className={css.text}>
                                    CURATED COLLECTIONS · EXCLUSIVE ARTWORKS · INSTANT DOWNLOAD
                                </p>

                                <p className={css.text}>
                                    CURATED COLLECTIONS · EXCLUSIVE ARTWORKS · INSTANT DOWNLOAD
                                </p> 
                            </div>     
                                             
                                
                        </div>
                    </div>

                    <div className={css.container}>
                        <div className={css.blockPopularCollections}>
                            <h2 className={css.headerPopularCollections}>Popular Collections</h2>
                            <ul className={css.listCollections}>
                                {itemsMark.map((item: ItemsMarkType) =>(
                                    <li className={css.listCollectionsElement} key={item.id}>
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

                        </div>

                    </div>

                    <div className={css.thirdBlock}>
                        <div className={css.textBlock}>
                            <h2 className={css.textBlockHeader}>Unmatched Quality</h2>
                            <p className={css.textBlockParagraph}>Created in exceptional 4K–6K+ resolution to preserve every brushstroke.</p>
                        </div>

                        <div className={css.photoBlock}>
                            <Image src={'/car-collection-two.jpg'} alt='demonstrate photo wallpaper on different displays' width={1200} height={800}/>
                        </div>


                    </div>

                
            </section>
        
        </>
    )
}