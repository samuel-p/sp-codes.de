# sp-codes.de

[![Build Status](https://ci.sp-codes.de/api/badges/samuel-p/sp-codes.de/status.svg)](https://ci.sp-codes.de/samuel-p/sp-codes.de)

Website for sp-codes.de

[GitHub](https://github.com/samuel-p/sp-codes.de)
[GitLab](https://gitlab.com/samuel-p/sp-codes.de)

## Additional Header Parameters

The following Parameters are set directly on the Web-Server.

```
Content-Security-Policy: default-src 'none'; img-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'none'
Referrer-Policy: same-origin
Feature-Policy: sync-xhr 'self'
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

There is also a `301` Redirect from http to https.