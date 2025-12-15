import PuzzleRoom from './PuzzleRoom';

const Cozinha = () => {
  const successText = `Parabéns! A quinta pista foi encontrada.<br/><br/>
  <strong>Sua quinta peça é: 6159</strong><br/><br/>
  A Criatura está perto, mas o caminho para a liberdade TAMBÉM. Mexam-se antes que seja tarde.<br/><br/>
  Vocês já tem todas as peças que precisam. Sigam para a <strong>PORTA DE SAIDA</strong>.<br/><br/>`;

  const nextPuzzle = {
    puzzleText: "Talvez esse seja o mais dificil, mas a jornada termina onde tudo começou, no seu alicerce.Não é uma palavra, nem um cálculo, mas o endereço que lhe pertence. Busque o código que garante a chegada da carta. É a sua identidade geográfica.",
    correctAnswer: "CEP do endereço",
    code: "37536050",
    nextRoute: "/saida"
  };

  return (
    <PuzzleRoom
      title="Cozinha"
      description="Busque o gigante da doçura matinal, o pacote que veste o rei branco do ártico.Não é o sabor o segredo, mas a aventura impressa em seu verso, uma busca sem descanso.No meio da multidão, muito mais que o Wally você vai encontrar. Com tinta invisível, a chave final te espera."
      correctPassword="revelado"
      hint1="Onde o Urso Polar anuncia o café da manhã, e a confusão de pessoas esconde o que uma luz específica revela?"
      hint2="Esse não é Kellogg's, mas no jogo do verso é possivel ver a palavra invisível"
      successText={successText}
      nextPuzzle={nextPuzzle}
    />
  );
};

export default Cozinha;

