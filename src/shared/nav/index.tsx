import * as S from "./styles";
import * as C from "@/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <S.Header>
        <S.Logo />

        <S.Nav>
          <S.List>
            {C.Data.navigation.map((category) => (
              <S.Item key={category.title} $active={pathname === category.href}>
                <S.Link href={category.href}>{category.title}</S.Link>
              </S.Item>
            ))}
          </S.List>
        </S.Nav>

        <S.Content>
          <S.ButtonContact {...C.Data.button.contact}>
            {C.Data.button.contact.title}
          </S.ButtonContact>
        </S.Content>

        <S.Button onClick={handleClick}>
          <S.MenuIcon />
        </S.Button>
      </S.Header>

      <S.Overlay $open={open}>
        <S.Modal>
          <S.Wrapper>
            <S.HeaderModal>
              <S.TextModal>Menu</S.TextModal>
              <S.Close onClick={handleClick} />
            </S.HeaderModal>
            <S.Container>
              <S.List>
                {C.Data.navigation.map((link, index) => (
                  <S.Item key={index} $active={pathname === link.href}>
                    <S.Link {...link} onClick={handleClick}>
                      {link.title}
                    </S.Link>
                  </S.Item>
                ))}
              </S.List>
            </S.Container>
            <S.Line />
            <S.Footer>
              <S.TitleFooter>{C.Data.footer.menu}</S.TitleFooter>
              {C.Data.contact.map((contact, index) => (
                <S.LinkFooter {...contact} key={index}>
                  {contact.content}
                </S.LinkFooter>
              ))}
              <S.ButtonFooter {...C.Data.button.contact}>
                {C.Data.button.contact.title}
              </S.ButtonFooter>
            </S.Footer>
          </S.Wrapper>
        </S.Modal>
        <S.Black onClick={handleClick} />
      </S.Overlay>
    </>
  );
};
