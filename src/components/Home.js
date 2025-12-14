import { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Carrega o script do Murf
    const script = document.createElement('script');
    script.src = 'https://murf.ai/embeds/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpa o script quando o componente for desmontado
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="home">
      {/* Elementos decorativos para atmosfera */}
      <div className="mystery-overlay">
        <div className="mystery-particle particle-1"></div>
        <div className="mystery-particle particle-2"></div>
        <div className="mystery-particle particle-3"></div>
        <div className="mystery-particle particle-4"></div>
        <div className="mystery-particle particle-5"></div>
      </div>
      
      <div className="home-content">
        <h1 className="home-title">A Maldição do Silêncio</h1>
        <div className="home-story">
          <p>
            Vocês vieram para celebrar. Para se divertir. Mas esta casa... ela tem outros planos.
          </p>
          <p>
            Há muitos anos, antes de ser um lar, ela guardava um segredo. Um segredo sombrio... de um hóspede que nunca conseguiu ir embora.
          </p>
          <p>
           Nesta noite, ele despertou. Não o chamem pelo nome, pois isso lhe dá força. O chamem de "A CRIATURA". A Criatura vive no silêncio e na sombra, e a prisão dela é agora a sua também. Ela roubou a chave da sua liberdade e a escondeu em seis partes, espalhadas pelos cômodos mais íntimos da casa. Apenas reunindo todas elas, vocês poderão alcançar a salvação.
          </p>
          <p>
            As regras são simples, mas a sobrevivência, NÃO: Mantenham-se juntos. Resolvam os Enigmas. E, acima de tudo, NÃO FAÇAM BARULHO. A Criatura não pode correr, mas tem ouvidos aguçados. O portal de comunicação com as pistas é a sua única luz na escuridão, <strong>uma tela conectada...</strong> isso é essencial para a sua sobrevivência. O seu único refúgio é o primeiro Enigma, <strong>o que vocês precisam está mais perto do que vocês imaginam, mas achem logo... porque ele nunca para de correr: tic, tac, tic, tac!</strong>
          </p>
          <p>
            Boa sorte! Vocês vão precisar...
          </p>
        </div>

        {/* Player de Áudio do Murf */}
        <div className="audio-player-container">
          <iframe
            ref={audioRef}
            className="murf-embed"
            width="560"
            height="102"
            src="https://murf.ai/embeds/index.html?embedId=mj57c22h"
            allowFullScreen
            title="Murf Embed Player"
          ></iframe>
        </div>

        {/* <Link to="/sala" className="start-button">
          Começar a Aventura
        </Link> */}
      </div>
    </div>
  );
};

export default Home;

