import css from './Collections.module.css'
import Image from 'next/image'

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

                    {/* <div className="marquee-container">
                        <div className="marquee-content">
                            CURATED COLLECTIONS · EXCLUSIVE ARTWORKS · INSTANT DOWNLOAD
                        </div>
                    </div> */}

                    <div className={css.container}>
                        <div className={css.blockPopularCollections}>
                            <h2 className={css.headerPopularCollections}>Popular Collections</h2>
                            <ul className={css.listCollections}>
                                <li className={css.listCollectionsElement}>
                                    <div className={css.ImageWrapper}>
                                        <Image src={'/portrait_pic_1.jpg'} className={css.defaultImage} fill  alt='portrait_pic_1' />
                                        <Image src={'/under-portrait-1.jpg'} className={css.hoverImage} fill  alt='under-portrait-1' />
                                    </div>

                                    <p className={css.nameWallPapers}>Wealth - Vol. 1</p>
                                    <p className={css.priceWallpapers}>£9.00 <span className={css.OldPrice}>£16.95</span></p>
                                </li>

                                <li className={css.listCollectionsElement}>
                                    <div className={css.ImageWrapper}>
                                        <Image src={'/portrait_pic_2.jpg'} fill priority alt='portrait_pic_1' />
                                        <Image src={'/under-portrait-2.jpg'} className={css.hoverImage} fill priority alt='under-portrait-2' />
                                    </div>

                                     <p className={css.nameWallPapers}>Wealth - Vol. 1</p>
                                     <p className={css.priceWallpapers}>£9.00 <span className={css.OldPrice}>£16.95</span></p>
                                </li>

                                <li className={css.listCollectionsElement}>
                                    <div className={css.ImageWrapper}>
                                        <Image src={'/portrait_pic_3.jpg'} fill priority alt='portrait_pic_1'/>
                                        <Image src={'/under-portrait-3.jpg'} className={css.hoverImage} fill priority alt='under-portrait-3' />
                                    </div>

                                     <p className={css.nameWallPapers}>Wealth - Vol. 1</p>
                                     <p className={css.priceWallpapers}>£9.00 <span className={css.OldPrice}>£16.95</span></p>
                                </li>

                                <li className={css.listCollectionsElement}>
                                    <div className={css.ImageWrapper}>
                                        <Image src={'/portrait_pic_4.jpg'} fill priority alt='portrait_pic_1' />
                                        <Image src={'/under-portrait-4.jpg'} className={css.hoverImage} fill priority alt='under-portrait-4' />
                                    </div>

                                     <p className={css.nameWallPapers}>Wealth - Vol. 1</p>
                                     <p className={css.priceWallpapers}>£9.00 <span className={css.OldPrice}>£16.95</span></p>
                                </li>

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