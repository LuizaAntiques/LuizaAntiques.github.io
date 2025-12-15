import PuzzleRoom from './PuzzleRoom';

const Banheiro = () => {
  const successText = `Parabéns! A terceira pista foi encontrada.<br/><br/>
  <strong>Sua terceira peça é: 41</strong><br/><br/>
  A Criatura está perto, mas o caminho para a liberdade exige CORAGEM e silêncio. Vocês não podem ficar aqui.<br/><br/>
  Uma porta foi aberta. Sigam para o <strong>QUARTO PRINCIPAL</strong>.<br/><br/>`;

  const nextPuzzle = {
    puzzleText: "Para acessar a próxima pista vocês devem encontrar <strong>aquele que sempre é fiel</strong>. O próximo enigma não se abre com força. Mas sim, com o código que se carrega no pescoço.",
    correctAnswer: "Kali",
    code: "8964",
    nextRoute: "/suite"
  };

  return (
    <PuzzleRoom
      title="Banheiro"
      description="Eu sou a face muda que sempre te devolve o olhar, Mas para revelar meu segredo, você não pode apenas me encarar. Não sou de papel nem madeira, mas tenho um número escrito na fumaça."
      correctPassword="41"
      hint1="Um banho quente poderia revelar o que você procura"
      hint2="Como diriam os russos 'Сорок один'"
      successText={successText}
      nextPuzzle={nextPuzzle}
    />
  );
};

export default Banheiro;

