import PuzzleRoom from './PuzzleRoom';

const Suite = () => {
  const successText = `Parabéns! A quarta pista foi encontrada.<br/><br/>
  <strong>Sua quarta peça é: PORTA</strong><br/><br/>
  A Criatura está perto, mas o caminho para a liberdade exige CORAGEM e silêncio. Vocês não podem ficar aqui.<br/><br/>
  Uma porta foi aberta. Sigam para o <strong>ESCRITÓRIO</strong>.<br/><br/>`;

  const nextPuzzle = {
    puzzleText: "Para acessar a próxima pista vocês devem encontrar <strong>aquele que sobreviveu ao impossível</strong>. O próximo enigma está em uma cabeça desgrenhada com a marca da maldição, e se for difícil encontrá-lo, podemos dar-lhe um pouco de Veritaserum para fazê-lo falar.",
    correctAnswer: "Harry Potter",
    code: "3107",
    nextRoute: "/escritorio"
  };

  return (
    <PuzzleRoom
      title="Suíte"
      description="Esqueça os tecidos e os adornos; o foco não é o conteúdo. Você me encontra em maisde dúzia neste quarto, servindo a cada canto. Eu protejo o que se guarda. Embora eu seja um limite, meu destino é ser ultrapassada."
      correctPassword="porta"
      hint1="Eu sou o que você empurra ou puxa para mudar de compartimento."
      hint2="Eu abro e eu fecho, posso ser entrada e saída."
      successText={successText}
      nextPuzzle={nextPuzzle}
    />
  );
};

export default Suite;

