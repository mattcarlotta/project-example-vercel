import styled from "@emotion/styled";
import Avatar from "~components/Layout/Avatar";
import FadeIn from "~components/Layout/FadeIn";
import Flex from "~components/Layout/Flex";
import toInitials from "~utils/toInitials";
import UserAddress from "./UserAddress";
import UserDetails from "./UserDetails";
import UserName from "./UserName";
import { CardProps } from "~types";

const Divider = styled.li`
  display: inline-block;
  content: "";
  height: 10px;
  margin: 0 10px;
  border-left: 1px solid #d3d3d3;
`;

const CardComponent = ({
  className,
  idx,
  email,
  address: { street, suite, city, zipcode },
  name,
  username
}: CardProps): JSX.Element => (
  <FadeIn data-testid="card-container" timing={`${0.5 + idx / 10}s`}>
    <div className={className}>
      <Flex>
        <Avatar>{toInitials(name)}</Avatar>
        <UserName>{username}</UserName>
      </Flex>
      <UserDetails>{email}</UserDetails>
      <UserAddress>
        <li>{street}</li>
        <Divider />
        {suite && (
          <>
            <li>{suite}</li>
            <Divider />
          </>
        )}
        <li>{city}</li>
        <Divider />
        <li>{zipcode}</li>
      </UserAddress>
    </div>
  </FadeIn>
);

const Card = styled(CardComponent)`
  width: 250px;
  margin: 10px;
  border-radius: 4px;
  text-align: left;
  background-color: white;
  color: #0096ff;
  box-shadow: 0px 8px 15px -8px rgba(0, 0, 0, 0.75);
  padding: 10px;
  transition: all 200ms ease-in-out;
  user-select: none;

  :hover {
    box-shadow: 0px 0px 26px -2px rgba(0, 0, 0, 1);
    transform: scale(1.1);
    z-index: 1000;
  }
`;

export default Card;
