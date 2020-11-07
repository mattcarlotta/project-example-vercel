import styled from "@emotion/styled";

const UserCard = styled.div`
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

export default UserCard;
