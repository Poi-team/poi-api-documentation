# Service Authentication

All requests need to be signed for the type of service using them (Internal Applications, Partner Applications, Internal Tools...).<br/> Different API Keys give different access rights, divided between **Private** and **Public** endpoints.<br/> 

### Public
Accessing a **Public** endpoint can be done from either the client or server side with your **API Public key**.<br/>

Public endpoints are marked with a <span class="public-endpoint-legend">Public</span> tag.

### Private
Accessing a **Private** endpoint **MUST** be done from the server and will need your **API Private key**. Never ever use your private key in the client.<br/>
It is to note that using your **API Private key** also gives access to all **Public** endpoints, but must never be used from the client.

Private endpoints are marked with a <span class="private-endpoint-legend">Private</span> tag.

<aside class="warning">
  The <b>Private key</b> should never be commited or made accessible online by any means. It is the developer's responsability to make sure it is securely stored on the server making the requests.
</aside>

### Signing the request

Signing is done via HTTP Basic Auth. This is done by adding the `Authorization` header to your request and appending your base64 encoded **Client ID** and **API key** (public or private) as the value, prefixed with `Basic`.

**Example:**

```shell
curl "/v1/..."
  -H "Authorization: Basic RWzhZGRpbjpbvHNpdTZornFRcmd="
```

| Client ID            | API Key              | Credentials to encode in base64      | Base64 encoded credentials   | Header value     |
|:----------------|--------------------------|----------------------------------|------------------------------|------------------|
| `poi-app` | `lv_SEHo5AQZRWRy63wx8S2E9A` | `poi-app:lv_SEHo5AQZRWRy63wx8S2E9A` | RWzhZGRpbjpbvHNpdTZornFRcmd= | Basic RWzhZGRpbjpbvHNpdTZornFRcmd= |

Thus, the sent headers would include: `Authorization: Basic RWzhZGRpbjpbvHNpdTZornFRcmd=`.


<aside class="warning">
  Any unsigned request will be reject with a <code>401 Unauthorized</code>
</aside>
