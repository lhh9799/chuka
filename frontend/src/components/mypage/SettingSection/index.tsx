import styled from "styled-components";
import SettingItem from "./SettingItem";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 20px auto 0;
`;

const index = () => {
  // const userInfo = useRecoilValue(userState)
  const userInfo = true;

  return (
    <Container>
      <SettingItem
        title="계정"
        // text={userInfo.memberNo !== -1 ? userInfo.email : ''}
        imgSrc="/icon/icon_mypage1.png"
        width={12.1}
        height={14.3}
      />

      {userInfo ? (
        <SettingItem
          title="나의 ㅊㅋ"
          url="/mypage/celebrate"
          imgSrc="/icon/icon_mypage2.png"
          width={12.56}
          height={16}
        />
      ) : undefined}
      {userInfo ? (
        <SettingItem
          title="나의 펀딩"
          url="/mypage/funding"
          imgSrc="/icon/icon_mypage3.png"
          width={15}
          height={15}
        />
      ) : undefined}

      {userInfo ? (
        <SettingItem
          title="로그아웃"
          // url="/mypage/funding"
          imgSrc="/icon/icon_mypage4.png"
          width={15}
          height={15}
        />
      ) : (
        <SettingItem
          title="로그인"
          // url="/mypage/funding"
          imgSrc="/icon/icon_mypage4-1.png"
          width={15}
          height={15}
        />
      )}

      <SettingItem
        title="회원탈퇴"
        // url="/mypage/funding"
        imgSrc="/icon/icon_mypage5.png"
        width={18}
        height={15}
      />
    </Container>
  );
};

export default index;