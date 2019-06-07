import * as React from "react";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";
import FormBlock from "@/components/Molecule/FormBlock";

type ContactFormProps = {
  onBeforeSend?: (blob: Blob) => boolean;
  onSend: (eve: React.FormEvent<HTMLFormElement>, blob: Blob) => void;
} & React.HTMLAttributes<HTMLFormElement>;

const Wrapper = styled.form`
  width: 80%;
  margin: 80px auto;
  padding: 80px 40px;
  background-color: #b7daf3;

  & > *:not(:last-child) {
    margin-bottom: 30px;
  }

  ${media.lessThan("md")`
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
    padding: 30px 20px;
  `}
`;

const StyledSelect = styled.select`
  height: 60px;
  padding: 10px;
  border: none;
  outline: none;
  -webkit-appearance: none;

  ${media.lessThan("md")`
    height: 30px;
    padding: 0 10px;
  `}
`;

const StyledInput = styled.input`
  height: 60px;
  padding: 10px;
  border: none;
  outline: none;
  -webkit-appearance: none;

  ${media.lessThan("md")`
    height: 30px;
    padding: 0 10px;
  `}

  &:focus {
    border: solid 1px #fad46b;
    background-color: #fdf8f2;
  }
`;

const StyledTextArea = styled.textarea`
  resize: none;
  padding: 10px;
  border: none;
  outline: none;
  -webkit-appearance: none;

  ${media.lessThan("md")`
    height: 150px;
  `}

  &:focus {
    border: solid 1px #fad46b;
    background-color: #fdf8f2;
  }
`;

const StyledButton = styled.button`
  display: block;
  width: 85%;
  margin: 50px auto 0;
  padding: 10px 5px;
  border-right: 1px solid #e73820;
  border-bottom: 3px solid #e73820;
  border-radius: 5px;
  color: #fcfcfc;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #f84545;

  ${media.lessThan("md")`
    margin: 40px auto 0;
  `}
`;

const ContactForm = ({
  onBeforeSend,
  onSend,
  children,
  ...props
}: ContactFormProps) => {
  const [reason, setReason] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [name, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [message, setMessage] = React.useState("");

  const submitHandler = async (eve: React.FormEvent<HTMLFormElement>) => {
    eve.preventDefault();

    const blob = new Blob(
      [
        JSON.stringify(
          {
            reason,
            company,
            name,
            mail,
            tel,
            message,
          },
          null,
          4,
        ),
      ],
      { type: "text/plain" },
    );

    try {
      if (onBeforeSend && (await !onBeforeSend(blob))) {
        throw "canceled";
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(err);
      }

      return;
    }

    onSend(eve, blob);
  };

  return (
    <Wrapper onSubmit={submitHandler} {...props}>
      <FormBlock src="/assets/img/contact_icon_select.png" alt="reason">
        <FormBlock.Header required>お問い合わせ項目</FormBlock.Header>
        <FormBlock.Body>
          <StyledSelect
            name="reason"
            value={reason}
            onChange={eve => setReason(eve.currentTarget.value)}
            required
          >
            <option value="">選択してください</option>
            <option value="運営サイトに関するお問い合わせ">
              運営サイトに関するお問い合わせ
            </option>
            <option value="採用に関するお問い合わせ">
              採用に関するお問い合わせ
            </option>
            <option value="その他のお問い合わせ">その他のお問い合わせ</option>
          </StyledSelect>
        </FormBlock.Body>
      </FormBlock>
      <FormBlock src="/assets/img/contact_icon_company.png" alt="company">
        <FormBlock.Header>貴社名</FormBlock.Header>
        <FormBlock.Body>
          <StyledInput
            type="text"
            name="company"
            placeholder="エイミー株式会社"
            value={company}
            onChange={eve => setCompany(eve.currentTarget.value)}
          />
        </FormBlock.Body>
      </FormBlock>
      <FormBlock src="/assets/img/contact_icon_name.png" alt="name">
        <FormBlock.Header required>お名前</FormBlock.Header>
        <FormBlock.Body>
          <StyledInput
            type="text"
            name="name01"
            placeholder="エイミー 太郎"
            value={name}
            onChange={eve => setName(eve.currentTarget.value)}
            pattern=".+ .+"
            required
          />
        </FormBlock.Body>
      </FormBlock>
      <FormBlock src="/assets/img/contact_icon_mail.png" alt="mail">
        <FormBlock.Header required>メールアドレス</FormBlock.Header>
        <FormBlock.Body>
          <StyledInput
            type="email"
            name="mail"
            placeholder="example@eimee.co.jp"
            value={mail}
            onChange={eve => setMail(eve.currentTarget.value)}
            required
          />
        </FormBlock.Body>
      </FormBlock>
      <FormBlock src="/assets/img/contact_icon_phone.png" alt="phone">
        <FormBlock.Header required>電話番号</FormBlock.Header>
        <FormBlock.Body>
          <StyledInput
            type="tel"
            name="tel"
            placeholder="090-1234-5678"
            pattern="\d{2,4}-\d{3,4}-\d{3,4}"
            value={tel}
            onChange={eve => setTel(eve.currentTarget.value)}
            required
          />
        </FormBlock.Body>
      </FormBlock>
      <FormBlock src="/assets/img/contact_icon_content.png" alt="content">
        <FormBlock.Header required>内容</FormBlock.Header>
        <FormBlock.Body>
          <StyledTextArea
            name="message"
            cols={30}
            rows={10}
            value={message}
            onChange={eve => setMessage(eve.currentTarget.value)}
            required
          />
        </FormBlock.Body>
      </FormBlock>
      <StyledButton>送信内容を確認する</StyledButton>
    </Wrapper>
  );
};

export default ContactForm;
