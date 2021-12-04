import styled from 'styled-components';
import { List } from '../ui-components/List';
import { ListItem } from '../ui-components/ListItem';
import { Link } from '../ui-components/Link';

const HeaderLink = styled(Link)`
  font-family: Mukta Malar, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  /* identical to box height */

  color: #ffffff;
  transition: 0.4s;

  &:hover {
    opacity: 0.7;
  }
`;

export function Menu() {
  return (
    <nav>
      <List isVertical={false} gap="50px">
        <ListItem>
          <HeaderLink href="/map">map</HeaderLink>
        </ListItem>
        <ListItem>
          <HeaderLink href="/contacts">contacts</HeaderLink>
        </ListItem>
      </List>
    </nav>
  );
}
