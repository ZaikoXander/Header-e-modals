import { useState } from 'react';

import Header from './components/Header';

import FirstIntroductionModal from './components/FirstIntroductionModal'
import SecondIntroductionModal from './components/SecondIntroductionModal';

function App() {
  const [showFirstIntroductionModal,
         setShowFirstIntroductionModal] = useState(true);
  const [showSecondIntroductionModal,
         setShowSecondIntroductionModal] = useState(false);

  const handleCloseFirstIntroductionModal = () => {
    setShowFirstIntroductionModal(false);
    setShowSecondIntroductionModal(true);
  };

  const handleCloseSecondIntroductionModal = () => {
    setShowSecondIntroductionModal(false);
  };

  return (
    <div className="App">
      <Header />
      {showFirstIntroductionModal && (
        <FirstIntroductionModal 
          onClose={handleCloseFirstIntroductionModal}
        />
      )}
      {showSecondIntroductionModal && (
        <SecondIntroductionModal 
          onClose={handleCloseSecondIntroductionModal}
        />
      )}
    </div>
  );
}

export default App;
