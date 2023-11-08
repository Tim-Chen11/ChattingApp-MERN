import React from "react";
import { useState } from "react";
import { Tooltip, Typography, Box } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";

const PendingInvitationsListItem = ({
  id,
  username,
  mail,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handlerAcceptInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonDisabled(true);
  };

  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonDisabled(true);
  };
  return (
    <Tooltip title={mail}>
      <Box
        sx={{
          width: "100%",
          height: "42px",
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Avatar username={username} />
        <Typography
          sx={{
            marginLeft: "7px",
            fontWeight: 700,
            color: "#8e9297",
            flexGrow: 1,
          }}
          variant="subtitle1"
        >
          {username}
        </Typography>
        <InvitationDecisionButtons
            display={buttonDisabled}
            acceptInvitationHandler={handlerAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation}
          />
      </Box>
    </Tooltip>
  );
};

export default PendingInvitationsListItem;
