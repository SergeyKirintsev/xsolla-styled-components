import styled from 'styled-components';
import { List } from '../ui-components/List';
import { ListItem } from '../ui-components/ListItem';
import { Link } from '../ui-components/Link';
import facebook from '../images/facebook-logo-button.svg';
import twitter from '../images/twitter-logo-button.svg';
import pinterest from '../images/pinterest-logo-button.svg';
import { SocialButton } from '../ui-components/SocialButton';

// const SocialButton = styled.button`
//   height: 20px;
//   width: 20px;
//
//   margin: 10px;
//   outline: none;
//   border: none;
//   border-radius: 50%;
//
//   background-image: url(${(props) => props.img});
//   background-color: rgba(255, 255, 255, 0.1);
//
//   cursor: pointer;
//   transition: 0.2s;
//
//   &:hover {
//     transform: scale(1.1);
//   }
// `;

const ListEl = styled(List)`
  position: absolute;
  top: 50%;
  right: 90px;
  transform: translateY(-50%);
`;

export function SocialMenu() {
  return (
    <ListEl isVertical={true} gap="25px">
      <ListItem>
        <Link href="#">
          <SocialButton img={facebook} />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#">
          <SocialButton img={twitter} />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#">
          <SocialButton img={pinterest} />
        </Link>
      </ListItem>
    </ListEl>
  );
}
