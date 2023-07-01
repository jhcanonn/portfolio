import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  visible: boolean;
  onVisible: (e: any) => void;
  children: ReactNode;
};

const Modal = ({ children, visible, onVisible }: Props) => {
  visible
    ? document.documentElement.classList.add('overflow-y-hidden')
    : document.documentElement.classList.remove('overflow-y-hidden');

  const handleBackgroundClose = (e: any) => {
    if (e.target.id === 'pdf-credential') onVisible(false);
  };

  return (
    visible &&
    createPortal(
      <section
        id="pdf-credential"
        className="fixed inset-0 z-30 bg-black/50 backdrop-blur-md flex justify-center items-center"
        onClick={handleBackgroundClose}
      >
        <div className="rounded-3xl relative w-full sm:w-auto bg-white min-h-fit min-w-fit p-2">
          {children}
          <button
            className="absolute top-7 right-7 rounded-lg md:rounded-xl bg-red-500 w-7 h-7 px-2 py-1 font-bold text-white self-end flex justify-center items-center text-md"
            onClick={() => onVisible(false)}
          >
            <span className="block">X</span>
          </button>
        </div>
      </section>,
      document.getElementById('modal-portal')
    )
  );
};

export default Modal;

// min-w-[30rem] min-h-[40%]
