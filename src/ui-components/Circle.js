import styled from 'styled-components';
import PropTypes from 'prop-types';

const BackgroundImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${(props) => props.diameter};
  height: ${(props) => props.diameter};
  border-radius: 50%;

  background-color: ${(props) => props.color};
`;

export function Circle(props) {
  return <BackgroundImg {...props} />;
}

Circle.propTypes = {
  diameter: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
