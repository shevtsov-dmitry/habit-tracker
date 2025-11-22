--  auto recreate tables during development
drop table if exists session cascade;
drop table if exists "user" cascade;

-- schema init start
create table "user"
(
    id    serial unique,
    name  varchar(255),
    email varchar(255)
);

create table session
(
    id            serial unique,
    session_start timestamptz,
    session_end   timestamptz,
    user_id       integer references "user" (id)
);
