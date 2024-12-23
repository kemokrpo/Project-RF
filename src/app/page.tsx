import Hero from '../components/Hero';
import Service from '../components/Service';
import ContactForm from '../components/ContactForm';
import ExcelSlider from '../components/ExcelSlider';

export default function Home() {
  return (
    
    <div>
      <Hero />
      <section id="services">
        <h2>Naše usluge</h2>
        <Service title="Usluga #1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        <Service title="Usluga #2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        <Service title="Usluga #3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      </section>
      <section id="projects">
        <h2>Projekti</h2>
        <ExcelSlider/>
      </section>
      <section id="about">
        <h2>O nama</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere quas tenetur nobis, autem possimus dicta veniam ullam? Natus explicabo, blanditiis maxime deleniti iusto omnis minima quo optio soluta ab?</p>
      </section>
      <section id="contact">
        <h2>Kontaktirajte nas</h2>
        <ContactForm />
      </section>
    </div>
  );
}
