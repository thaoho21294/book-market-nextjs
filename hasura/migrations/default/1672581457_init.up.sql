SET standard_conforming_strings = off;
SET check_function_bodies = false;
SET escape_string_warning = off;

CREATE TABLE public.genres (
    id varchar PRIMARY KEY,
    name text NOT NULL,
    slug varchar NOT NULL
);

CREATE TABLE public.books (
    id integer PRIMARY KEY,
    title text NOT NULL,
    author text,
    status text,
    description text,
    price integer NOT NULL,
    original_price integer,
    pictures jsonb DEFAULT NULL,
    is_sold boolean DEFAULT false NOT NULL,
    genre_id varchar NOT NULL,
    user_id varchar NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE public.districts (
    id varchar PRIMARY KEY,
    name text NOT NULL,
    slug varchar NOT NULL,
    province_id varchar NOT NULL
);

CREATE TABLE public.provinces (
    id varchar PRIMARY KEY,
    slug varchar NOT NULL,
    name text NOT NULL
);

CREATE TABLE public.users (
    id varchar PRIMARY KEY,
    name text,
    password varchar,
    nickname text,
    email varchar NOT NULL,
    email_verified boolean DEFAULT false,
    picture varchar,
    description text,
    district_id varchar,
    province_id varchar,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    last_seen timestamp with time zone DEFAULT now(),
    CONSTRAINT email_unique UNIQUE (email),
    CONSTRAINT id_unique UNIQUE (id)
);

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    RESTART WITH 1;
ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;
ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_genre_id_fkey FOREIGN KEY (genre_id) REFERENCES public.genres(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_district_id_fkey FOREIGN KEY (district_id) REFERENCES public.districts(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_province_id_fkey FOREIGN KEY (province_id) REFERENCES public.provinces(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.districts
    ADD CONSTRAINT distrist_province_id_fkey FOREIGN KEY (province_id) REFERENCES public.provinces(id) ON UPDATE CASCADE ON DELETE CASCADE;
