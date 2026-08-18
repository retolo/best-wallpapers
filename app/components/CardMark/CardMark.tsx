'use client'
import { itemsMark } from "@/app/db/db"
import css from './CardMark.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination} from 'swiper/modules';
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ItemsMarkType } from "@/app/types/types";
import { CartStore } from "@/app/Stores/cartStore";
type CardMarkProps = {
    id: string
}

export default function CardMark({id}: CardMarkProps){


    
    const cryptoId = crypto.randomUUID();
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const {items, setItemCart} = CartStore();
    const wallPaper = useMemo(() =>{
        return itemsMark.find((item) => item.id === id)
    }, [id])

    console.log(wallPaper)
    



    const handleClickDescrButton = () =>{
        if(isClicked === true){
            setIsClicked(false)
        }else{
            setIsClicked(true)
        }
    }
    

    


    return(
        <>
        
            <section>
                <div className={css.container}>
                    <div className={css.photoBlock}>
                        <Swiper
                            pagination={{
                                type: 'fraction',
                            }}
                            navigation={false}
                            modules={[Pagination]}
                            className="mySwiper"
                        
                        >
                            <SwiperSlide>
                                {wallPaper !== undefined && 
                                    <Image  src={wallPaper.img} alt="wallpaper first photo" width={1040} height={1300}/>
                                
                                }
                            </SwiperSlide>
                            <SwiperSlide>
                                {wallPaper !== undefined &&
                                    <Image  src={wallPaper.underImg} alt="wallpaper second photo" width={1040} height={1300} />
                                }
                            </SwiperSlide>


                        </Swiper>
                    </div>

                    <div className={css.paymentBlock}>
                        <div className={css.wrapper}>
                            <h2 className={css.headerPayment}>{wallPaper?.name}</h2>
                            <p className={css.price}>{wallPaper?.price.split(' ')[0]} <span className={css.priceUnder}>{wallPaper?.price.split(' ')[1]}</span></p>
                            <p className={css.addText}>Taxes included.</p>
                            <p className={css.paymentInfo}>Pay in 3 interest-free instalments for orders over 50,00 £ with                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                                    </svg> <span className={css.learText}>Learn more</span></p>
                        </div>

                        <hr className={css.firstChar}/>
                        
                        <div className={css.buttonBlock}>
                            <button onClick={() => setItemCart(wallPaper !== undefined ? {id: `${wallPaper.id}-${cryptoId}`, img: wallPaper.img, underImg: wallPaper.underImg, price: wallPaper.price, name: wallPaper.name} : {id: `${itemsMark[0].id}-${cryptoId}`, img: itemsMark[0].img, underImg: itemsMark[0].underImg, price: itemsMark[0].price, name: itemsMark[0].name})} className={css.addButton} type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"/>
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                </svg>ADD TO CART</button>
                            <button className={css.buyButton} type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                                </svg>
                            BUY WITH APPLE PAY
                            
                            </button>

                            
                            
                        </div>
                        <p className={css.buttonsText}>More payment options</p>
                        <hr/>
                        <div className={css.descrWrapper}>
                        <div className={css.descrHeader}>
                            <p className={css.descrText}>DESCRIPTION</p>

                            {isClicked === false 
                            
                            ?   <svg onClick={handleClickDescrButton} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={css.iconArrow} viewBox="0 0 16 16">
                                    <path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659"/>
                                </svg>

                            : 
                                <svg onClick={handleClickDescrButton} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={css.iconArrow}  viewBox="0 0 16 16">
                                    <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
                                </svg>
                                
                            }







                        </div>
                            
                            <div className={`${css.descrContent} ${isClicked ? css.open : ""}`}>
                                <p className={css.paragraph}>
                                    <strong>Passion · Vol. 1</strong> is a curated collection of exclusive
                                    impasto wallpapers celebrating the things that inspire us most. From
                                    timeless machines and iconic craftsmanship to unforgettable moments and
                                    lifelong pursuits, each artwork captures the passion behind the subjects
                                    we admire.
                                </p>

                                <p className={css.paragraph}>
                                    Created in exceptional <strong>4K–6K+ resolution</strong>, each wallpaper
                                    has been carefully composed to remain crisp across desktop, laptop and
                                    mobile displays, preserving every painterly detail exactly as intended.
                                </p>

                                <h3 className={css.title}>What&apos;s Included</h3>

                                <ul className={css.list}>
                                    <li>Collection of 9 wallpapers</li>
                                    <li>Designed for desktop, laptop & mobile</li>
                                    <li>4K–6K+ resolution</li>
                                    <li>Instant ZIP download</li>
                                    <li>Lifetime personal use</li>
                                </ul>

                                <h3 className={css.title}>Instant Download</h3>

                                <p className={css.paragraph}>
                                    Your purchase is available immediately after checkout. Simply download
                                    the included ZIP file using the link sent to your email and start using
                                    your new wallpapers within seconds.
                                </p>
                            </div>

                            
                            
                            <hr/>
                        </div>

                    </div>
                </div>




                <div className={css.secondContainer}>
                    <p className={css.likeText}>You may also like</p>
                    <div className={css.blockPopularCollections}>
                        
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
            </section>
        </>
    )
}