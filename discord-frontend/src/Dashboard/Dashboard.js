import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled('div')({
  width:'100%',
  height:'100vh',
  display: 'flex',

})

const Dashboard = () => {
  return <Wrapper>
    <SideBar />
    <FriendsSideBar />
    <Messenger />
    <AppBar />
  </Wrapper>;
};

export default Dashboard;
