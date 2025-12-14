import PuzzleRoom from './PuzzleRoom';

const Sala = () => {
  return (
    <PuzzleRoom
      title="A Sala Misteriosa"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      correctPassword="mapa"
      hint1="Procure por algo que mostra o caminho."
      hint2="Está relacionado a orientação e direção."
      successText="Parabéns! Você encontrou o mapa. Agora você pode seguir para o próximo cômodo. Continue sua jornada para desvendar os mistérios desta casa abandonada."
    />
  );
};

export default Sala;

