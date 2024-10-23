import { useEffect, useState } from "react";
import * as S from "./styles";
import C, { Data } from "@/constants";

export default () => {
  const [number, setNumber] = useState(0);
  const {
    img,
    title,
    description,
    container: { img_big, img_small, slide },
  } = C.services;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNumber((prevNumber) => (prevNumber + 1) % slide.length);
    }, 8000);

    return () => clearTimeout(timeout);
  }, [number]);

  return (
    <S.Services>
      <S.Wrapper>
        <S.Article {...{ title, description, img }} />

        <S.Container>
          <S.ImgSmall {...img_small} />
          <S.ImgBig {...img_big} />
          <S.Slide>
            {slide.map(({ title, icon }, index) => (
              <S.ContainerSlide key={title} $active={index === number}>
                <S.IconContainer>
                  <S.Icon {...icon} />
                </S.IconContainer>
                <S.Content>
                  <S.TitleSlide>{title}</S.TitleSlide>
                  <S.Button {...Data.button.services}>{Data.button.services.title}</S.Button>
                  <S.Dots>
                    {slide.map((_, index) => (
                      <S.Dot
                        key={index}
                        $active={index === number}
                        onClick={() => setNumber(index)}
                      />
                    ))}
                  </S.Dots>
                </S.Content>
              </S.ContainerSlide>
            ))}
          </S.Slide>
        </S.Container>
      </S.Wrapper>
    </S.Services>
  );
};
