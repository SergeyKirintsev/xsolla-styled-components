import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
`;

const ListItem = styled.li``;

const Link = styled.a`
  text-decoration: none;

  font-family: Mukta Malar, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  /* identical to box height */

  color: #ffffff;
`;

export function Menu() {
  return (
    <nav>
      <List>
        <ListItem>
          <Link href="/map">map</Link>
        </ListItem>
        <ListItem>
          <Link href="/contacts">contacts</Link>
        </ListItem>
      </List>
    </nav>
  );
}
