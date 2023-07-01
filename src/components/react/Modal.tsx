import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  visible: boolean;
  onVisible: (e: any) => void;
  children: ReactNode;
};

const Modal = ({ children, visible, onVisible }: Props) => {
  visible
    ? document.body.classList.add('overflow-hidden')
    : document.body.classList.remove('overflow-hidden');

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
        <div className="bg-white rounded-3xl p-4 relative">
          {children}
          <button
            className="absolute top-[-1.7rem] right-[-1.7rem] rounded-full bg-red-500 p-2 font-bold text-white self-end w-8 h-8 justify-center items-center flex"
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
