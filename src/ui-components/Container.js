import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainContainer = styled.div`
  max-width: 1400px;
  padding: 0 100px;
  margin: 0 auto;
  background-color: greenyellow;
`;

export function Container(props) {
  return <MainContainer>{props.children}</MainContainer>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
