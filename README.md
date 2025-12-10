# HumminBird NodeJs Project - SRM e2e - PR

## code quality issues that CodeQL will detect:

- [x] SQL Injection - Direct string concatenation in SQL queries
- [x] Command Injection - Unsanitized user input in shell commands
- [x] Path Traversal - Unvalidated file paths
- [x] Cross-Site Scripting (XSS) - Unescaped user input in HTML
- [x] Hard-coded credentials - Passwords and API keys in source code
- [x] Insecure randomness - Using Math.random() for security tokens
- [x] ReDoS - Regular expression vulnerable to denial of service
- [x] Code injection - Using eval() with user input
- [x] Information exposure - Exposing stack traces
- [x] Weak cryptography - Using deprecated DES algorithm
- [x] Open redirect - Unvalidated URL redirects

## Vulnerabilities Introduced - 

24 vulnerabilities (3 low, 7 moderate, 6 high, 8 critical)


### @fastify/reply-from  <=12.4.0
Severity: moderate
fastify-reply-from affected by bypass of reply forwarding - https://github.com/advisories/GHSA-2q7r-29rg-6m5h
fix available via `npm audit fix`
node_modules/@fastify/reply-from

### @strapi/plugin-email  <=4.11.6
Severity: critical
Depends on vulnerable versions of @strapi/provider-email-sendmail
Depends on vulnerable versions of @strapi/utils
Strapi plugins vulnerable to Server-Side Template Injection and Remote Code Execution in the Users-Permissions Plugin - https://github.com/advisories/GHSA-2h87-4q2w-v4hf
fix available via `npm audit fix`
node_modules/@strapi/plugin-email

### @strapi/utils  <=4.11.6
Severity: high
Leaking sensitive user information still possible by filtering on private with prefix fields - https://github.com/advisories/GHSA-9xg4-3qfm-9w8f
Making all attributes on a content-type public without noticing it - https://github.com/advisories/GHSA-chmr-rg2f-9jmf
Strapi may leak sensitive user information, user reset password, tokens via content-manager views - https://github.com/advisories/GHSA-v8gg-4mq2-88q4
fix available via `npm audit fix`
node_modules/@strapi/utils
  @strapi/provider-email-sendmail  <=4.11.6
  Depends on vulnerable versions of @strapi/utils
  node_modules/@strapi/provider-email-sendmail

### astro  <=5.15.8
Severity: moderate
Astro Cloudflare adapter has Stored Cross-site Scripting vulnerability in /_image endpoint - https://github.com/advisories/GHSA-fvmw-cj7j-j39q
Astro's middleware authentication checks based on url.pathname can be bypassed via url encoded values - https://github.com/advisories/GHSA-ggxq-hp9w-j794
Astro has an Authentication Bypass via Double URL Encoding, a bypass for CVE-2025-64765 - https://github.com/advisories/GHSA-whqg-ppgf-wp8c
fix available via `npm audit fix`
node_modules/astro

### axios  1.0.0 - 1.11.0
Severity: high
Server-Side Request Forgery in axios - https://github.com/advisories/GHSA-8hc4-vh64-cxmj
Axios is vulnerable to DoS attack through lack of data size check - https://github.com/advisories/GHSA-4hjh-wcwx-xvwj
axios Requests Vulnerable To Possible SSRF and Credential Leakage via Absolute URL - https://github.com/advisories/GHSA-jr5f-v2jv-69x6
fix available via `npm audit fix`
node_modules/axios

clean-css  <4.1.11
Regular Expression Denial of Service in clean-css - https://github.com/advisories/GHSA-wxhq-pm8v-cw75
fix available via `npm audit fix`
node_modules/clean-css
  web-resource-inliner  <=4.3.4
  Depends on vulnerable versions of clean-css
  Depends on vulnerable versions of lodash
  Depends on vulnerable versions of request
  node_modules/web-resource-inliner
    juice  1.0.0 - 6.0.0 || 8.1.0 || 10.0.1
    Depends on vulnerable versions of cheerio
    Depends on vulnerable versions of deep-extend
    Depends on vulnerable versions of web-resource-inliner
    node_modules/juice
      mailgen  <=2.0.31
      Depends on vulnerable versions of ejs
      Depends on vulnerable versions of juice
      node_modules/mailgen

