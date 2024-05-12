import * as H from "./FundingHeader.styled";
import { shareFundingKakao } from "@/services/shareFundingKakao";
import { colors } from "@/styles/theme";
import { LuScrollText } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export type FundingHeaderType = {
  fundingUrl: string
  productImgUrl: string | undefined
  productName: string | undefined
  nickname: string | undefined
  eventId: number | undefined
  pageUri: string | undefined
};




const index = (props: FundingHeaderType) => {
  const navigate = useNavigate()
  const {fundingUrl, productImgUrl, productName, nickname, eventId, pageUri} = props
  const handleBack = () => {
    window.history.back();
  };


  return (
    <H.Container>
      <H.IconArrow onClick={handleBack} />
      <div style={{ display:'flex', gap:'45px'}}>
      <H.IconWrap
        onClick={() =>
          shareFundingKakao({ fundingUrl, productImgUrl, productName, nickname, eventId, pageUri })
        }
      >
        <H.Icon src="/icon/icon_share.png" alt="" />
        <H.Text>공유하기</H.Text>
      </H.IconWrap>
      <H.IconWrap
        onClick={() => navigate(`/celebrate/rolling/${eventId}/${pageUri}`)}
      >
        <H.customIcon>  
        <LuScrollText color={colors.mainPink} size={22}/>
        </H.customIcon>
        <H.Text>추카 보기</H.Text>
      </H.IconWrap>

      </div>
    </H.Container>
  );
};

export default index;
