import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import ContactForm, { FormData } from "@/components/Organism/ContactForm";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";
import axios from "axios";

const onBeforeSend = () =>
  window.confirm("この内容で送信しても良いですか？") || false;

const onSubmit = async (
  eve: React.FormEvent<HTMLFormElement>,
  data: FormData,
) => {
  const isDev = process.env.NODE_ENV === "development";
  const origin = isDev ? "http://localhost:9000" : "https://eimee.co.jp";

  const result = await axios.post(
    `${origin}/.netlify/functions/contact/`,
    data,
    {
      responseType: "json",
      headers: {
        "content-type": "application/json",
        "x-requested-with": "XMLHttpRequest",
      },
    },
  );

  window.alert("お問い合わせありがとうございました。");
  location.reload();

  console.log(result);
};

const IndexPage = () => (
  <>
    <Helmet
      title="お問い合わせ"
      canonical="/contact/"
      link={[
        { rel: "preload", href: "/assets/img/ph_top_contact.jpg", as: "image" },
      ]}
    />
    <CommonHeaderBlock
      title="Contact"
      ruby="お問い合わせ"
      color="#76c0f1"
      src="/assets/img/ph_top_contact.jpg"
    />
    <Breadcrumbs name="contact" />
    <PageContentsWrapper>
      <ContactForm onBeforeSend={onBeforeSend} onSend={onSubmit} />
    </PageContentsWrapper>
  </>
);

export default IndexPage;
