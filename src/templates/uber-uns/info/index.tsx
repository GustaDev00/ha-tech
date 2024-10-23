import C from "@/constants";
import * as S from "./styles";
import { NumberCounter } from "@/components/atoms/numer-counter";

export default () => {
  const items = C.info_container;

  return (
    <S.AboutUsContainer>
      <S.Wrapper>
        <S.Container>
          {items.map((item, index) => (
            <S.Article key={index}>
              <S.Title>{item.title}</S.Title>
              <S.Text>{item.text}</S.Text>
            </S.Article>
          ))}
        </S.Container>
      </S.Wrapper>
    </S.AboutUsContainer>
  );
};
