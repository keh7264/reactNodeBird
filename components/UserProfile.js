import { Avatar, Button, Card } from "antd";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
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

export default UserProfile;
