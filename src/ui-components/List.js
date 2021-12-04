import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListEl = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.isVertical ? 'column' : 'row')};
  gap: ${(props) => props.gap};
  list-style: none;
`;

export function List(props) {
  return <ListEl {...props}>{props.children}</ListEl>;
}

List.propTypes = {
  isVertical: PropTypes.bool.isRequired,
  gap: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
