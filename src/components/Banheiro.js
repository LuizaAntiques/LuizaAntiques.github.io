import PuzzleRoom from './PuzzleRoom';

const Banheiro = () => {
  return (
    <PuzzleRoom
      title="O Banheiro Secreto"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      correctPassword="espelho"
      hint1="Você pode se ver nele."
      hint2="Está na parede e reflete imagens."
      successText="Ótimo trabalho! O espelho revelou um segredo escondido. Você está mais perto de descobrir a verdade sobre esta casa."
    />
  );
};

export default Banheiro;

