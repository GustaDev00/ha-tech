import C from "@/constants";
import * as S from "./styles";

export default () => {
  const { bg, title, description, list } = C.gallery;
  return (
    <S.Gallery $bg={bg.src}>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{description}</S.Subtitle>
        <S.Slide items={list} />
      </S.Wrapper>
    </S.Gallery>
  );
};
