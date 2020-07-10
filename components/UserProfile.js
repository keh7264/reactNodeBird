import { Avatar, Button, Card } from "antd";
import React, { useCallback } from "react";
import PropTypes from "prop-types";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
        </div>,
        <div key="followings">
          0<br />
        </div>,
        <div key="followers">
          0<br />
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>EH</Avatar>} title="Eunhye"></Card.Meta>
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

UserProfile.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default UserProfile;
