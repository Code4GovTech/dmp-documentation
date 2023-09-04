---
sidebar_position: 3
title: Setup
---

### Folder Structure

```bash
├── apps/
│   ├── admin/ # Admin UI React App
│   ├── agent/ # Fulfillment Agent Application (React Native)
│   └── server/ # BPP Backend Server
│   └── webhook/ # BPP Webhook
├── packages/
│   ├── bpp-sdk/ # BPP SDK Library
│   └── shared-utils/ # Shared Utility Library
└── package.json
```

### 1. Fork it :fork_and_knife:


### 2. Clone it :busts_in_silhouette:
```
git clone https://github.com/Sarfraz-droid/BPP-Boilerplate-SDK.git
```

### 3. Set it up :arrow_up:
- First, run `yarn` or `npm install` on root to install all dependencies
- Go over to `packages/bpp-sdk` and run `npm run build`


### 4. Run it :checkered_flag:
- To run the admin app, go over to `apps/admin` and run `yarn dev`
- To run the server app, go over to `apps/server` and run `yarn dev`
- To run the agent app, go over to `apps/agent` and run `yarn start`


<!-- ### 5. For testing purpose 💥  -->
