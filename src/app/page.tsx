import Hero from '../components/Hero';
import Service from '../components/Service';
import ContactForm from '../components/ContactForm';
import ExcelSlider from '../components/ExcelSlider';

export default function Home() {
  return (
    
    <div>
      <Hero />
      <section id="services" className='bg-gold'>
        {/*<h2>Naše usluge</h2>*/}
        <Service title="Usluga #1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      </section>
      <section id="projects" className='bg-gold'>
        {/*<h2>Projekti</h2>*/}
        <ExcelSlider/>
      </section>
      
      <section id="about" className='bg-gold font-serif text-2x1'>
        <div className='max-w-[80%] mx-auto'>

          <br></br><br></br>
          <h2>O nama</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere quas tenetur nobis, autem possimus dicta veniam ullam? Natus explicabo, blanditiis maxime deleniti iusto omnis minima quo optio soluta ab?</p>
        </div>
      </section>
      <section id="contact" className='bg-gold'>
        {/*<h2>Kontaktirajte nas</h2>*/}
        <ContactForm />
      </section>
    </div>
  );
}
