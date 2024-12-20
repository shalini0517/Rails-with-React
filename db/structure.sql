CREATE TABLE IF NOT EXISTS "schema_migrations" ("version" varchar NOT NULL PRIMARY KEY);
CREATE TABLE IF NOT EXISTS "ar_internal_metadata" ("key" varchar NOT NULL PRIMARY KEY, "value" varchar, "created_at" datetime(6) NOT NULL, "updated_at" datetime(6) NOT NULL);
CREATE TABLE IF NOT EXISTS "lists" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar, "body" text, "created_at" datetime(6) NOT NULL, "updated_at" datetime(6) NOT NULL);
CREATE TABLE sqlite_sequence(name,seq);
INSERT INTO "schema_migrations" (version) VALUES
('20241218060012');

