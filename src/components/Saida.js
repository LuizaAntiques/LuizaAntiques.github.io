import PuzzleRoom from './PuzzleRoom';

const Saida = () => {
  const errorMessageOnSuccess = "ERRO! A porta não se abriu. Parece que vocês precisam de mais do que apenas palavras... A verdadeira chave está nos números que vocês coletaram. Transformem-nos em letras e descubram o código final!";

  const victoryMessage = `
    <div class="victory-celebration">
      <h2 class="victory-title">🎉 PARABÉNS! 🎉</h2>
      <p class="victory-text">Vocês venceram!</p>
      <p class="victory-text">A Maldição do Silêncio foi quebrada!</p>
      <p class="victory-text">A Criatura foi derrotada e vocês estão livres!</p>
      <p class="victory-text">A jornada foi longa e difícil, mas vocês conseguiram!</p>
      <p class="victory-text"><strong>VITÓRIA TOTAL!</strong></p>
    </div>
  `;

  const handleVictory = () => {
    // Vitória! O jogo acabou
    console.log('Vitória alcançada!');
  };

  const nextPuzzle = {
    puzzleText: "Agora é a hora final! Transformem os números que vocês coletaram em letras. Cada número corresponde a uma posição no alfabeto. Formem a palavra final que liberará a porta!",
    correctAnswer: "criatura",
    code: "0000", // Código final - ajuste conforme necessário baseado nas peças coletadas
    nextRoute: null // Não navega, mostra vitória
  };

  return (
    <PuzzleRoom
      title="Saída"
      description="A chave de toda a jornada nunca é um único isolado, mas sim, um conjunto de peças que se encaixam em um todo. Lembrem-se bem: Nem sempre números são apenas números. Vamos rapido, vocês estão quase lá!"
      correctPassword="o enigma da porta foi revelado"
      hint1="Junte todas as peças que vocês tem e forme a chave, são 6 palavras. Não esqueça dos espaços."
      hint2="Os numeros correspondem a letras, as vezes pela forma, mas em sua grande maioria pelo posição do alfabeto."
      successText="A porta parece estar trancada... Mas há algo mais. Um código final aguarda vocês."
      nextPuzzle={nextPuzzle}
      isFinalRoom={true}
      errorMessageOnSuccess={errorMessageOnSuccess}
      victoryMessage={victoryMessage}
      onVictory={handleVictory}
    />
  );
};

export default Saida;

