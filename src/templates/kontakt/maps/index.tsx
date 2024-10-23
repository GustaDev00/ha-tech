import * as S from "./styles";
import C from "@/constants";

export default () => {
  const { img, location } = C.maps;
  return (
    <S.Maps>
      <S.Wrapper>
        <S.Img {...img} />
        <S.Container>
          <iframe
            src={location.link}
            width="600"
            height="450"
            style={{ borderRadius: "4px", border: "none" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </S.Container>
      </S.Wrapper>
    </S.Maps>
  );
};
