import styled from "@emotion/styled";
import FadeIn from "~components/Layout/FadeIn";
import UserContainer from "~components/Layout/UserContainer";
import { LoadingUsersProps } from "~types";

const LoadingUsersComponent = ({ className }: LoadingUsersProps) => (
  <FadeIn data-testid="loading-users" timing="0.6s">
    <UserContainer>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(key => (
        <div key={key} data-testid="loading-user-card" className={className} />
      ))}
    </UserContainer>
  </FadeIn>
);
const LoadingUsers = styled(LoadingUsersComponent)`
  @keyframes wave {
    0% {
      left: -60%;
    }

    100% {
      left: 125%;
    }
  }

  @keyframes pulse {
    0% {
      background-color: #ccc;
    }

    50% {
      background-color: #bbb;
    }

    100% {
      background-color: #ccc;
    }
  }

  display: inline-block;
  height: ${({ height }) => (height ? `${height}px` : "50px")};
  width: ${({ width }) => (width ? `${width}px` : "50px")};
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  background-color: "#eee";
  opacity: ${({ opacity }) => opacity || 0.25};
  border-radius: 4px;
  animation: pulse ${({ duration }) => duration || "2.5s"} infinite ease-in-out;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);

  :before {
    content: "";
    position: absolute;
    height: ${({ height }) => (height ? `${height * 2}px` : "100px")};
    width: ${({ width }) => (width ? `${width * 0.125}px` : "6.25px")};
    top: -50%;
    left: -50%;
    z-index: 1;
    background-image: -o-linear-gradient(
      left,
      transparent 0%,
      #fff 50%,
      transparent 100%
    );
    background-image: linear-gradient(
      90deg,
      transparent 0px,
      #fff 50%,
      transparent 100%
    );
    animation: wave ${({ duration }) => duration || "2.5s"} infinite ease-in-out;
    transform: rotate(25deg);
  }
`;

export default LoadingUsers;
