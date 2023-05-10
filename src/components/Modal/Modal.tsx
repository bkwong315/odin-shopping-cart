import React from 'react';

interface ModalProps {
  msg: string;
  closeError: () => void;
}

const Modal = (props: ModalProps) => {
  const { msg, closeError } = props;

  return (
    <div className='fixed top-0 left-0 z-20 w-screen h-screen grid place-items-center bg-neutral-800/90 backdrop-blur-sm'>
      <div className='grid place-items-center gap-6 w-[25vw] bg-neutral-100 px-4 py-12 rounded text-center font-noto-sans-medium text-sm'>
        <div className='h-20 grid place-items-center'>
          <div className='flex justify-center w-full max-h-0 overflow-hidden animate-height-grow-container transition-[max-height] duration-1000'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              className='w-20 stroke-red-400 p-0 max-h-0 border-4 rounded-full border-red-400 animate-height-grow-icon transition-[max-height_padding] duration-1000'>
              <path
                strokeWidth='12'
                d='M 20, 20
                          L 80, 80
                          M 20, 80
                          L 80, 20'
              />
            </svg>
          </div>
        </div>
        <p>{msg}</p>
        <button
          onClick={closeError}
          className='bg-neutral-700 text-white px-8 py-2'>
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
