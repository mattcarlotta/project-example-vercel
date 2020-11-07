import styled from "@emotion/styled";
import Avatar from "~components/Layout/Avatar";
import FadeIn from "~components/Layout/FadeIn";
import Flex from "~components/Layout/Flex";
import toInitials from "~utils/toInitials";
import UserAddress from "./UserAddress";
import UserCard from "./UserCard";
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

const Card = ({
  idx,
  email,
  address: { street, suite, city, zipcode },
  name,
  username
}: CardProps): JSX.Element => (
  <FadeIn data-testid="card-container" timing={`${0.5 + idx / 10}s`}>
    <UserCard>
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
    </UserCard>
  </FadeIn>
);

export default Card;
