import React from 'react';
import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Diego Fernandes"/>
      <div>
        <strong>Diego Fernandes</strong>
        <span>React</span>
      </div>
    </header>

    <p>
      Enthusiast of the best web & mobile development technologies.
      <br/><br/>
      Passionate about education and changing people's lives through programming. More than 200,000 people have already undergone one of my trainings.
    </p>

    <footer>
      <p>
        Preço/Hora
        <strong>R$ 80,00</strong>
      </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
    </footer>
  </article>
  );
}

export default TeacherItem;