import { useState }  from 'react';

import logo from '../../assets/Picsart_24-03-28_11-26-48-109.png'; // Ajuste o caminho se necessário

import HeaderModal from '../HeaderModal';

import { CircleHelp } from 'lucide-react'; // Importando os ícones do Lucide React

const Header = () => {
  const [showHeaderModal, setShowHeaderModal] = useState(false);

  const handleOpenHeaderModal = () => {
    setShowHeaderModal(true);
  };

  const handleCloseHeaderModal = () => {
    setShowHeaderModal(false);
  };

  return (
    <header className="text-white p-4 shadow-md h-[100px] bg-[#ebeff7]">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-24 h-24"/> 
          <button onClick={handleOpenHeaderModal} className="ml-4 text-blue-500">
            <CircleHelp />
          </button>
        </div>
        <nav className="flex-col md:flex-row md:flex space-x-4">
        </nav>
      </div>
      {showHeaderModal && <HeaderModal onClose={handleCloseHeaderModal} />}
    </header>
  );
};

export default Header;
