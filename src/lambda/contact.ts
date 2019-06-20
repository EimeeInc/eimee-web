import { APIGatewayProxyHandler } from "aws-lambda";
import axios from "axios";
import maybe from "eimee-util/maybe";
import heredoc from "eimee-util/heredoc";

const handler: APIGatewayProxyHandler = (eve, ctx, callback) => {
  const isDev = process.env.NODE_ENV === "development";
  const corsHeader = {
    "access-control-allow-method": "POST, OPTIONS",
    "access-control-allow-origin": isDev
      ? "http://localhost:8000"
      : "https://eimee.co.jp",
    "access-control-allow-headers": "content-type, x-requested-with",
  };

  switch (eve.httpMethod) {
    case "POST":
      break;
    case "OPTIONS":
      return callback(null, {
        statusCode: 204,
        headers: {
          ...corsHeader,
          "content-type": "application/json",
        },
        body: JSON.stringify({}),
      });
    default:
      return callback(null, {
        statusCode: 405,
        headers: {
          ...corsHeader,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          error: "Method Not Allowed",
        }),
      });
  }

  if (!eve.headers["x-requested-with"])
    return callback(null, {
      statusCode: 400,
      headers: {
        ...corsHeader,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        error: "x-requested-with header is required.",
      }),
    });

  const json = maybe(() => JSON.parse(eve.body || ""), {});

  if (json[0]) return;

  const body = JSON.stringify(json[1], null, "  ");
  const url = process.env.SLACK_CONTACT_WEBHOOK_URL;

  if (!url)
    return callback(null, {
      statusCode: 500,
      headers: {
        ...corsHeader,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        error: "Internal Server Error",
      }),
    });

  axios
    .post(
      url,
      {
        text: heredoc`
      環境: ${process.env.NODE_ENV}
      内容:
      ${body}
    `,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      },
    )
    .then(() =>
      callback(null, {
        statusCode: 200,
        headers: {
          ...corsHeader,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          error: false,
          payload: "ok",
        }),
      }),
    );
};

exports.handler = handler;
