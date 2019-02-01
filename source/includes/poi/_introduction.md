# Poi API

The Poi API is architectured in a REST fashion. It returns JSON-encoded responses, and uses standard HTTP response codes.

You can use the API in **sandbox mode**, which does not affect the live data. 
To make requests to our API you will need an **API Key** (composed of a public and private key). The API Key you use to authenticate the requests determines whether the request is live mode or sandbox mode.
Sandbox API Keys are prefixed with `sb_am_` while live API keys are prefixed with `lv_am_`.

If you are a partner application looking to integrate the Poi Network in your application, please refer to [this guide]() and take a look at the [Auth API]() & [Event API](). 

The base URL for calls is `https://api.poi.network/v1`.

<aside class="warning">
  Your <b>private key</b> must NEVER touch the client side and should be used <b>only on the server</b>.<br />
  It is your responsability to make sure that your <b>private key</b> is <b>stored securely</b>.
</aside>