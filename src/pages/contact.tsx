import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import ContactForm from "@/components/Organism/ContactForm";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";
import * as AWS from "aws-sdk";

AWS.config.region = "ap-northeast-1";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "ap-northeast-1:b64d1e47-4acb-48ca-b45c-25d63255f524",
});

const onBeforeSend = () =>
  window.confirm("この内容で送信しても良いですか？") || false;

const onSubmit = async (eve: React.FormEvent<HTMLFormElement>, blob: Blob) => {
  if (process.env.NODE_ENV === "development") return;

  try {
    const s3 = new AWS.S3();

    await s3
      .putObject({
        Key: `uploads/${Date.now()}.txt`,
        Bucket: "eimee.co.jp",
        ContentType: "text/plain",
        Body: blob,
        ACL: "authenticated-read",
      })
      .promise();
  } catch (err) {
    alert(`Upload Failed: ${err.message}`);
  }
};

const IndexPage = () => (
  <>
    <Helmet title="お問い合わせ" />
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
