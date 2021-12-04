import styled from 'styled-components';
import { LeftMenu } from './LeftMenu';
import { SocialMenu } from './SocialMenu';

const MainEl = styled.main`
  z-index: 1;
`;

export function Main() {
  return (
    <MainEl>
      <LeftMenu />
      <SocialMenu />
    </MainEl>
  );
}
