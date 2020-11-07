import * as React from "react";
import { BiMessageAltError } from "react-icons/bi";
import Card from "~components/Layout/Card";
import Center from "~components/Layout/Center";
import ErrorMessage from "~components/Layout/ErrorMessage";
import LoadingUsers from "~components/Layout/LoadingUsers";
import PageContainer from "~components/Layout/PageContainer";
import Title from "~components/Layout/Title";
import UserContainer from "~components/Layout/UserContainer";
import Header from "~components/Navigation/Header";
import app from "~utils/axiosConfig";
import { NextPage, UserData } from "~types";

const Home: NextPage = () => {
  const [state, setState] = React.useState({
    data: [],
    isLoading: true,
    error: ""
  });
  const { data, error, isLoading } = state;

  const fetchUsers = React.useCallback(async (): Promise<any> => {
    try {
      const res = await app.get("users");

      setState({
        data: res.data.users,
        isLoading: false,
        error: ""
      });
    } catch (error) {
      setState({
        data: [],
        isLoading: false,
        error
      });
    }
  }, []);

  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Center
      data-testid="home-page"
      style={{ height: "100%", color: "#0076ff" }}
    >
      <Header title="Home" url="/" />
      <PageContainer>
        <Title>Registered Users</Title>
        {isLoading ? (
          <LoadingUsers width={250} height={135} />
        ) : error ? (
          <ErrorMessage style={{ color: "#e60039" }}>
            <BiMessageAltError
              style={{ marginRight: 5, position: "relative", top: 5 }}
            />
            {error}
          </ErrorMessage>
        ) : (
          <UserContainer>
            {data.map((props: UserData, idx) => (
              <Card {...props} idx={idx} key={props.id} />
            ))}
          </UserContainer>
        )}
      </PageContainer>
    </Center>
  );
};

export default Home;
