# Poi Internal API

The **Poi Internal API** is architectured in a REST fashion. It returns JSON-encoded responses, and uses standard HTTP response codes.

**It can and should ONLY be used by the official Poi Application, our Observer and special partners.**

You can use the API in **sandbox mode**, which does not affect the live data. The API key you use to authenticate the requests determines whether the request is live mode or sandbox mode.<br />
Sandbox API Keys are prefixed with `sb_fm` while live API keys are prefixed with `lv_fm`.

The base URL for calls is `https://api.poi.network/api/v1`.

<aside class="warning">
This API can't be used with the usual API Key provided to our partner applications.
</aside>