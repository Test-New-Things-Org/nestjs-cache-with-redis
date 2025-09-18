# NestJS + Redis Caching

A minimal example of **NestJs** caching using `@nestjs/cache-manager` with **Redis** as the store (via `@keyv/redis`). Works with multiple instances and supports route-level and programmatic caching.

---

## Prerequisites

- Node.js
- Redis (local or hosted)
  - Local quick start:
    ```bash
    docker run -p 6379:6379 --name redis -d redis
    ```

## Install

```bash
# Required packages
pnpm i
```

## Start

```bash
pnpm start:dev
```
