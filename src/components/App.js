import GlobalStyles from '../styles/global';
import { Header } from './Header';
import { Background } from '../ui-components/Background';
import img from '../images/Group582.png';
import { AppWrapper } from '../ui-components/AppWrapper';
import { Circle } from '../ui-components/Circle';
import { Main } from './Main';
import { Footer } from './Footer';

function App() {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <Footer />

      <Background src={img} />
      <Circle diameter="560px" color="rgba(255, 86, 86, 0.7)" />
      <GlobalStyles />
    </AppWrapper>
  );
}

export default App;
