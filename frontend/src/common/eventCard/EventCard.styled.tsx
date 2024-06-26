import styled from "styled-components";
import { colors } from "@/styles/theme";

export const Container = styled.div<{ $thumbNailUrl: string }>`
  background-image: ${(props) =>
    props.$thumbNailUrl
      ? `url('${props.$thumbNailUrl}')`
      : "url('/icon/apple-touch-icon.png')"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 120px;
  height: 120px;
  border-radius: 30px;
  position: relative;
`;

export const Dday = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  font-weight: 600;
  text-shadow:
    -0.8px 0px ${colors.white},
    0px 0.8px ${colors.white},
    0.8px 0px ${colors.white},
    0px -0.8px ${colors.white};
`;

export const Wrap = styled.div`
  width: 100%;
  height: 44px;
  margin-top: 10px;
  background-color: ${colors.white};
  opacity: 0.7;
  display: flex;
  position: absolute;
  top: 50%;
  border-bottom-right-radius: 1.25em;
  border-bottom-left-radius: 1.25em;
`;

export const WrapOverlay = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  align-items: center;
`;

export const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 6px;
  gap: 4px;
`;
export const Title = styled.div`
  font-size: 1em;
  font-weight: 700;
`;

export const Date = styled.div`
  font-size: 0.9em;
  font-weight: 500;
`;

export type EventCardType = {
  title: string;
  createTime: string;
  date: string;
  thumbNailUrl: string;
  eventUrl: string;
};
