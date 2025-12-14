import PuzzleRoom from './PuzzleRoom';

const Suite = () => {
  return (
    <PuzzleRoom
      title="A Suite Principal"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      correctPassword="diario"
      hint1="Algo onde se escreve segredos."
      hint2="Contém histórias e memórias."
      successText="Incrível! Você descobriu um diário antigo com pistas importantes. As páginas revelam segredos sobre o que aconteceu nesta casa."
    />
  );
};

export default Suite;

