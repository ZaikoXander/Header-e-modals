import { X, School } from 'lucide-react';

const FirstIntroductionModal = ({ description, onClose }) => {
  const handleClose = () => {
    localStorage.setItem('modalShown', 'true');
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <div className="flex items-center mb-4">
          <School size={24} className="mr-2"/>
          <h2 className="text-xl font-bold">Olá, seja bem vindo</h2>
        </div>
        <p>
          Seja bem vindo ao Sua Fatec, um lugar para que você possa encontrar informações precisas e opiniões sobre as instituições Fatec do estado de São Paulo.
        </p>
      </div>
    </div>
  );
};

export default FirstIntroductionModal;
