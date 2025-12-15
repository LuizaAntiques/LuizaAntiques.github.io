import PuzzleRoom from './PuzzleRoom';

const QuartoDoRafa = () => {
  const successText = `Parabéns! A segunda pista foi encontrada.<br/><br/>
  <strong>Sua segunda peça é: ENIGMA</strong><br/><br/>
  A Criatura está perto, mas o caminho para a liberdade exige CORAGEM e silêncio. Vocês não podem ficar aqui.<br/><br/>
  Uma porta foi aberta. Sigam para o <strong>BANHEIRO</strong>.<br/><br/>`;

  const nextPuzzle = {
    puzzleText: "Para acessar a próxima pista vocês devem encontrar o código em um <strong>lugar de reflexão matinal</strong>. Não olhe para cima, nem para as laterais, mas sim, para o ponto que o homem muitas vezes erra",
    correctAnswer: "Assento da privada",
    code: "3131",
    nextRoute: "/banheiro"
  };

  return (
    <PuzzleRoom
      title="Quarto do Rafael"
      description="Na tampa escondida, em meio às roupas de um cofre seguro que guarda segredos, uma palavra invisível se forma. A luz que não ilumina é a chave necessária para encontrar o que se procura."
      correctPassword="enigma"
      hint1="Um compartimento secreto presente neste cômodo esconde uma palavra invisível."
      hint2="Na computação, muitas vezes a senha do 'admin' é 'admin'. Pensando nisso, qual seria um bom chute para a senha do enigma?"
      successText={successText}
      nextPuzzle={nextPuzzle}
    />
  );
};

export default QuartoDoRafa;

