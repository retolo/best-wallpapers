import css from './AskSection.module.css'
import { useState } from 'react'
import { itemAccordion } from '@/app/db/db';



export default function AskSection(){
    const [idArr, setId] = useState<string[]>([]);

    const handleClose = (id: string) =>{
        
        const filterId = idArr.some((itemId) => itemId === id);
        

        if(filterId === true){
            const newArr = idArr.filter((itemId) => itemId !== id)
            setId([...newArr])
        }else{
            setId((prev) => [...prev, id])
        }


    }


    return(


        <>
            <section className={css.container}>

                <h2 className={css.askHeader}>Frequently asked questions</h2>

                <ul className={css.askList}>
                    {itemAccordion.map((item) =>(
                        <li  className={css.askListElem} key={item.id}>
                            <details className={css.accordionDetails}>
                                <summary onClick={() => handleClose(item.id)} className={css.accordionSum}>
                                    <p>{item.title}</p>
                                    {idArr.includes(item.id)
                                        ? '-'
                                        : '+'

                                    }
                                </summary  >

                                <div>
                                    <p>{item.content}</p>
                                </div>
                            </details>
                        </li>
                    ))}

                </ul>

            </section>
        
        
        </>
    )
}