import styled from 'styled-components';
import { List } from '../ui-components/List';
import { ListItem } from '../ui-components/ListItem';

const MenuTitle = styled.h2`
  font-family: Mukta Malar, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height */

  color: #ffffff;
  margin-bottom: 20px;
`;

const ListItemLeftMenu = styled(ListItem)`
  font-family: Mukta Malar, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 60px;

  color: #ffffff;
`;

export function LeftMenu() {
  return (
    <>
      <MenuTitle>Cities</MenuTitle>
      <List isVertical={true} gap={'10px'}>
        <ListItemLeftMenu>Tokyo</ListItemLeftMenu>
        <ListItemLeftMenu>Kyoto</ListItemLeftMenu>
        <ListItemLeftMenu>Osaka</ListItemLeftMenu>
        <ListItemLeftMenu>Yokohama</ListItemLeftMenu>
        <ListItemLeftMenu>Nagano</ListItemLeftMenu>
        <ListItemLeftMenu>Hiroshima</ListItemLeftMenu>
      </List>
    </>
  );
}
