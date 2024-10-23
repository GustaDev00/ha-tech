import * as S from "./styles";
import C from "@/constants";

export default () => {
  const { title, description, img, list } = C.why_choose_us;

  return (
    <S.WhyChooseUs>
      <S.Wrapper>
        <S.Article {...{ title, description }} />
        <S.Container>
          <S.Img {...img} />
          <S.List>
            {list.map(({ icon, title, text }, index) => (
              <S.Item key={index}>
                <S.Icon {...icon} />
                <S.Title>{title}</S.Title>
                <S.Text>{text}</S.Text>
              </S.Item>
            ))}
          </S.List>
        </S.Container>
      </S.Wrapper>
    </S.WhyChooseUs>
  );
};
