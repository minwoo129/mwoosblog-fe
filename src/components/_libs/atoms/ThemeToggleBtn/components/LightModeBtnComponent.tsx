import {MdDarkMode} from 'react-icons/md';

const LightModeBtnComponent = ({
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
      className="fixed bottom-7 right-5 w-[80px] h-[80px] rounded-3xl flex justify-center items-center border-2 border-solid border-[#242427]">
      <MdDarkMode size={50} color="#242427" />
    </button>
  );
};

export default LightModeBtnComponent;
