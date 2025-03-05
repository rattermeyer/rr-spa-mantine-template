--liquibase formatted sql
--changeset rat:0100-authnz-1
CREATE TABLE account
(
    uuid           uuid PRIMARY KEY NOT NULL DEFAULT extensions.uuid_generate_v7(),
    email          VARCHAR(254)     NOT NULL,
    name           VARCHAR(100)     NOT NULL,
    password_hash  VARCHAR(128)     NOT NULL,
    email_verified BOOLEAN          NOT NULL DEFAULT FALSE,
    preferences    jsonb            NOT NULL DEFAULT '{}',
    CONSTRAINT uq_benutzer_email UNIQUE (email)
);

--changeset rat:0100-authnz-2
CREATE TABLE role
(
    uuid uuid PRIMARY KEY NOT NULL DEFAULT extensions.uuid_generate_v7(),
    name VARCHAR(40)      NOT NULL,
    CONSTRAINT uq_rolle_name UNIQUE (name)
);

--changeset rat:0100-authnz-3
CREATE TABLE account_role
(
    account_uuid uuid NOT NULL,
    role_uuid    uuid NOT NULL,
    CONSTRAINT pk_benutzer_rolle PRIMARY KEY (account_uuid, role_uuid),
    CONSTRAINT fk_benutzer_rolle_benutzer FOREIGN KEY (account_uuid) REFERENCES account (uuid),
    CONSTRAINT fk_benutzer_rolle_rolle FOREIGN KEY (role_uuid) REFERENCES role (uuid)
);

--changeset rat:0100-authnz-4 runOnChange: true
INSERT INTO role (uuid, name)
VALUES ('01920bef-9e70-7489-9ced-61c6bc9f1f27', 'ADMIN'),
       ('01922564-cb31-7a45-ab08-40560aedd97b', 'USER')
       ON CONFLICT DO NOTHING;
