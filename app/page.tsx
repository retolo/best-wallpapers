'use client'


import css from './Home.module.css';
import Hero from "./components/Hero/Hero"
import Collections from './components/Collections/Collections';
import ModalSale from './components/ModalSale/ModalSale';
import ShowCards from './components/ShowCards/ShowCards';
import { useState } from 'react';
import AskSection from './components/AskSection/AskSection';
import Footer from './components/Footer/Footer';

export default function Home() {


  const [isButton, setIsButton] = useState<boolean>(true)
  const [isModal, setIsModal] = useState<boolean>(false)



  const handleCloseModal = () =>{
    setIsModal(false)
  }




  return(



    <section className={css.container}>
      <Hero/>
      <Collections/>
      <ShowCards/>
      <AskSection/>
      <Footer/>

      {isButton &&
        <div  className={css.buttonSale}>
          <p onClick={() => setIsModal(true)}>15% Off Your First Order </p>
          <svg onClick={() => setIsButton(false)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="icon" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </div>   
      }


      {isModal &&
      
      <ModalSale onClose={handleCloseModal}/>
      
      }



      
    </section>
  )
  

}
