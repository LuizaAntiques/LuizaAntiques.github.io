import PuzzleRoom from './PuzzleRoom';

const Cozinha = () => {
  return (
    <PuzzleRoom
      title="A Cozinha Abandonada"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      correctPassword="receita"
      hint1="Algo que ensina a fazer comida."
      hint2="Está escrito em um papel antigo."
      successText="Fantástico! Você encontrou uma receita antiga que esconde uma pista importante. Está quase no final da sua jornada!"
    />
  );
};

export default Cozinha;

