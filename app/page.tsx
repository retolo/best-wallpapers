import css from './Home.module.css';
import Hero from "./components/Hero/Hero"
import Collections from './components/Collections/Collections';
export default function Home() {
  return(



    <section className={css.container}>
      <Hero/>
      <Collections/>
    </section>
  )
  

}
