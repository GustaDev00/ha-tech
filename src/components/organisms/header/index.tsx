import * as S from "./styles";
import { HeaderProps } from "./props";
import useAnimation from "./animations";

export const Header = ({ title, text, modal, bg, breadcrumb }: HeaderProps) => {
  const { headerRef } = useAnimation();

  return (
    <S.Header $modal={!!modal} ref={headerRef}>
      <S.Background {...bg} />
      <S.Wrapper>
        <S.Content>
          <S.Breadcrumb data-timeline="breadcrumb">
            <S.Item>
              <S.Link href="/">Home</S.Link>
            </S.Item>
            <S.Item>{breadcrumb}</S.Item>
          </S.Breadcrumb>
          <S.Title>{title}</S.Title>
          {text && <S.Description id="descriptionHeader">{text}</S.Description>}
          <S.Line />
        </S.Content>
        {modal?.content && (
          <S.Container data-timeline="modal">
            <S.Text>{modal.content}</S.Text>
          </S.Container>
        )}
      </S.Wrapper>
    </S.Header>
  );
};
