# PostgreSQL Docker Container Setup

This guide provides instructions for setting up a PostgreSQL database in a Docker container with a test user, database, and table that allows external connections.

## Configuration Details

- **Test User**: `testuser`
- **Test User Password**: `testpassword`
- **Test Database**: `testdb`
- **Test Table**: `test_table`
- **Default Port**: `5432`

## Prerequisites

- Docker installed on your system
- Docker Compose installed on your system

## Setup Instructions

1. Create the following files in the same directory:
   - `Dockerfile`
   - `init.sql`
   - `docker-compose.yml`

2. Build and start the container:
   ```bash
   docker-compose up -d
   ```

3. Verify the container is running:
   ```bash
   docker ps
   ```

## Connecting to the Database

### From Command Line

```bash
# Connect as test user
psql -h localhost -p 5432 -U testuser -d testdb
# Password: testpassword
```

### From External Applications

Connect using the following parameters:
- **Host**: Your server's IP address or hostname
- **Port**: 5432
- **Database**: testdb
- **Username**: testuser
- **Password**: testpassword

## Security Considerations

**Warning**: This configuration allows connections from any IP address to the PostgreSQL instance. This is intended for testing purposes only and should not be used in production without proper security measures.

For a production environment, you should:
1. Use strong passwords
2. Restrict network access using firewalls
3. Configure pg_hba.conf to limit connection sources
4. Consider using SSL for database connections

## Stopping the Container

```bash
docker-compose down
```

To completely remove the container and data volume:
```bash
docker-compose down -v
```