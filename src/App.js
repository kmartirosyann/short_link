
import './App.css';
import BackgroundAnimate from './components/backgroundAnimate/BackgroundAnimate';
import FormPage from './components/formPage/FormPage';
import ShortLink from './components/shortLink/ShortLink';
import { ContextProvider } from './context/reducer';

function App() {
  return (
    <ContextProvider>
      <div className='container'>
        <FormPage />
        <ShortLink />
      </div>
      <BackgroundAnimate />
    </ContextProvider>

  );
}

export default App;
