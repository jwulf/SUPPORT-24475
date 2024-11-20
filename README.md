# Reproducer for SUPPORT-24475

## Instructions

* Check out repository.
* Install dependencies with `pnpm i`
* Set environment variables - for local self-managed on Docker, source `.env`
* Run a broker - SaaS or SM. For local SM on Docker, run `docker compose -f docker/docker-compose-multitenancy.yaml up`
* Run the reproducer, which starts a worker: `npm run start`

