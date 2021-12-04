import GlobalStyles from '../styles/global';
import { Header } from './Header';
import { Background } from '../ui-components/Background';
import styled from 'styled-components';
import img from '../images/Group582.png';

const AppDiv = styled.div`
  max-width: 1400px;
  min-height: 800px;
  position: relative;
  height: 100%;
  margin: 0 auto;
  padding: 56px 100px 72px;

  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppDiv>
      <Header />

      <Background src={img} />
      <GlobalStyles />
    </AppDiv>
  );
}

export default App;
