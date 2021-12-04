import styled from 'styled-components';

const FooterEl = styled.footer`
  z-index: 1;
  display: flex;
  justify-content: flex-end;
`;

const FooterText = styled.p`
  max-width: 388px;
  min-height: 92px;

  font-family: Mukta Malar, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 23px;

  color: #ffffff;
`;

export function Footer() {
  return (
    <FooterEl>
      <FooterText>
        Japan is an island country in East Asia. Located in the Pacific Ocean,
        it lies off the eastern coast of the Asian continent and stretches from
        the Sea of Okhotsk in the north to the East China Sea and the Philippine
        Sea in the south.
      </FooterText>
    </FooterEl>
  );
}
