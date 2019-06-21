import * as React from "react";
import Helmet from "@/components/Helmet";

const NotFoundPage = () => (
  <>
    <Helmet
      title="404: Not found"
      meta={[{ name: "robots", content: "noindex,nofollow" }]}
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
);

export default NotFoundPage;
