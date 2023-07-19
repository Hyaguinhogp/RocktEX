import { Toaster } from 'react-hot-toast';
import Routes from './routes';
import { Global } from './styles/global';
import Loading from './components/Loading';
import { useContext } from 'react';
import { loadingContext } from './contexts/LoadingContext';

function App() {

  const {isLoading} = useContext(loadingContext);

  return (
    <>
      {isLoading && <Loading />}
      <Routes />
      <Toaster />
      <Global />
    </>
  );
}

export default App;
