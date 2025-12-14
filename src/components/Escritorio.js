import PuzzleRoom from './PuzzleRoom';

const Escritorio = () => {
  return (
    <PuzzleRoom
      title="O Escritório Escuro"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      correctPassword="codigo"
      hint1="Uma sequência de números ou letras."
      hint2="Usado para desbloquear algo."
      successText="Perfeito! Você encontrou um código secreto. Este código pode ser a chave para desbloquear a saída desta casa misteriosa."
    />
  );
};

export default Escritorio;

