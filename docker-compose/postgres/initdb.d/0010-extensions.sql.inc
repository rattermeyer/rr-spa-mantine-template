
create schema if not exists extensions;

-- make sure everybody can use everything in the extensions schema
grant usage on schema extensions to public;
grant execute on all functions in schema extensions to public;

-- include future extensions
alter default privileges in schema extensions
    grant execute on functions to public;

alter default privileges in schema extensions
    grant usage on types to public;

CREATE EXTENSION IF NOT EXISTS pg_uuidv7 WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA extensions; -- used for query statistics
CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA extensions; -- used for fuzzy search
CREATE EXTENSION IF NOT EXISTS tablefunc WITH SCHEMA extensions; -- used for crosstab

CREATE SCHEMA IF NOT EXISTS faker;
ALTER DEFAULT privileges in schema faker grant execute on functions to public;
CREATE EXTENSION IF NOT EXISTS faker SCHEMA faker CASCADE;
