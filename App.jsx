import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import { progetti } from './data/progetti';

function Section({id, title, items}){
  return (
    <section id={id} className='section'>
      <div className='container'>
        <h2 className='section-title'>{title}</h2>
        <div className='grid'>
          {items.map((p,idx)=>(<ProjectCard key={idx} progetto={p} />))}
        </div>
      </div>
    </section>
  )
}

export default function App(){
  return (
    <div className='site'>
      <Header />
      <main>
        <section className='hero'>
          <div className='container hero-inner'>
            <h1>Progetti che emozionano</h1>
            <p className='lead'>Progettazione, ristrutturazioni e riqualificazioni energetiche</p>
          </div>
        </section>

        <Section id='ristrutturazioni' title='Ristrutturazioni Residenziali' items={progetti.ristrutturazioni} />
        <Section id='condomini' title='Condomini' items={progetti.condomini} />
        <Section id='riqualificazioni' title='Riqualificazioni Energetiche' items={progetti.riqualificazioniEnergetiche} />
        <Section id='ricettive' title='Strutture Ricettive' items={progetti.struttureRicettive} />

        <section id='contatti' className='section contact'>
          <div className='container'>
            <h2 className='section-title'>Contatti</h2>
            <div className='contact-grid'>
              <div>
                <h3>Studio di Ingegneria e Architettura</h3>
                <p>Ing. Mirko Corona</p>
                <p>📍 Cagliari – Sardegna</p>
                <p>✉️ <a href='mailto:mirko.corona@email.it'>mirko.corona@email.it</a></p>
                <p>📞 +39 333 1234567</p>
              </div>
              <form className='contact-form' onSubmit={(e)=>{e.preventDefault(); alert('Grazie, messaggio inviato (simulazione).')}}>
                <input placeholder='Nome' required />
                <input type='email' placeholder='Email' required />
                <textarea placeholder='Messaggio' rows='5' required />
                <button className='btn'>Invia</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}