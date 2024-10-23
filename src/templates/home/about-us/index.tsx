import C from "@/constants";
import * as S from "./styles";
import { NumberCounter } from "@/components/atoms/numer-counter";

export default () => {
  const {
    title,
    description,
    list,
    link,
    container: { bg, img, project },
  } = C.about_us;

  return (
    <S.AboutUs>
      <S.Wrapper>
        <S.Container>
          <S.Bg {...bg} />
          <S.Img {...img} />
          <S.Project>
            <S.TitleProject>
              {project.icon} <NumberCounter end={project.number} duration={1} />
            </S.TitleProject>
            <S.DescriptionProject>{project.text}</S.DescriptionProject>
          </S.Project>
        </S.Container>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.List>
            {list.map((item, index) => (
              <S.Item key={index}>
                <S.Icon src={item.icon} alt="icon" /> <S.Span>{item.text}</S.Span>
              </S.Item>
            ))}
          </S.List>
          <S.Button {...link}>{link.title}</S.Button>
        </S.Content>
      </S.Wrapper>
    </S.AboutUs>
  );
};
