# tescgsm

Public shop: **https://tescgsm.es**

Admin CRM is a separate project on **https://admin-tescgsm.es**.

## Local

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

For live MySQL products, also run `npm run dev` in `tescgsm-admin`. If that API is not running, the shop uses `public/products.json`.

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
