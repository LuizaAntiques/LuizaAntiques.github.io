import { useState, useEffect } from 'react';
import './PuzzleRoom.css';

const PuzzleRoom = ({ title, description, correctPassword, hint1, hint2, successText }) => {
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [hint1Available, setHint1Available] = useState(false);
  const [hint2Available, setHint2Available] = useState(false);
  const [showHint1, setShowHint1] = useState(false);
  const [showHint2, setShowHint2] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
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
  }, []);

  const handleCheck = () => {
    if (answer.toLowerCase().trim() === correctPassword.toLowerCase()) {
      setMessage('Correto! Você desbloqueou este enigma!');
      setIsSuccess(true);
    } else {
      setMessage('Resposta incorreta. Tente novamente!');
      setIsSuccess(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleHint1 = () => {
    setShowHint1(true);
  };

  const handleHint2 = () => {
    setShowHint2(true);
  };

  return (
    <div className="puzzle-room">
      <h1 className="puzzle-title">{title}</h1>
      <p className="puzzle-description">{description}</p>
      
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
            <button onClick={handleCheck} className="puzzle-button">
              Verificar
            </button>
          </div>

          {message && (
            <div className={`puzzle-message ${isSuccess ? 'success' : 'error'}`}>
              {message}
            </div>
          )}

          <div className="hints-container">
            <button
              onClick={handleHint1}
              disabled={!hint1Available}
              className={`hint-button ${hint1Available ? 'enabled' : 'disabled'}`}
            >
              Dica 1 {hint1Available ? '' : `(disponível em ${Math.max(0, 120 - timeElapsed)}s)`}
            </button>
            <button
              onClick={handleHint2}
              disabled={!hint2Available}
              className={`hint-button ${hint2Available ? 'enabled' : 'disabled'}`}
            >
              Dica 2 {hint2Available ? '' : `(disponível em ${Math.max(0, 360 - timeElapsed)}s)`}
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
      ) : (
        <div className="success-container">
          <p className="success-text">{successText}</p>
        </div>
      )}
    </div>
  );
};

export default PuzzleRoom;

