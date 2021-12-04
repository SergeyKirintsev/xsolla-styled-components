import styled from 'styled-components';
import { LeftMenu } from './LeftMenu';
import { SocialMenu } from './SocialMenu';

const MainEl = styled.main`
  z-index: 1;
  padding-bottom: 50px;
  margin-bottom: auto;
`;

export function Main() {
  return (
    <MainEl>
      <LeftMenu />
      <SocialMenu />
    </MainEl>
  );
}
