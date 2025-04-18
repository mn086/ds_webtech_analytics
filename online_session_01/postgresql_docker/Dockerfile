FROM postgres:15

# Copy initialization scripts
COPY init.sql /docker-entrypoint-initdb.d/

# Expose PostgreSQL port
EXPOSE 5432

# Command to run when container starts
CMD ["postgres", "-c", "listen_addresses=*"]