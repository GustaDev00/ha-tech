import * as S from "./styles";
import C from "@/constants";

export default () => {
  const { title, description, list } = C.team;
  return (
    <S.TeamContainer>
      <S.Wrapper>
        <S.Article {...{ title, description }} />

        <S.Container>
          {list.map(({ name, position, signature, img }, index) => (
            <S.Person key={index}>
              <S.Team>
                <S.Image {...img} />
                <S.Shadow>
                  <S.Icon />
                </S.Shadow>
              </S.Team>
              <S.Name>{name}</S.Name>
              <S.Position>{position}</S.Position>
              <S.Signature {...signature} />
            </S.Person>
          ))}
        </S.Container>
      </S.Wrapper>
    </S.TeamContainer>
  );
};
