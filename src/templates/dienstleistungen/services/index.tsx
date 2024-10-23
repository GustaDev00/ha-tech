import * as S from "./styles";
import { Data as C } from "@/constants";

export default () => {
  const {
    services,
    button: { contact },
  } = C;
  return (
    <S.Service>
      <S.Wrapper>
        {services.map(({ bg, icon, title, list }) => (
          <S.Services key={title}>
            <S.Bg {...bg} />
            <S.Hidden>
              <S.Container>
                <S.Article>
                  <S.Icon {...icon} />
                  <S.Title>{title}</S.Title>
                </S.Article>
                <S.List>
                  {list.map((item, index) => (
                    <S.Item key={index}>{item}</S.Item>
                  ))}
                </S.List>
                <S.Button {...contact}>{contact.text}</S.Button>
              </S.Container>
            </S.Hidden>
          </S.Services>
        ))}
      </S.Wrapper>
    </S.Service>
  );
};
