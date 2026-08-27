# tescgsm

Public shop: **https://tescgsm.es**

Admin CRM is a separate project on **https://admin-tescgsm.es**.

## Branches

- **staging** — work here. Run locally with `npm run dev` → http://localhost:5173
- **production** — live site on tescgsm.es. GitHub Pages deploys only from this branch.

To publish:

```bash
git checkout production
git merge staging
git push
```

## Local (staging)

```bash
git checkout staging
npm install
npm run dev
```

Open `http://localhost:5173`.

For live MySQL products, also run `npm run dev` in `tescgsm-admin` on the staging branch. If that API is not running, the shop uses `public/products.json`.

## Domain

Point `tescgsm.es` at this shop. Point `admin-tescgsm.es` at the admin project.

## MySQL Workbench

- Hostname: `127.0.0.1`
- Port: `3306`
- Username: `tescgsm`
- Password: `tescgsm`
- Default Schema: `tescgsm`

```bash
npm run db:export
```
