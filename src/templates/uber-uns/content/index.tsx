import C from "@/constants";
import * as S from "./styles";

export default () => {
  const content = C.content_block;

  return (
    <S.AboutUsContainer>
      <S.Wrapper>
        {content.map(({ img, title, text }, index) => (
          <S.Content key={index}>
            <S.Image {...img} />
            <S.Article>
              <S.Title>{title}</S.Title>
              <S.Text>{text}</S.Text>
            </S.Article>
          </S.Content>
        ))}
      </S.Wrapper>
    </S.AboutUsContainer>
  );
};
