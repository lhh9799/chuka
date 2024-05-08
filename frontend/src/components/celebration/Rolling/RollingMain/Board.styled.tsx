import styled from "styled-components";
import { colors } from "@styles/theme";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  z-index: 200;
  width: 30px;
  height: 250px;
  background-color: ${colors.mainPink};
  color: ${colors.white};
  position: fixed;
  bottom: 30%;
  right: 0;
  transition: right 0.3s ease-in-out;
  writing-mode: vertical-lr;
`;

export const P = styled.p`
  position: absolute;
  font-size: 20px;
  color: ${colors.black};
  text-shadow:
    -1px 0px ${colors.white},
    0px 1px ${colors.white},
    1px 0px ${colors.white},
    0px -1px ${colors.white};
  transform: translate(40%, 0);
  top: 10%;
  z-index: 10;
`;

export const Container = styled.div`
  position: relative;
  flex-grow: 1;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    background: transparent;
    -webkit-appearance: none;
  }
`;

export const RollingTheme = styled.div<{ $theme: string }>`
  width: 100%;
  height: 100%;

  opacity: 0.7;
  position: relative;
  min-height: 100vh;
  background-image: ${(props) =>
    props.$theme === "CORK_BOARD"
      ? `url("/img/img_rolling_theme_cork.jpg")`
      : `url("/img/img_rolling_theme_board.jpg")`};
  background-repeat: repeat-y;
  background-size: cover;
`;

export const CardWrap = styled.div`
  position: absolute;
  width: 100%;
  display: grid;
  align-content: start;
  row-gap: 30px;
  column-gap: 5px;
  grid-template-columns: calc(50%) calc(50%);
  padding: 10px;
  min-height: 100vh;
`;

export const Card = styled.div<{
  $bgColor?: string;
  $font: string;
  $fontColor: string;
  $bgImage?: string;
  $shape: string;
}>`
  display: flex;
  width: 150px;
  height: 150px;
  margin: 10px;
  z-index: 250;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.$fontColor || colors.black};
  font-family: ${(props) => props.$font || "Pretendard"};
  background-color: ${(props) =>
    props.$bgImage ? "transparent" : props.$bgColor || colors.white};
  background-image: ${(props) =>
    props.$bgImage ? `url(${props.$bgImage})` : "none"};
  background-size: cover;
  background-position: center;
  border-radius: ${(props) => (props.$shape === "CIRCLE" ? "50%" : "1em")};
`;


export const CardDetail = styled.div<{
  $bgColor?: string;
  $font: string;
  $fontColor: string;
  $bgImage?: string;
  $shape: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 10px;
  z-index: 250;
  font-size: 1.5em;
  color: ${(props) => props.$fontColor || colors.black};
  font-family: ${(props) => props.$font || "Pretendard"};
  background-color: ${(props) =>
    props.$bgImage ? "transparent" : props.$bgColor || colors.white};
  background-image: ${(props) =>
    props.$bgImage ? `url(${props.$bgImage})` : "none"};
  background-size: cover;
  background-position: center;
  border-radius: ${(props) => (props.$shape === "CIRCLE" ? "50%" : "1em")};
`;