### deep-extend  <0.5.1
Severity: critical
Prototype Pollution in deep-extend - https://github.com/advisories/GHSA-hr2v-3952-633q
fix available via `npm audit fix`
node_modules/deep-extend

### ejs  <=3.1.9
Severity: critical
ejs template injection vulnerability - https://github.com/advisories/GHSA-phwq-j96m-2c2q
ejs lacks certain pollution protection - https://github.com/advisories/GHSA-ghr5-ch3p-vcr6
fix available via `npm audit fix`
node_modules/ejs

### form-data  <2.5.4
Severity: critical
form-data uses unsafe random function in form-data for choosing boundary - https://github.com/advisories/GHSA-fjxv-7rqg-78g4
fix available via `npm audit fix`
node_modules/request/node_modules/form-data
  request  *
  Depends on vulnerable versions of form-data
  Depends on vulnerable versions of tough-cookie
  node_modules/request
    jsdom  0.1.20 || 0.2.0 - 16.5.3
    Depends on vulnerable versions of request
    Depends on vulnerable versions of tough-cookie
    node_modules/jsdom
      cheerio  0.19.0 - 1.0.0-rc.12
      Depends on vulnerable versions of css-select
      Depends on vulnerable versions of jsdom
      node_modules/cheerio

### lodash  <=4.17.20
Severity: critical
Prototype Pollution in lodash - https://github.com/advisories/GHSA-fvqr-27wr-82fm
Command Injection in lodash - https://github.com/advisories/GHSA-35jh-r3h4-6jhm
Prototype Pollution in lodash - https://github.com/advisories/GHSA-4xc9-xhrj-v574
Prototype Pollution in lodash - https://github.com/advisories/GHSA-jf85-cpcp-j695
Prototype Pollution in lodash - https://github.com/advisories/GHSA-p6mc-m468-83gw
fix available via `npm audit fix`
node_modules/web-resource-inliner/node_modules/lodash


### marked  <=4.0.9
Severity: high
Marked ReDoS due to email addresses being evaluated in quadratic time - https://github.com/advisories/GHSA-xf5p-87ch-gxw2
Inefficient Regular Expression Complexity in marked - https://github.com/advisories/GHSA-rrrm-qjm4-v8hf
Inefficient Regular Expression Complexity in marked - https://github.com/advisories/GHSA-5v2h-r2cx-5xgj
fix available via `npm audit fix`
node_modules/marked

### nodemailer  <=7.0.10
Severity: moderate
Nodemailer: Email to an unintended domain can occur due to Interpretation Conflict - https://github.com/advisories/GHSA-mm7p-fcc7-pg87
Nodemailer’s addressparser is vulnerable to DoS caused by recursive calls - https://github.com/advisories/GHSA-rcmh-qjqh-p98v
fix available via `npm audit fix`
node_modules/nodemailer

### nth-check  <2.0.1
Severity: high
Inefficient Regular Expression Complexity in nth-check - https://github.com/advisories/GHSA-rp65-9cf3-cjxr
fix available via `npm audit fix`
node_modules/nth-check
  css-select  <=3.1.0
  Depends on vulnerable versions of nth-check
  node_modules/css-select


sassdoc-extras  *
sassdoc-extras vulnerable to prototype pollution - https://github.com/advisories/GHSA-3mpm-jx38-9m8w
No fix available
node_modules/sassdoc-extras

toggle-array  *
toggle-array vulnerable to prototype pollution - https://github.com/advisories/GHSA-34q3-8x9v-j957
No fix available
node_modules/toggle-array

### tough-cookie  <4.1.3
Severity: moderate
tough-cookie Prototype Pollution vulnerability - https://github.com/advisories/GHSA-72xf-g2v4-qvf3
fix available via `npm audit fix`
node_modules/tough-cookie


