# eimee-web

[![Netlify Status](https://api.netlify.com/api/v1/badges/324f22d0-c93b-4eef-9003-ace12555b3cb/deploy-status)](https://app.netlify.com/sites/agitated-babbage-9aebb5/deploys)

エイミー株式会社公式HPです。

# インストール

1. `git clone git@github.com:EimeeInc/eimee-web.git`
    - (各自SSHの設定は済ませておいてください)
1. `npm install`
1. `npm run dev`

# 環境変数

開発環境では `.env` をルートディレクトリに配置することで、環境変数を設定することが出来ます

## SLACK_CONTACT_WEBHOOK_URL

- contactフォーム送信先のSlackチャンネルに向けたwebhookのurlを指定します

## GATSBY_GOOGLE_ANALYTICS_UA

- Google Analyticsで指定するUAです
- 例) UA-xxxxxxxx-x
