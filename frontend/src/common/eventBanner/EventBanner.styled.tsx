import styled from "styled-components";
import { colors } from "@/styles/theme";


export const Container = styled.div<{ $thumbNail: boolean }>`
  background-image: ${(props) =>
    props.$thumbNail
      ? `url('/img/img_loopy.jpg')`
      : "url('/img/img_chuka_info.png')"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: contain; */
  width: 100%;
  height: 150px;
  border-radius: 30px;
  position: relative;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 44px;
  margin-top: 10px;
  background-color: ${colors.mainPink};
  display: flex;
  position: absolute;
  top: 50%;
`;

export const WrapOverlay = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  opacity: 0.7;
  gap: 5px;
  /* justify-content: center; */
  align-items: center;
`;

export const Img = styled.img`
  width: 31.5px;
  height: 34.5px;
`;

export const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;
export const Title = styled.div`
  font-size: 1.2em;
  font-weight: 700;
`;

export const Text = styled.div`
  font-size: 0.9em;
`