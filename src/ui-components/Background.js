import styled from 'styled-components';
import PropTypes from 'prop-types';

const BackgroundImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export function Background(props) {
  return <BackgroundImg {...props} />;
}

Background.propTypes = {
  src: PropTypes.string.isRequired,
};
