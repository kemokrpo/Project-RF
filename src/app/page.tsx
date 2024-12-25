import Hero from '../components/Hero';
import Service from '../components/Service';
import ContactForm from '../components/ContactForm';
import ExcelSlider from '../components/ExcelSlider';

export default function Home() {
  return (
    
    <div>
      <Hero />
      <section id="services" className='bg-white'>
        {/*<h2>Naše usluge</h2>*/}
        <Service title="Usluga #1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      </section>
      <section id="projects" className='bg-white'>
        {/*<h2>Projekti</h2>*/}
        <ExcelSlider/>
      </section>
      
      <section id="about" className='bg-white font-serif text-2x1 text-teal-600'>
        <div className='max-w-[80%] mx-auto'>

          <br></br><br></br>
          <h2>O nama</h2>
          <p className='text-black'>WEKAS d.o.o. je društvo sa ograničenom odgovornošću koje se bavi projektovanjem, revizijama, nadzorom, consultingom i inžinjeringom. Naša misija je pružanje vrhunskih rešenja koja zadovoljavaju potrebe naših klijenata, uz posvećenost kvaliteti i inovacijama. Sa timom stručnjaka sa bogatim iskustvom u različitim oblastima, trudimo se da svaki projekat izvedemo sa najvišim standardima profesionalnosti i efikasnosti.<br></br>Put za Opine b.b. <br></br> info@wekas.ba<br></br>+387 61 480 763</p>
        </div>
      </section>
      <section id="contact" className='bg-white'>
        {/*<h2>Kontaktirajte nas</h2>*/}
        <ContactForm />
      </section>
    </div>
  );
}
