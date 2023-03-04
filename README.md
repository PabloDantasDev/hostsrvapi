
# deploy-node-in-vercel

Host a Node.js server in vercel using the `vercel.json`.

## Create a basic `vercel.json`

```json
{
    "name": "deploy-node-in-vercel",
    "version": 2,
    "public": true,
    "build": {
        "src": "api/index.js",
        "use": "@vercel/node"
    },
    "routes": [
        {
            "src": "/(.*)",
            "dest": "api/index.js"
        }
    ]
}
```

## Install vercel CLI globally

```bash
sudo npm install vercel -g
```

## Made login in vercel

```bash
 vercel login
```

## Deploy the server

```bash
 vercel deploy
```
