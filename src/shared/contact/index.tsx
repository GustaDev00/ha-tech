import { sendMail } from "@/api/send-mail";
import * as S from "./styles";
import C from "@/constants";
import { validations } from "./validations";
import { SendMailRequest } from "@/api/send-mail/request";
import { useFormik } from "formik";
import { useState } from "react";

export default () => {
  const [loading, setLoading] = useState(false);
  const {
    span,
    title,
    form: { inputs, button },
    info,
  } = C.contact;

  const [isModalOpen, setIsModalOpen] = useState({
    isActive: false,
    send: true,
    title: <>Nachricht gesendet</>,
    text: (
      <>
        Ihre Nachricht wurde erfolgreich gesendet. Unser Team <br /> wird Ihnen in Kürze per E-Mail
        antworten.
      </>
    ),
  });

  const closeModal = (send?: boolean) => {
    setIsModalOpen({
      ...isModalOpen,
      isActive: false,
      send: send ?? true,
    });
  };

  const openModal = (send: boolean) => {
    setIsModalOpen({
      ...isModalOpen,
      isActive: true,
      send,
      title: send ? (
        <>Nachricht gesendet</>
      ) : (
        <>
          Füllen Sie alle Felder <br />
          korrekt aus
        </>
      ),
    });
  };

  const formik = useFormik<SendMailRequest>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validations,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await sendMail(values);
        openModal(true);
        setLoading(false);

        setTimeout(() => {
          closeModal(true);
        }, 4000);

        formik.resetForm();
      } catch (error) {
        openModal(false);
        setLoading(false);

        setTimeout(() => {
          closeModal(false);
        }, 4000);
      }
    },
  });

  return (
    <>
      <S.Modal $active={isModalOpen.isActive} $error={isModalOpen.send}>
        <S.ModalContent>
          <S.WrapperModal>
            <S.IconModal />
            <S.TitleModal>{isModalOpen.title}</S.TitleModal>
            <S.TextModal>{isModalOpen.text}</S.TextModal>
            <S.ButtonModal onClick={() => closeModal()}>OK</S.ButtonModal>
          </S.WrapperModal>
        </S.ModalContent>
        <S.Blackout onClick={() => closeModal()} />
      </S.Modal>

      <S.Contact>
        <S.Wrapper>
          <S.Span>
            <span.icon /> {span.text}
          </S.Span>
          <S.Title>{title}</S.Title>
          <S.Container>
            <S.Form onSubmit={formik.handleSubmit}>
              {inputs.map((input, index) => (
                <S.Label
                  key={index}
                  $gridName={input.name}
                  $error={Boolean(
                    formik.touched[input.name as keyof SendMailRequest] &&
                      formik.errors[input.name as keyof SendMailRequest],
                  )}
                >
                  <S.TextInput>{input.label}</S.TextInput>
                  {input.type === "textarea" ? (
                    <S.TextArea
                      {...formik.getFieldProps(input.name)}
                      placeholder={input.placeholder}
                      name={input.name}
                    />
                  ) : (
                    <S.Input
                      {...formik.getFieldProps(input.name)}
                      type={input.type}
                      name={input.name}
                      placeholder={input.placeholder}
                    />
                  )}
                </S.Label>
              ))}
              <S.Button type="submit">
                {button} {loading && "..."}
              </S.Button>
              <S.List>
                {info.map((info, index) => (
                  <S.Item key={index}>
                    <info.icon />
                    {info.text}
                    <S.Link href={info.link}>{info.content}</S.Link>
                  </S.Item>
                ))}
              </S.List>
            </S.Form>
          </S.Container>
        </S.Wrapper>
      </S.Contact>
    </>
  );
};
