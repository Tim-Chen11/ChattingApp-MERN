import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import * as roomHandler from '../../realtimeCommunication/roomHandler'

const CreateRoomButton = () => {
  const createNewRoomHandler = () => {
    // creating a room and sending info to the server about this
    roomHandler.createNewRoom()
  };
  return (
    <Button
      onClick={createNewRoomHandler}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "white",
        background: "#5865f2",
      }}
    >
      <AddIcon />
    </Button>
  );
};

export default CreateRoomButton;