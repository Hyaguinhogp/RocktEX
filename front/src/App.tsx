import { Toaster } from 'react-hot-toast';
import Routes from './routes';
import { Global } from './styles/global';
import Loading from './components/Loading';
import { useContext, useEffect } from 'react';
import { loadingContext } from './contexts/LoadingContext';
import { userContext } from './contexts/UserContext';
import ConfirmationModal from './components/ConfirmationModal';
import { confirmationModalContext } from './contexts/ConfirmationModalContext';

function App() {

  const { isLoading } = useContext(loadingContext);
  const { checkToken, login, exit } = useContext(userContext);
  const { isActive } = useContext(confirmationModalContext);

  useEffect(() => {
    if (checkToken()) {
      login();
    }
    else {
      exit();
    }
  }, [])

  return (
    <>
      {isLoading && <Loading />}
      {isActive && <ConfirmationModal />}
      <Routes />
      <Toaster />
      <Global />
    </>
  );
}

export default App;
