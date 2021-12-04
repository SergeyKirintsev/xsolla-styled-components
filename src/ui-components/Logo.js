import styled from 'styled-components';
import PropTypes from 'prop-types';

const Link = styled.a`
  text-decoration: none;
`;

const LogoText = styled.p`
  font-family: Mukta Malar, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 80px;

  color: #fff;
`;

export function Logo({ text }) {
  return (
    <Link href="/">
      <LogoText>{text}</LogoText>
    </Link>
  );
}

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};
