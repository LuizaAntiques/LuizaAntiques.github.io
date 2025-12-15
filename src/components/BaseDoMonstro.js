import { useState, useEffect, useRef } from 'react';
import './PuzzleRoom.css';

const desafios = [
  {
    "pergunta": "O Super-herói Flash tem que percorrer 357 km até a cidade A e depois 165 km até a cidade B. Quantos quilômetros ele percorrerá no total?",
    "dica1": "Para descobrir o total, você precisa juntar as duas distâncias.",
    "dica2": "Faça uma soma: 357 + 165.",
    "resposta_correta": 522
  },
  {
    "pergunta": "A Maga Flora tinha R$ 850,00 para comprar ingredientes mágicos. Ela gastou R$ 325,50. Quanto dinheiro sobrou para ela?",
    "dica1": "Lembre-se de alinhar as vírgulas e realizar um 'empréstimo' se necessário.",
    "dica2": "Faça uma subtração: 850 - 325.50.",
    "resposta_correta": 524.50
  },
  {
    "pergunta": "O Gigante Amigável tem 7 pares de meias. Quantas meias ele tem no total?",
    "dica1": "Lembre-se: um 'par' significa 2 unidades.",
    "dica2": "Use a multiplicação: 7 x 2.",
    "resposta_correta": 14
  },
  {
    "pergunta": "Se cada um dos 4 dragões precisa de 9 maçãs por dia, quantas maçãs os dragões precisam no total?",
    "dica1": "Use a tabuada do 4 ou do 9 para acelerar o cálculo.",
    "dica2": "Faça uma multiplicação: 4 x 9.",
    "resposta_correta": 36
  },
  {
    "pergunta": "O Mago Merlin tem 24 bolinhas de cristal para dividir igualmente entre 3 aprendizes. Quantas bolinhas cada um receberá?",
    "dica1": "Pense: qual número, multiplicado por 3, resulta em 24?",
    "dica2": "Faça a divisão: 24 ÷ 3.",
    "resposta_correta": 8
  },
  {
    "pergunta": "A Princesa Luna tem 35 fitas. Se ela usar 5 fitas para fazer cada coroa, quantas coroas ela conseguirá fazer?",
    "dica1": "Você precisa descobrir quantos grupos de 5 cabem no número 35.",
    "dica2": "Faça a divisão: 35 ÷ 5.",
    "resposta_correta": 7
  },
  {
    "pergunta": "Um jardim secreto tem a forma de um quadrado. Se um lado mede 5 metros, qual é o perímetro total do jardim?",
    "dica1": "Perímetro é a soma de todos os lados. Um quadrado tem 4 lados iguais.",
    "dica2": "Faça a multiplicação: 4 x 5.",
    "resposta_correta": 20
  },
  {
    "pergunta": "Qual forma geométrica 3D se parece com uma lata de refrigerante?",
    "dica1": "Pense nas bases. A forma tem bases circulares e um corpo curvo.",
    "dica2": "Procure pelo nome da forma que rola quando deitada: Cubo, Pirâmide, Cilindro ou Esfera?",
    "resposta_correta": "Cilindro"
  },
  {
    "pergunta": "A pizza do Palhaço Pipo foi dividida em 8 fatias iguais. Se ele comeu 3 fatias, qual fração da pizza ele comeu?",
    "dica1": "O número de baixo (denominador) é o total de fatias (8).",
    "dica2": "A fração é (fatias comidas) / (fatias totais).",
    "resposta_correta": "3/8"
  },
  {
    "pergunta": "Qual fração é igual a $\\frac{1}{2}$?",
    "dica1": "Procure a fração onde o número de cima é exatamente a metade do número de baixo.",
    "dica2": "Qual dessas frações (2/3, 3/4, 4/8, 1/4) simplifica para a metade?",
    "resposta_correta": "4/8"
  },
  {
    "pergunta": "O relógio mágico marca 7 horas e 43 minutos. Quantos minutos faltam para a próxima hora completa (8:00)?",
    "dica1": "Uma hora tem 60 minutos.",
    "dica2": "Faça a subtração: 60 - 43.",
    "resposta_correta": 17
  },
  {
    "pergunta": "Se o filme de aventura começou às 14:30 e durou 1 hora e 15 minutos, a que horas o filme terminou?",
    "dica1": "Some a hora à hora e os minutos aos minutos, separadamente.",
    "dica2": "Calcule: 14h + 1h e 30 min + 15 min.",
    "resposta_correta": 15.45
  },
  {
    "pergunta": "O Castelo Encantado tem 712 degraus. O Cavaleiro Arthur já subiu 455 degraus. Quantos degraus ainda faltam?",
    "dica1": "Você precisa encontrar a diferença entre o total e o que já foi subido.",
    "dica2": "Faça a subtração: 712 - 455.",
    "resposta_correta": 257
  },
  {
    "pergunta": "Qual número completa a charada: 6 vezes qual número é igual a 48?",
    "dica1": "Pense na tabuada do 6. Qual múltiplo de 6 é 48?",
    "dica2": "Faça a divisão inversa: 48 ÷ 6.",
    "resposta_correta": 8
  },
  {
    "pergunta": "O Dragãozinho Fofo coleciona moedas. Ele achou 12 no quarto, 25 na sala e 8 no jardim. Quantas moedas ele tem no total?",
    "dica1": "Para achar o total, some a quantidade de moedas de cada lugar.",
    "dica2": "Faça a adição: 12 + 25 + 8.",
    "resposta_correta": 45
  },
  {
    "pergunta": "A Fada Lúcia precisa de 3 metros de fita para um vestido. Quantos centímetros ela precisa? (Lembre-se: 1 metro = 100 cm)",
    "dica1": "Você deve multiplicar a quantidade de metros por 100.",
    "dica2": "Faça a multiplicação: 3 x 100.",
    "resposta_correta": 300
  },
  {
    "pergunta": "Se a Bruxa Boa tem 17 morangos e quer dividi-los igualmente em 5 poções, quantos morangos sobram (resto)?",
    "dica1": "Qual é o maior múltiplo de 5 que é menor que 17?",
    "dica2": "Faça a divisão 17 ÷ 5 e encontre o resto. (17 = 5x3 + Resto)",
    "resposta_correta": 2
  },
  {
    "pergunta": "Numa pesquisa, 15 crianças gostam de azul, 10 de vermelho e 20 de verde. Qual cor é a preferida?",
    "dica1": "A cor preferida é aquela que tem a maior quantidade de votos.",
    "dica2": "Compare os números: 15, 10 e 20. Qual é o maior?",
    "resposta_correta": "Verde"
  },
  {
    "pergunta": "Qual é o maior número: 509, 590 ou 905?",
    "dica1": "Comece a comparar os números pela casa das centenas (o primeiro algarismo da esquerda).",
    "dica2": "Qual dos números começa com o algarismo de maior valor (5 ou 9)?",
    "resposta_correta": 905
  },
  {
    "pergunta": "João tinha 50 figurinhas. Ganhou 15 do seu pai e deu 8 para seu amigo. Com quantas figurinhas ele ficou no final?",
    "dica1": "É um problema de duas etapas: some o que ganhou e subtraia o que deu.",
    "dica2": "Calcule: (50 + 15) - 8.",
    "resposta_correta": 57
  }
];

