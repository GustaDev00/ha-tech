import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";

export default () => {
  const { sectionRef } = useAnimation();
  const { bg, container, content, deals } = C.hero;

  return (
    <S.Header ref={sectionRef}>
      <S.Background {...bg} />
      <S.Wrapper>
        <S.Content>
          <S.Title>{content.title}</S.Title>
          <S.Subtitle>{content.description}</S.Subtitle>
          <S.Button {...content.button} data-timeline="button">
            {content.button.title}
          </S.Button>
        </S.Content>
        <S.Container>
          <S.Hero {...container.img} />
          <S.Contact>
            <S.Icon>
              <S.MailIcon />
            </S.Icon>

            <S.Article>
              <S.TextContact>{container.contact.text}</S.TextContact>
              {container.contact.info.map((info, index) => (
                <S.LinkContact key={index} {...info}>
                  {info.content}
                </S.LinkContact>
              ))}
            </S.Article>
          </S.Contact>
        </S.Container>
      </S.Wrapper>
      <S.Deals>
        <S.Text data-timeline="deals-text">{deals.text}</S.Text>
        {deals.clients.map((client, index) => (
          <S.Img key={index} data-timeline="deals-img" {...client} />
        ))}
      </S.Deals>
    </S.Header>
  );
};
