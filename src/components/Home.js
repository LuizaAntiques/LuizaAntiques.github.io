import { useState, useRef } from 'react';
import './Home.css';
import qrCodeImage from '../assets/qrcode.png';
import storytellingAudio from '../assets/Storytelling.mp3';

const Home = () => {
  const audioRef = useRef(null);
  const [code, setCode] = useState(['', '', '', '']);
  const [codeMessage, setCodeMessage] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const codeInputRefs = useRef([]);
  
  const correctCode = "0000"; // Você pode alterar para o código correto

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.error('Erro ao reproduzir áudio:', err);
        });
      }
    }
  };

  const handleAudioPlay = () => {
    setIsPlaying(true);
  };

  const handleAudioPause = () => {
    setIsPlaying(false);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
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

  const handleUnlockQRCode = () => {
    const codeString = code.join('');
    if (codeString === correctCode) {
      setCodeMessage('Código correto! QR Code liberado.');
      setShowQRCode(true);
      setTimeout(() => setCodeMessage(''), 3000);
    } else {
      setCodeMessage('Código incorreto. Tente novamente!');
      setCode(['', '', '', '']);
      setTimeout(() => {
        codeInputRefs.current[0]?.focus();
      }, 100);
      setTimeout(() => setCodeMessage(''), 3000);
    }
  };

  const handleModalClose = (e) => {
    // Fecha o modal apenas se clicar no overlay (fora do conteúdo do modal)
    if (e.target === e.currentTarget) {
      setShowQRCode(false);
    }
  };

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
        <div className="home-title-container">
          <h1 className="home-title">A Maldição do Silêncio</h1>
          <button onClick={handlePlayPause} className="audio-play-button-small" title={isPlaying ? 'Pausar' : 'Reproduzir'}>
            {isPlaying ? '⏸' : '▶'}
          </button>
        </div>
        <div className="home-story">
          <p>
            Vocês vieram para celebrar, para se divertir. Mas esta casa... ela tem outros planos.
          </p>
          <p>
            Há muitos anos, antes de ser um lar, ela guardava um segredo. Um segredo sombrio... de um hóspede que jamais conseguiu ir embora.
          </p>
          <p>
            Nesta noite, ele despertou. Não o chamem pelo nome, pois isso lhe dá força. Chamem-no de "A criatura".
          </p>
          <p>
            A Criatura vive no silêncio e na sombra, e a prisão dela é agora a de vocês também. Ela roubou a chave da sua liberdade e a escondeu em seis partes, espalhadas pelos cômodos mais íntimos da casa. Apenas reunindo todas elas, vocês poderão alcançar a salvação.
          </p>
          <p>
            As regras são simples, mas a sobrevivência, não: Mantenham-se juntos. Resolvam os enigmas. E, acima de tudo... NÃO FAÇAM BARULHO.
          </p>
          <p>
            A Criatura não pode correr, mas tem ouvidos aguçados. O portal de comunicação com as pistas é a sua única luz na escuridão, uma tela conectada... isso é essencial para a sua sobrevivência.
          </p>
          <p>
            O seu único refúgio é o primeiro enigma. O que vocês precisam está mais perto do que imaginam, <strong>imóvel</strong> como um acessório esquecido despretensiosamente em alguma superfície. Mas achem logo... porque mesmo imóvel, ele nunca para de correr: tic-tac, tic-tac!
          </p>
          <p>
            Boa sorte! Vocês vão precisar...
          </p>
        </div>

        {/* Campo de código para liberar QR Code */}
        <div className="home-code-container">
          <label className="home-code-label">Digite o código de 4 dígitos para liberar o QR Code:</label>
          <div className="home-code-inputs">
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
                className="home-code-input"
                autoFocus={index === 0}
              />
            ))}
          </div>
          
          {codeMessage && (
            <div className={`home-code-message ${codeMessage.toLowerCase().includes('correto') ? 'success' : 'error'}`}>
              {codeMessage}
            </div>
          )}

          <button onClick={handleUnlockQRCode} className="home-unlock-button">
            Liberar QR Code
          </button>
        </div>

        {/* QR Code Modal */}
        {showQRCode && (
          <div className="qr-code-modal-overlay" onClick={handleModalClose}>
            <div className="qr-code-modal-content" onClick={(e) => e.stopPropagation()}>
              <h2 className="qr-code-modal-title">Boa Jornada!</h2>
              <div className="qr-code-container">
                <img src={qrCodeImage} alt="QR Code" className="qr-code-image" />
              </div>
            </div>
          </div>
        )}

        {/* Player de Áudio Storytelling */}
        <audio
          ref={audioRef}
          src={storytellingAudio}
          onPlay={handleAudioPlay}
          onPause={handleAudioPause}
          onEnded={handleAudioEnd}
          preload="metadata"
        />
      </div>
    </div>
  );
};

export default Home;