const STORAGE_KEY = 'base_monstro_desafios_resolvidos';

const BaseDoMonstro = () => {
  const [desafioAtual, setDesafioAtual] = useState(null);
  const [desafiosResolvidos, setDesafiosResolvidos] = useState([]);
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [hint1Available, setHint1Available] = useState(false);
  const [hint2Available, setHint2Available] = useState(false);
  const [showHint1, setShowHint1] = useState(false);
  const [showHint2, setShowHint2] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const answerInputRef = useRef(null);

  // Carrega desafios resolvidos do localStorage e seleciona o primeiro desafio
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    let resolvidos = [];
    if (saved) {
      try {
        resolvidos = JSON.parse(saved);
        setDesafiosResolvidos(resolvidos);
      } catch (e) {
        console.error('Erro ao carregar desafios resolvidos:', e);
      }
    }

    // Seleciona o primeiro desafio
    selecionarNovoDesafio(resolvidos);
  }, []);

  // Seleciona um novo desafio
  const selecionarNovoDesafio = (resolvidosAtuais = desafiosResolvidos) => {
    let desafiosDisponiveis = desafios;
    
    // Se todos foram resolvidos, reseta a lista
    if (resolvidosAtuais.length >= desafios.length) {
      setDesafiosResolvidos([]);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
      desafiosDisponiveis = desafios;
    } else {
      // Filtra apenas desafios não resolvidos
      desafiosDisponiveis = desafios.filter((_, index) => !resolvidosAtuais.includes(index));
    }

    // Sorteia um desafio aleatório
    if (desafiosDisponiveis.length > 0) {
      const indiceAleatorio = Math.floor(Math.random() * desafiosDisponiveis.length);
      const desafioSelecionado = desafiosDisponiveis[indiceAleatorio];
      const indiceOriginal = desafios.findIndex(d => d === desafioSelecionado);
      
      setDesafioAtual({ ...desafioSelecionado, indiceOriginal });
      setIsSuccess(false);
      setAnswer('');
      setMessage('');
      setShowHint1(false);
      setShowHint2(false);
      setTimeElapsed(0);
      setHint1Available(false);
      setHint2Available(false);
      
      // Salva o tempo inicial
      localStorage.setItem(`base_monstro_timer_${indiceOriginal}`, Date.now().toString());
      
      setTimeout(() => {
        if (answerInputRef.current) {
          answerInputRef.current.focus();
        }
      }, 100);
    }
  };

  // Timer para as dicas
  useEffect(() => {
    if (!desafioAtual) return;

    const timerKey = `base_monstro_timer_${desafioAtual.indiceOriginal}`;
    const savedStartTime = localStorage.getItem(timerKey);
    let startTime;

    if (savedStartTime) {
      const elapsed = Math.floor((Date.now() - parseInt(savedStartTime)) / 1000);
      startTime = elapsed;
    } else {
      startTime = 0;
      localStorage.setItem(timerKey, Date.now().toString());
    }

    setTimeElapsed(startTime);

    if (startTime >= 120) {
      setHint1Available(true);
    }
    if (startTime >= 360) {
      setHint2Available(true);
    }

    const timer = setInterval(() => {
      setTimeElapsed(prev => {
        const newTime = prev + 1;
        if (newTime >= 120) {
          setHint1Available(true);
        }
        if (newTime >= 360) {
          setHint2Available(true);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [desafioAtual]);

  const normalizarResposta = (resposta) => {
    if (typeof resposta === 'number') {
      return resposta.toString().trim();
    }
    return resposta.toString().trim().toLowerCase();
  };

  const handleCheck = () => {
    if (!desafioAtual) return;

    const respostaUsuario = answer.trim();
    let isCorrect = false;

    if (typeof desafioAtual.resposta_correta === 'number') {
      // Para números, tenta converter a resposta do usuário
      // Aceita tanto vírgula quanto ponto como separador decimal
      // Também aceita formato de hora (ex: "15:45" para 15.45)
      let respostaProcessada = respostaUsuario.replace(',', '.').replace(':', '.');
      const numResposta = parseFloat(respostaProcessada);
      const respostaCorreta = desafioAtual.resposta_correta;
      
      // Compara com tolerância para números decimais
      if (!isNaN(numResposta)) {
        if (Number.isInteger(respostaCorreta)) {
          // Se a resposta correta é inteira, compara como inteiro
          isCorrect = Math.round(numResposta) === respostaCorreta;
        } else {
          // Para decimais, compara com pequena tolerância
          isCorrect = Math.abs(numResposta - respostaCorreta) < 0.01;
        }
      }
    } else {
      // Para texto, compara strings normalizadas
      let respostaCorreta = normalizarResposta(desafioAtual.resposta_correta);
      let respostaNormalizada = normalizarResposta(respostaUsuario);
      
      isCorrect = respostaNormalizada === respostaCorreta;
    }

    if (isCorrect) {
      setMessage('Correto! Desafio resolvido!');
      setIsSuccess(true);
      
      // Marca o desafio como resolvido
      if (!desafiosResolvidos.includes(desafioAtual.indiceOriginal)) {
        const novosResolvidos = [...desafiosResolvidos, desafioAtual.indiceOriginal];
        setDesafiosResolvidos(novosResolvidos);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(novosResolvidos));
      }
    } else {
      setMessage('Resposta incorreta. Tente novamente!');
      setIsSuccess(false);
      setAnswer('');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleNovoDesafio = () => {
    // Usa a lista atualizada de desafios resolvidos
    const resolvidosAtuais = desafiosResolvidos;
    selecionarNovoDesafio(resolvidosAtuais);
  };

  const handleHint1 = () => {
    setShowHint1(true);
  };

  const handleHint2 = () => {
    setShowHint2(true);
  };

  if (!desafioAtual) {
    return (
      <div className="puzzle-room">
        <h1 className="puzzle-title">Base do Monstro</h1>
        <div className="puzzle-description">Carregando desafio...</div>
      </div>
    );
  }

  return (
    <div className="puzzle-room">
      <h1 className="puzzle-title">Base do Monstro</h1>
      <div className="puzzle-description">
        <p><strong>Desafio de Resgate:</strong></p>
        <p>{desafioAtual.pergunta}</p>
      </div>

      {!isSuccess ? (
        <>
          <div className="puzzle-input-container">
            <input
              ref={answerInputRef}
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
              placeholder="Digite sua resposta..."
              className="puzzle-input"
            />

            {message && (
              <div className={`puzzle-message ${isSuccess ? 'success' : 'error'}`}>
                {message}
              </div>
            )}

            <button onClick={handleCheck} className="puzzle-button">
              Verificar
            </button>
          </div>

          <div className="hints-container">
            <button
              onClick={handleHint1}
              disabled={!hint1Available}
              className={`hint-button ${hint1Available ? 'enabled' : 'disabled'}`}
            >
              Dica 1 {hint1Available ? '' : `(${Math.max(0, 120 - timeElapsed)}s)`}
            </button>
            <button
              onClick={handleHint2}
              disabled={!hint2Available}
              className={`hint-button ${hint2Available ? 'enabled' : 'disabled'}`}
            >
              Dica 2 {hint2Available ? '' : `(${Math.max(0, 360 - timeElapsed)}s)`}
            </button>
          </div>

          {showHint1 && (
            <div className="hint-display">
              <strong>Dica 1:</strong> {desafioAtual.dica1}
            </div>
          )}

          {showHint2 && (
            <div className="hint-display">
              <strong>Dica 2:</strong> {desafioAtual.dica2}
            </div>
          )}
        </>
      ) : (
        <div className="success-container">
          <div className="success-text">
            <p><strong>Parabéns! Desafio resolvido com sucesso!</strong></p>
            <p>Você está um passo mais perto da liberdade.</p>
          </div>
          
          <button onClick={handleNovoDesafio} className="puzzle-button" style={{ marginTop: '30px' }}>
            Novo desafio?
          </button>
        </div>
      )}
    </div>
  );
};

export default BaseDoMonstro;
