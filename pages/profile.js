import AppLayout from "../components/AppLayout";
import React from "react";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "으네" },
    { nickname: "으네" },
    { nickname: "KK" },
  ];
  const followingList = [
    { nickname: "으네" },
    { nickname: "ssdfsfd" },
    { nickname: "asdasd" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | Node Bird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
