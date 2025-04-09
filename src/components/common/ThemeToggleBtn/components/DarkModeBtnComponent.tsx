import {MdLightMode} from 'react-icons/md';

const DarkModeBtnComponent = ({
  onClick,
  visible,
}: {
  onClick: () => void;
  visible: boolean;
}) => {
  if (!visible) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      className="fixed bottom-7 right-5 w-[80px] h-[80px] rounded-3xl flex justify-center items-center border-2 border-solid border-white">
      <MdLightMode size={50} color="#ffffff" />
    </button>
  );
};

export default DarkModeBtnComponent;
