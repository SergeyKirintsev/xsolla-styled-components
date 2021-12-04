import styled from 'styled-components';
import { Logo } from '../ui-components/Logo';
import { Menu } from './Menu';

const Head = styled.header`
  min-height: 80px;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function Header() {
  return (
    <Head>
      <Logo text="Discover Japan" />
      <Menu />
    </Head>
  );
}
