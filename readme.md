# arc-example-spa

Demonstrates proxying `/public` thru `src/http/get-index` while reading/writeing to/from a REST API.

Try it out locally:

```bash
npm i
npx hydrate
npx sandbox
```

The *passcode* is `secret`.

> To see 404 behavior change `src/http/get-index/index.js`: `{spa:false}`

---

### Deploying

If you're deploying this example you'll also need to setup DNS for the generated API Gateway (or refactor the frontend code paths to be prefixed with `/staging` and `/production` appropriately with your build system).
