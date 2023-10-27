### Node Express Backend
# Framework Ranker

Node-Express with TS server to support a framework ranking app where subdomains submit votes to a centralized backend.

## Server

## Database

### Tables
- Votes: will contain most of the data needed for the app
    - cols: id, user_id, framework, created_at, ...
- Users: will be used to fingerprint users more a low friction auth to prevent abuse
    - cols: id, browser fingerprint
- Frameworks: vote totals, updated via trigger on vote create/delete
    - cols: name, votes



## Subdomains (planned)
- react.frameworkranker.com
- svelte.frameworkranker.com
- solid.frameworkranker.com
- etc...