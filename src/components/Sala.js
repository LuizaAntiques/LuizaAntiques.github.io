import PuzzleRoom from './PuzzleRoom';

const Sala = () => {
  const successText = `Parabéns! A primeira pista foi encontrada.<br/><br/>
    <strong>Sua primeira peça é: 0</strong><br/><br/>
    A Criatura está perto, mas o caminho para a liberdade exige CORAGEM e silêncio. Vocês não podem ficar aqui.<br/><br/>
    Uma porta foi aberta. Sigam para o <strong>QUARTO DO RAFAEL</strong>.<br/><br/>`;

  const nextPuzzle = {
    puzzleText: "Para acessar a próxima pista vocês devem encontrar o código no <strong>Velho Guardião</strong>: Aquele que o tempo não destrói e que carrega cicatrizes desde antes do seu dono chegar. Procure a marca da próxima pista na sua pele esfarrapada, talvez ela esteja em um braço, já que ele não tem pernas...<br/><br/><strong>Vão AGORA.</strong>",
    correctAnswer: "perneta",
    code: "2016",
    nextRoute: "/quarto-do-rafa"
  };

  return (
    <PuzzleRoom
      title="A Sala Misteriosa"
      description="Vamos começar fácil, com apenas um algarismo.<br/>Aqui está o enigma para o próximo cômodo: <strong>'Eu sou a origem que não conta. Sem mim, não há dez nem resposta. Estou antes de todos, mas sempre começam pelo próximo.<br/>Talvez pensem que eu não sou nada.'</strong>"
      correctPassword="0"
      hint1="Quando estou a esquerda, não sirvo pra nada."
      hint2="Olha ele aí a esquerda: ZERO ZERO sete."
      successText={successText}
      nextPuzzle={nextPuzzle}
    />
  );
};

export default Sala;

