import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './PuzzleRoom.css';

const PuzzleRoom = ({ 
  title, 
  description, 
  correctPassword, 
  hint1, 
  hint2, 
  successText,
  nextPuzzle, // { piece, puzzleText, correctAnswer, nextRoute, code }
  isFinalRoom = false, // Para a sala final (Saída)
  errorMessageOnSuccess = null, // Mensagem de erro quando acertar o primeiro enigma
  victoryMessage = null, // Mensagem de vitória quando acertar o código final
  onVictory = null // Callback quando vencer (ao invés de navegar)
}) => {
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [hint1Available, setHint1Available] = useState(false);
  const [hint2Available, setHint2Available] = useState(false);
  const [showHint1, setShowHint1] = useState(false);
  const [showHint2, setShowHint2] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showNextAnswer, setShowNextAnswer] = useState(false);
  const [code, setCode] = useState(['', '', '', '']);
  const [codeMessage, setCodeMessage] = useState('');
  const [showVictory, setShowVictory] = useState(false);
  const codeInputRefs = useRef([]);
  const navigate = useNavigate();

  // Chave única para cada sala baseada no título
  const storageKey = `puzzle_timer_${title.replace(/\s+/g, '_').toLowerCase()}`;

  useEffect(() => {
    // Carrega o tempo inicial do localStorage ou cria um novo
    const savedStartTime = localStorage.getItem(storageKey);
    let startTime;
    
    if (savedStartTime) {
      // Calcula o tempo decorrido desde o início salvo
      const elapsed = Math.floor((Date.now() - parseInt(savedStartTime)) / 1000);
      startTime = elapsed;
    } else {
      // Primeira vez acessando esta sala, salva o tempo atual
      startTime = 0;
      localStorage.setItem(storageKey, Date.now().toString());
    }

    setTimeElapsed(startTime);

    // Atualiza as dicas baseado no tempo inicial
    if (startTime >= 120) {
      setHint1Available(true);
    }
    if (startTime >= 360) {
      setHint2Available(true);
    }

    const timer = setInterval(() => {
      setTimeElapsed(prev => {
        const newTime = prev + 1;
        
        // Primeira dica disponível após 2 minutos (120 segundos)
        if (newTime >= 120) {
          setHint1Available(true);
        }
        
        // Segunda dica disponível após 6 minutos (360 segundos = 2min + 4min)
        if (newTime >= 360) {
          setHint2Available(true);
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [storageKey]);

  const handleCheck = () => {
    if (answer.toLowerCase().trim() === correctPassword.toLowerCase()) {
      // Se a resposta for "o enigma da porta foi revelado", vitória imediata
      if (answer.toLowerCase().trim() === 'o enigma da porta foi revelado') {
        if (isFinalRoom && onVictory && victoryMessage) {
          setMessage('');
          setIsSuccess(true);
          setShowVictory(true);
          onVictory();
        } else {
          setMessage('Correto! Você desbloqueou este enigma!');
          setIsSuccess(true);
        }
      } else if (isFinalRoom && errorMessageOnSuccess) {
        // Na sala final, mostra mensagem de erro (pegadinha) para outras respostas
        setMessage(errorMessageOnSuccess);
        setIsSuccess(false);
        setAnswer('');
        setTimeout(() => setMessage(''), 5000);
      } else {
        setMessage('Correto! Você desbloqueou este enigma!');
        setIsSuccess(true);
      }
    } else {
      setMessage('Resposta incorreta. Tente novamente!');
      setIsSuccess(false);
      setAnswer(''); // Limpa o input quando a resposta está errada
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleShowNextAnswer = () => {
    setShowNextAnswer(true);
  };

  const handleCodeChange = (index, value) => {
    // Permite apenas números
    if (value && !/^\d$/.test(value)) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setCodeMessage('');

    // Move para o próximo input automaticamente
    if (value && index < 3) {
      codeInputRefs.current[index + 1]?.focus();
    }
  };

  const handleCodeKeyDown = (index, e) => {
    // Volta para o input anterior ao pressionar Backspace
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      codeInputRefs.current[index - 1]?.focus();
    }
    // Ao pressionar Enter, verifica o código se todos os 4 dígitos estiverem preenchidos
    if (e.key === 'Enter') {
      const codeString = code.join('');
      if (codeString.length === 4) {
        handleNextEnigma();
      }
    }
  };

  const handleCodePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 4);
    if (/^\d+$/.test(pastedData)) {
      const newCode = pastedData.split('').concat(['', '', '', '']).slice(0, 4);
      setCode(newCode);
      const nextIndex = Math.min(pastedData.length, 3);
      codeInputRefs.current[nextIndex]?.focus();
    }
  };

  const handleNextEnigma = () => {
    const codeString = code.join('');
    if (nextPuzzle && codeString === nextPuzzle.code) {
      if (isFinalRoom && onVictory) {
        // Na sala final, mostra mensagem de vitória
        setCodeMessage('');
        setShowVictory(true);
        onVictory();
      } else {
        setCodeMessage('Correto! Redirecionando...');
        setTimeout(() => {
          navigate(nextPuzzle.nextRoute);
        }, 1000);
      }
    } else {
      setCodeMessage('Código incorreto. Tente novamente!');
      setCode(['', '', '', '']);
      setTimeout(() => {
        codeInputRefs.current[0]?.focus();
      }, 100);
      setTimeout(() => setCodeMessage(''), 3000);
    }
  };

  const handleHint1 = () => {
    setShowHint1(true);
  };

  const handleHint2 = () => {
    setShowHint2(true);
  };

  const handleResetTimer = () => {
    // Remove o timer salvo e reinicia
    localStorage.removeItem(storageKey);
    localStorage.setItem(storageKey, Date.now().toString());
    setTimeElapsed(0);
    setHint1Available(false);
    setHint2Available(false);
    setShowHint1(false);
    setShowHint2(false);
  };

  return (
    <div className="puzzle-room">
      <h1 className="puzzle-title">{title}</h1>
      <div className="puzzle-description" dangerouslySetInnerHTML={{ __html: description }}></div>
      
      {!isSuccess ? (
        <>
          <div className="puzzle-input-container">
            <input
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
              <strong>Dica 1:</strong> {hint1}
            </div>
          )}

          {showHint2 && (
            <div className="hint-display">
              <strong>Dica 2:</strong> {hint2}
            </div>
          )}
        </>
      ) : showVictory && victoryMessage ? (
        <div className="victory-container">
          <div className="victory-content" dangerouslySetInnerHTML={{ __html: victoryMessage }}></div>
        </div>
      ) : (
        <div className="success-container">
          <div className="success-text" dangerouslySetInnerHTML={{ __html: successText }}></div>
          
          {nextPuzzle && (
            <div className="next-puzzle-container">
              <div className="next-puzzle-enigma">
                <p dangerouslySetInnerHTML={{ __html: nextPuzzle.puzzleText }}></p>
              </div>
              
                <div>
                  <div className="code-input-container">
                    <label className="code-label">Digite o código de 4 dígitos:</label>
                    <div className="code-inputs">
                      {code.map((digit, index) => (
                        <input
                          key={index}
                          ref={(el) => (codeInputRefs.current[index] = el)}
                          type="text"
                          inputMode="numeric"
                          maxLength="1"
                          value={digit}
                          onChange={(e) => handleCodeChange(index, e.target.value)}
                          onKeyDown={(e) => handleCodeKeyDown(index, e)}
                          onPaste={handleCodePaste}
                          className="code-input"
                          autoFocus={index === 0}
                        />
                      ))}
                    </div>
                    {codeMessage && (
                      <div className={`puzzle-message ${codeMessage.includes('Correto') ? 'success' : 'error'}`}>
                        {codeMessage}
                      </div>
                    )}
                  </div>
                  
                  <button onClick={handleNextEnigma} className="puzzle-button next-enigma-button">
                    Ir para o próximo Enigma
                  </button>

                  <button onClick={handleShowNextAnswer} className="puzzle-button">
                    Onde acho o código?
                  </button>
                </div>
                {!showNextAnswer ? null : (
                <div className="next-answer-display">
                  <p className="next-answer-text">
                    <strong>A resposta é: {nextPuzzle.correctAnswer}</strong>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      
      <button 
        onClick={handleResetTimer} 
        className="reset-timer-button"
        title="Reiniciar timer das dicas"
      >
        ⏰
      </button>
    </div>
  );
};

export default PuzzleRoom;

