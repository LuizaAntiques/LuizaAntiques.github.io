import PuzzleRoom from './PuzzleRoom';

const Escritorio = () => {
  const successText = `Parabéns! A quinta pista foi encontrada.<br/><br/>
  <strong>Sua quinta peça é: 6159</strong><br/><br/>
  A Criatura está perto, mas o caminho para a liberdade exige CORAGEM e silêncio. Vocês não podem ficar aqui.<br/><br/>
  Uma porta foi aberta. Sigam para a <strong>COZINHA</strong>.<br/><br/>`;

  const nextPuzzle = {
    puzzleText: "Para acessar a próxima pista vocês devem encontrar um dos <strong>guardiões do calor</strong>. O próximo enigma está no painel silencioso que anuncia o fim da espera.",
    correctAnswer: "display do micro-ondas.",
    code: "1040",
    nextRoute: "/cozinha"
  };

  return (
    <PuzzleRoom
      title="Escritório"
      description="A próxima etapa exige números raciocínio. Busque o painel onde as ideias tomam forma, onde o pensamento é o caminho.É a tela que a memória apaga e reescreve. Calcule a mensagem e revele a palavra que já passou e não volta mais."
      correctPassword="6159"
      hint1="O código está onde professores costumam escrever o que importa."
      hint2="O segredo é uma sequência de 4 números. Os três resultados são múltiplos de 3 (para facilitar multiplique na seguinte ordem: 2, 5, 3)"
      successText={successText}
      nextPuzzle={nextPuzzle}
    />
  );
};

export default Escritorio;

