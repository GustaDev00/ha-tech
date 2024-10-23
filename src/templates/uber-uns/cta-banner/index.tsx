import * as S from "./styles";
import C from "@/constants";

export default () => {
  const { bg, title, description, button } = C.cta_banner;

  return (
    <S.Cta>
      <S.Bg {...bg} />
      <S.Wrapper>
        <S.Article>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Article>
        <S.Button {...button}>{button.title}</S.Button>
      </S.Wrapper>
      <S.Circle />
    </S.Cta>
  );
};
