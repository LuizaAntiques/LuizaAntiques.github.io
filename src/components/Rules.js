import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Rules.css';

const Rules = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const sections = [
    {
      number: 1,
      title: "O Ritual de Fuga",
      content: {
        subtitle: "OBJETIVO",
        items: [
          {
            label: "Jogadores:",
            text: "Percorrer a casa, decifrando os Enigmas em cada cômodo até chegar ao final e DESVENDAR O MISTÉRIO DA PORTA para libertar a todos. O objetivo é sobreviver."
          },
          {
            label: "A Criatura:",
            text: "Caçar e aprisionar todos os jogadores em sua Base. Se todos tiverem sido presos ao menos uma vez, A Criatura vence."
          }
        ]
      }
    },
    {
      number: 2,
      title: "O Kit de Sobrevivência",
      content: {
        subtitle: "Vocês vão receber ferramentas cruciais para lutar contra a escuridão. Use-as com sabedoria.",
        items: [
          {
            label: "Celular/App",
            text: "Único meio de acessar os Enigmas. NÃO O DEIXE PARA TRÁS."
          },
          {
            label: "Fonte de luz não convencional:",
            text: "As vezes a verdade pode não estar visível. Essencial para desvendar enigmas ocultos."
          },
          {
            label: "Bloco de Notas eCaneta:",
            text: "Talvez seja uma boa ideia anotar as respostas."
          }
        ]
      }
    },
    {
      number: 3,
      title: "A Criatura: Caça e Evolução",
      content: {
        subtitle: "A Criatura reside em sua Base e sai para caçar. Ela não corre, mas é implacável.",
        items: [
          {
            label: "Movimento e Avisos:",
            text: "A princípio, ela sai de tempos em tempos. Fiquem atentos às Vozes no Corredor. O que A Criatura diz importa."
          },
          {
            label: "A Ira (Evolução):",
            text: "À medida que o jogo avança, seu BARULHO se torna o sinal para a caça. A Criatura pode ganhar habilidades de sair mais cedo ou de VIOLAR OS CÔMODOS que já estão abertos."
          },
          {
            label: "Vigilância:",
            text: "Se a Criatura escuta barulho, ela demora a voltar para a Base ou pode tentar entrar nos cômodos de onde vem o ruído."
          }
        ]
      }
    },
    {
      number: 4,
      title: "O Preço do Silêncio (Como Não Ser Pego)",
      content: {
        subtitle: "A Criatura tem ouvidos aguçados. O som é o seu chamado.",
        items: [
          {
            label: "O Encontro:",
            text: "Se A Criatura o confrontar, a única defesa é a IMOBILIDADE. Fique TOTALMENTE ESTÁTICO E EM SILÊNCIO (sem ruídos, sem rir, sem falar)."
          },
          {
            label: "A Captura:",
            text: "Qualquer movimento ou barulho resultará em sua alma sendo arrastada para a Base da Criatura."
          }
        ]
      }
    },
    {
      number: 5,
      title: "O Cativeiro",
      content: {
        subtitle: "Se capturado, você será levado para a Base, onde terá que provar seu valor.",
        items: [
          {
            label: "Libertação:",
            text: "Você só será liberado ao resolver os Desafios de Resgate no App, que serão determinados pelo número de vezes que você foi capturado."
          },
          {
            label: "Desafios:",
            text: "1ª Vez: 1 Desafio, 2ª Vez: 2 Desafios, 3ª Vez: 3 Desafios, e assim por diante."
          },
          {
            label: "Derrota:",
            text: "Se o medo se espalhar e todos precisarem enfrentar o desafio do cativeiro, a Maldição do Silêncio será permanente. O Jogo Termina."
          }
        ]
      }
    },
    {
      number: 6,
      title: "O Caminho da Escuridão",
      content: {
        subtitle: "Estão preparados?",
        items: [
          {
            label: "Início (Sala):",
            text: "ESCUTE A HISTÓRIA COM ATENÇÃO e descubra o código para iniciar sua jornada."
          },
          {
            label: "Transição:",
            text: "O App revelará o próximo local de terror"
          },
          {
            label: "Progresso:",
            text: "Encontre o código no novo cômodo para liberar o enigma. Use suas ferramentas para desvendar, coletar o Fragmento e seguir para o próximo local."
          }
        ]
      }
    }
  ];

  const currentSectionData = sections[currentSection - 1];
  const isFirstSection = currentSection === 1;
  const isLastSection = currentSection === sections.length;

  const handlePrevious = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleNext = () => {
    if (currentSection < sections.length) {
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="rules-page">
      <div className="rules-wrapper">
        <button
          onClick={handlePrevious}
          disabled={isFirstSection}
          className={`nav-arrow nav-arrow-left ${isFirstSection ? 'disabled' : ''}`}
          aria-label="Seção anterior"
        >
          ←
        </button>

        <div className="rules-container">
          <h1 className="rules-main-title">💀 A Maldição do Silêncio: Regras de Sobrevivência</h1>
          
          <div className="rules-content">
            <div className="section-header">
              <span className="section-number">{currentSectionData.number}</span>
              <h2 className="section-title">{currentSectionData.title}</h2>
            </div>

            {currentSectionData.content.subtitle && (
              <p className="section-subtitle">{currentSectionData.content.subtitle}</p>
            )}

            <div className="section-items">
              {currentSectionData.content.items.map((item, index) => (
                <div key={index} className="section-item">
                  {item.label && <strong className="item-label">{item.label}</strong>}
                  <p className="item-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section-indicator">
            {currentSection} / {sections.length}
          </div>
        </div>

        {!isLastSection ? (
          <button
            onClick={handleNext}
            className="nav-arrow nav-arrow-right"
            aria-label="Próxima seção"
          >
            →
          </button>
        ) : (
          <Link to="/home" className="nav-arrow nav-arrow-right start-arrow" aria-label="Começar jornada">
            →
          </Link>
        )}
      </div>
    </div>
  );
};

export default Rules;

