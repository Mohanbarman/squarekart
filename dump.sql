--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Debian 13.3-1.pgdg100+1)
-- Dumped by pg_dump version 13.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: test
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "pricePerItem" integer NOT NULL,
    currency character varying DEFAULT 'INR'::character varying NOT NULL,
    qty integer DEFAULT 1 NOT NULL,
    "fullName" character varying NOT NULL,
    mobile character varying NOT NULL,
    "shippingAddress" character varying NOT NULL,
    city character varying NOT NULL,
    state character varying NOT NULL,
    "userId" integer NOT NULL,
    "productId" integer NOT NULL
);


ALTER TABLE public.orders OWNER TO test;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: test
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO test;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: test
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: test
--

CREATE TABLE public.products (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    title character varying NOT NULL,
    description character varying,
    "photoUrl" character varying,
    price integer NOT NULL,
    currency character varying DEFAULT 'INR'::character varying NOT NULL
);


ALTER TABLE public.products OWNER TO test;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: test
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO test;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: test
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: session; Type: TABLE; Schema: public; Owner: test
--

CREATE TABLE public.session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.session OWNER TO test;

--
-- Name: users; Type: TABLE; Schema: public; Owner: test
--

CREATE TABLE public.users (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "firstName" character varying NOT NULL,
    "lastName" character varying,
    password character varying NOT NULL,
    email character varying NOT NULL
);


ALTER TABLE public.users OWNER TO test;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: test
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO test;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: test
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: test
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: test
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: test
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: test
--

COPY public.orders (id, "createdAt", "updatedAt", "pricePerItem", currency, qty, "fullName", mobile, "shippingAddress", city, state, "userId", "productId") FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: test
--

COPY public.products (id, "createdAt", "updatedAt", title, description, "photoUrl", price, currency) FROM stdin;
1	2021-08-08 21:08:57.554085	2021-08-08 21:08:57.554085	OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)	64MP+8MP+2MP triple rear camera with 1080p video at 30/60 fps, 4k 30 fps | 16MP front camera with 1080p video at 30/60 fps.\\n6.43-inch, 90Hz fluid AMOLED display with 2400 x 1080 pixels resolution | 410ppi Memory, Storage & SIM: 8GB RAM | 128GB internal memory on UFS 2.1 storage system.\\nDual SIM (nano + nano) | OnePlus Nord CE currently supports dual 4G SIM Cards or a single 5G SIM + 4G SIM.\\nChipset: Qualcomm Snapdragon 750G 5G mobile platform with an octa-core processor, Kryo 570 CPU (20% improvement from predecessor), and an Adreno 619 GPU (10% improved graphics performance from predecessor).\\nAlexa Hands-Free capable: Download the Alexa app to use Alexa hands-free. Play music, make calls, hear news, open apps, navigate and more, all using just your voice, while on-the-go.	https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SX679_.jpg	24999	INR
2	2021-08-08 21:08:57.554085	2021-08-08 21:08:57.554085	2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8-core CPU and 8-core GPU, 8GB RAM, 512GB SSD) - Space Grey	Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance\\nGet more done with up to 20 hours of battery life, the longest ever in a Mac\\n8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever\\n8-core GPU with up to 5x faster graphics for graphics-intensive apps and games\\n16-core Neural Engine for advanced machine learning\\n8GB of unified memory so everything you do is fast and fluid\\nSuperfast SSD storage launches apps and opens files in an instant	https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._SX679_.jpg	127990	INR
3	2021-08-08 21:08:57.554085	2021-08-08 21:08:57.554085	New Apple iPhone 12 (128GB) - Blue	6.1-inch (15.5 cm diagonal) Super Retina XDR display\\nCeramic Shield, tougher than any smartphone glass\\nA14 Bionic chip, the fastest chip ever in a smartphone\\nAdvanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording\\n12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording\\nIndustry-leading IP68 water resistance\\nSupports MagSafe accessories for easy attach and faster wireless charging\\niOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more	https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._SX679_.jpg	72999	INR
4	2021-08-08 21:08:57.554085	2021-08-08 21:08:57.554085	MSI Prestige 14 A10RB-038IN Intel Core i7-10510U 10th Gen 14-inch Laptop(16GB/512GB NVMe SSD/Windows 10 Home/MX250, 2GB Graphics/Grey/1.29Kg )9S7-14C212-038	Intel Core i7-10510U 10th Gen processor, upto 4.9 GHz\\nPre-loaded Windows 10, Home, 64Bit operating system with lifetime validity\\n14" FHD (1920*1080), IPS-Level Thin Bezel, close to 100%sRGB\\nMemory: 16GB DDR4 RAM, 2666Mhz with Nvidia GeForce MX250, 2GB Graphics | Storage: 512GB NVMe M.2 SSD\\nUltra Light Design creator laptop with Backlight Keyboard (Single Color - white)\\nThis genuine MSI Creator laptop comes with 1 years Carry-in warranty from MSI covering manufacturing defects and not covering physical damage. For more details, see Warranty section\\nPre-installed - MSI BurnRecovery MSI Battery Calibration MSI Help Desk Norton Internet Security (trail 60days) Norton Studio (Metro) (permanent free) Nvidia GeForce Experience Microsoft Office 2016 (trial 30 days, 1 year per purchase) True Color 2.0 Nahimic 3 Creator Center	https://images-na.ssl-images-amazon.com/images/I/81vpqHE2ydL._SX679_.jpg	96910	INR
5	2021-08-08 21:08:57.554085	2021-08-08 21:08:57.554085	HP Pavilion Gaming 15.6-inch(39.62 cms) FHD Gaming Laptop (Ryzen 5-4600H/8GB/1TB HDD/M.2 Slot/Windows 10/NVIDIA GTX 1650 4GB/Shadow Black), 15-ec1024AX	Intel Core i7-10510U 10th Gen processor, upto 4.9 GHz\\nPre-loaded Windows 10, Home, 64Bit operating system with lifetime validity\\n14" FHD (1920*1080), IPS-Level Thin Bezel, close to 100%sRGB\\nMemory: 16GB DDR4 RAM, 2666Mhz with Nvidia GeForce MX250, 2GB Graphics | Storage: 512GB NVMe M.2 SSD\\nUltra Light Design creator laptop with Backlight Keyboard (Single Color - white)\\nThis genuine MSI Creator laptop comes with 1 years Carry-in warranty from MSI covering manufacturing defects and not covering physical damage. For more details, see Warranty section\\nPre-installed - MSI BurnRecovery MSI Battery Calibration MSI Help Desk Norton Internet Security (trail 60days) Norton Studio (Metro) (permanent free) Nvidia GeForce Experience Microsoft Office 2016 (trial 30 days, 1 year per purchase) True Color 2.0 Nahimic 3 Creator Center	https://images-na.ssl-images-amazon.com/images/I/71FeUtw%2BTPL._SX679_.jpg	56990	INR
6	2021-08-08 21:08:57.554085	2021-08-08 21:08:57.554085	ASUS TUF Gaming F15 Laptop 15.6" (39.62 cms) FHD 144Hz, Intel Core i5-10300H 10th Gen, GeForce GTX 1650 4GB GDDR6 Graphics (8GB RAM/512GB NVMe SSD/Windows 10/Fortress Gray/2.30 Kg), FX566LH-HN257T	Intel Core i7-10510U 10th Gen processor, upto 4.9 GHz\\nPre-loaded Windows 10, Home, 64Bit operating system with lifetime validity\\n14" FHD (1920*1080), IPS-Level Thin Bezel, close to 100%sRGB\\nMemory: 16GB DDR4 RAM, 2666Mhz with Nvidia GeForce MX250, 2GB Graphics | Storage: 512GB NVMe M.2 SSD\\nUltra Light Design creator laptop with Backlight Keyboard (Single Color - white)\\nThis genuine MSI Creator laptop comes with 1 years Carry-in warranty from MSI covering manufacturing defects and not covering physical damage. For more details, see Warranty section\\nPre-installed - MSI BurnRecovery MSI Battery Calibration MSI Help Desk Norton Internet Security (trail 60days) Norton Studio (Metro) (permanent free) Nvidia GeForce Experience Microsoft Office 2016 (trial 30 days, 1 year per purchase) True Color 2.0 Nahimic 3 Creator Center	https://images-na.ssl-images-amazon.com/images/I/914o5xV1%2B8L._SL1500_.jpg	61990	INR
7	2021-08-08 21:08:57.554085	2021-08-08 21:08:57.554085	Lenovo IdeaPad Gaming 3 10th Gen Intel Core i5-10300H 15.6" (39.63cm) FHD IPS Gaming Laptop (8GB/1TB+256GB SSD/Windows 10/NVIDIA GTX 1650 4GB/M100 Mouse/Onyx Black/2.2Kg), 81Y400V9IN	Intel Core i7-10510U 10th Gen processor, upto 4.9 GHz\\nPre-loaded Windows 10, Home, 64Bit operating system with lifetime validity\\n14" FHD (1920*1080), IPS-Level Thin Bezel, close to 100%sRGB\\nMemory: 16GB DDR4 RAM, 2666Mhz with Nvidia GeForce MX250, 2GB Graphics | Storage: 512GB NVMe M.2 SSD\\nUltra Light Design creator laptop with Backlight Keyboard (Single Color - white)\\nThis genuine MSI Creator laptop comes with 1 years Carry-in warranty from MSI covering manufacturing defects and not covering physical damage. For more details, see Warranty section\\nPre-installed - MSI BurnRecovery MSI Battery Calibration MSI Help Desk Norton Internet Security (trail 60days) Norton Studio (Metro) (permanent free) Nvidia GeForce Experience Microsoft Office 2016 (trial 30 days, 1 year per purchase) True Color 2.0 Nahimic 3 Creator Center	https://images-na.ssl-images-amazon.com/images/I/61fpo-87DyL._SX679_.jpg	57990	INR
8	2021-08-08 21:08:57.554085	2021-08-08 21:08:57.554085	ASUS ROG Strix G17 (2021), 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7 5800H, GeForce RTX 3050 4GB Graphics, Gaming Laptop (8GB/1TB SSD/Windows 10/Original Black/2.4 Kg), G713QC-HX052T	Intel Core i7-10510U 10th Gen processor, upto 4.9 GHz\\nPre-loaded Windows 10, Home, 64Bit operating system with lifetime validity\\n14" FHD (1920*1080), IPS-Level Thin Bezel, close to 100%sRGB\\nMemory: 16GB DDR4 RAM, 2666Mhz with Nvidia GeForce MX250, 2GB Graphics | Storage: 512GB NVMe M.2 SSD\\nUltra Light Design creator laptop with Backlight Keyboard (Single Color - white)\\nThis genuine MSI Creator laptop comes with 1 years Carry-in warranty from MSI covering manufacturing defects and not covering physical damage. For more details, see Warranty section\\nPre-installed - MSI BurnRecovery MSI Battery Calibration MSI Help Desk Norton Internet Security (trail 60days) Norton Studio (Metro) (permanent free) Nvidia GeForce Experience Microsoft Office 2016 (trial 30 days, 1 year per purchase) True Color 2.0 Nahimic 3 Creator Center	https://images-na.ssl-images-amazon.com/images/I/71fkB1F3cVL._SL1500_.jpg	97990	INR
9	2021-08-08 21:08:57.554085	2021-08-08 21:08:57.554085	ASUS TUF Dash F15 (2021) 15.6" (39.62 cm) FHD 240Hz/3ms, Intel Core i7-11370H, GeForce RTX 3060 6GB Graphics, Gaming Laptop (16GB RAM/1TB SSD/Office 2019/Windows 10 Home/Gray/2 Kg) FX516PM-AZ153TS	Intel Core i7-10510U 10th Gen processor, upto 4.9 GHz\\nPre-loaded Windows 10, Home, 64Bit operating system with lifetime validity\\n14" FHD (1920*1080), IPS-Level Thin Bezel, close to 100%sRGB\\nMemory: 16GB DDR4 RAM, 2666Mhz with Nvidia GeForce MX250, 2GB Graphics | Storage: 512GB NVMe M.2 SSD\\nUltra Light Design creator laptop with Backlight Keyboard (Single Color - white)\\nThis genuine MSI Creator laptop comes with 1 years Carry-in warranty from MSI covering manufacturing defects and not covering physical damage. For more details, see Warranty section\\nPre-installed - MSI BurnRecovery MSI Battery Calibration MSI Help Desk Norton Internet Security (trail 60days) Norton Studio (Metro) (permanent free) Nvidia GeForce Experience Microsoft Office 2016 (trial 30 days, 1 year per purchase) True Color 2.0 Nahimic 3 Creator Center	https://images-na.ssl-images-amazon.com/images/I/81stVUZ%2BWuL._SX522_.jpg	66990	INR
\.


--
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: test
--

COPY public.session (sid, sess, expire) FROM stdin;
pgHfKZiJONnGUaIJcd3Wyw2anZO47Oz3	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:02:42.237Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:02:43
5gaVroU8oWXZMEfvNHrWGcipHdq_jVZl	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:02:42.417Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:02:43
EvjVHAdLqwMqPACnL6fKTO11siKi-XSt	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:02:51.474Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:02:52
BVOf_BH-zdp1NnI-ETGDVGE9fl5GQAC7	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:02:51.774Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:02:52
qRy7Q8LRGfei14zPcNf03UTqoD9qISY3	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:02:51.798Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:02:52
zhbIb8gfHmMqeMSpXxOJn1A5uHY2xCFF	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:03:00.307Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:03:01
-5XgXx4FoqWzpHCnJhg57LhPD8cPXgHu	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:03:00.425Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"},"userID":1}	2021-09-07 20:03:01
WdcwCLpXbbZjTS1avhiUB5g0h3RlN-y8	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:03:00.523Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:03:01
7MUP-eiDEO_LME8sOc05ip7Oh-VK1Ba2	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:03:00.624Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:03:01
C2f6I54y1HpTyy807ec6uzgGYhbscwuZ	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:03:10.162Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:03:11
qvJxCqWj1BwCiQedZH2MebsHrnzjIWKh	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:03:10.348Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:03:11
Oq8jQyewoyIq1vCzo7mPaXLxnyoJy5yl	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:03:31.463Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:03:32
zGL3ysVou_YpsvubXNBICzzban8vorvQ	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:03:31.619Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:03:32
UIj4h6m2XCXDwnA1DGjTeQjOdb4lANw3	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:03:52.481Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:03:53
erxn5y2zXF59fO3xagBIezk8C3gZg3sY	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:03:52.570Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"},"userID":1}	2021-09-07 20:03:53
M8nNvHg9u_PaFfXhRdl1_CD7MYkxsaB-	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:03:52.668Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:03:53
p2KyEdGIMZgFd9GG6RZ73M9qDqLmdWDI	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:03:52.789Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:03:53
VTkliw9-e6cEG2clFu1RhVJqSgVMPgfZ	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:04:30.622Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:04:31
TwnVSp-WR75U_u2Wo1knPgmJPBLv4tnr	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:04:30.773Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"},"userID":1}	2021-09-07 20:04:31
XqS8l_jci5GbSI4w-jDUY6_afAFYgJZ3	{"cookie":{"originalMaxAge":2591999999,"expires":"2021-09-07T20:04:30.835Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:04:31
Qg2KMHxoG8jMZrbuCLd5DKbT62sNVEv1	{"cookie":{"originalMaxAge":2591999999,"expires":"2021-09-07T20:04:30.963Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:04:31
vfvFvYyXBv476R4Uyxm-oTOHxojnX7_L	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:04:40.705Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:04:41
CpXz0Flm3AHDYklnZ6MOIlcZ2tZWWk8a	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:04:40.833Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:04:41
LHU0h9JNrPgLUAIclXpIIu2S4S2Xa_3X	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:04:40.884Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:04:41
-FVNlWItQ8NYUfklGEUM8QH2rrF_dCD7	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:06:02.217Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:06:03
L1vMTvPGMN0SjSyOEh6G0Oyg1tfb5pth	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:06:02.306Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:06:03
y92BUPyqQDPzxN_iQhw9I8b6e6FbnjCK	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:06:06.281Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"},"userID":1}	2021-09-07 20:06:07
UpvsZQGrzAQ621P1GZtQ-G7P6IPoPWxM	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:06:06.405Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:06:07
qQR0yIDIdByfA-36N5mqutuzS_TmyuMA	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:06:06.531Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:06:07
jqZnz3TgLsyL-jXpolWdzdGPBGfwoqax	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:06:10.615Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:06:11
QPHBbI9smVETbAUjAPj31uCN1cex5DNQ	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:06:10.770Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:06:11
7mMCK1XPNd5Gu5QacacftcDgw_uJ4OZM	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:06:22.821Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:06:23
qPoX0Gv7tKljwaWMNWsc2FNWcOZ_02Bk	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:06:22.916Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"},"userID":1}	2021-09-07 20:06:23
T7eSzUK0brVvGFzjGYF7fMS6vrE8cPpW	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:06:23.038Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:06:24
NUc_JksrvtEiw6z95oG-BqIGYd6Q4Bq-	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:06:23.150Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:06:24
WAwFEbcqwzEkaRc05Lxg7qWYyG3A7QNX	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:06:55.051Z","secure":true,"httpOnly":true,"path":"/","sameSite":false}}	2021-09-07 20:06:56
MtQLIhY7X3Vj6A20xX-1dJbDwiBhmuDu	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:06:55.195Z","secure":true,"httpOnly":true,"path":"/","sameSite":false},"userID":1}	2021-09-07 20:06:56
or4C6X_jffBT1l6vIAvunUP3LH9YGfro	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:06:55.340Z","secure":true,"httpOnly":true,"path":"/","sameSite":false}}	2021-09-07 20:06:56
lJig7CjeIEDbBN3QpvvXCPQoceU78Omb	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:06:55.455Z","secure":true,"httpOnly":true,"path":"/","sameSite":false}}	2021-09-07 20:06:56
ZcHjtPgI7WgBUq7RY_54sz1TnoLd0kLt	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:11:22.504Z","secure":true,"httpOnly":false,"path":"/","sameSite":"none"}}	2021-09-07 20:11:23
WpR9gCWjqIxks-2WM2de3R1H0Y7IDjqz	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:07:14.722Z","httpOnly":true,"path":"/"}}	2021-09-07 20:07:15
ovIqLB9n4sxmXO4iPr9KWQYCJf8ohILD	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:11:22.632Z","secure":true,"httpOnly":false,"path":"/","sameSite":"none"},"userID":1}	2021-09-07 20:11:23
QqANI5mEawGOY8Vpw7y1Drk0Be16eO1D	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:07:15.132Z","httpOnly":true,"path":"/"},"userID":1}	2021-09-07 20:07:16
3WAhrVYsZRPWAz73wa--WWRh5_4ibP4r	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:07:35.992Z","httpOnly":true,"path":"/"}}	2021-09-07 20:07:36
SHDA2RUWekqxTU4_T1X7xRpAftIU9F5J	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:07:36.179Z","httpOnly":true,"path":"/"}}	2021-09-07 20:07:37
meGnlz7qugW_zcavuzwuMdIgSP0A050a	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:08:04.493Z","httpOnly":true,"path":"/"}}	2021-09-07 20:08:05
7lZacrCPI8GrXE5ODFLnTzYrhZysDWBj	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:08:04.673Z","httpOnly":true,"path":"/"}}	2021-09-07 20:08:05
w4SDIIek4wK7xBYsljH50KdCiEqKJmDR	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:08:22.529Z","httpOnly":true,"path":"/"}}	2021-09-07 20:08:23
Cn6nhKWzzBklRoOFmByO5ByWF-zTyjFp	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:08:22.708Z","httpOnly":true,"path":"/"}}	2021-09-07 20:08:23
2jQT3f81IPBwjI-7GMyqOnXwadfy2VGG	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:08:36.825Z","httpOnly":true,"path":"/"}}	2021-09-07 20:08:37
YO1gdURHyyWUgpnEmzAKYqFyaPfwqO51	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:08:37.176Z","httpOnly":true,"path":"/"},"userID":1}	2021-09-07 20:08:38
6jP-cre2P56nKuUlqkwenIGB8YFgsN_B	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:08:37.317Z","httpOnly":true,"path":"/"}}	2021-09-07 20:08:38
hIHtPbPG6_7n9zvQPwo20bFM1XLwjcgb	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:08:37.441Z","httpOnly":true,"path":"/"}}	2021-09-07 20:08:38
5YEDsHvaolOEOLMZKS8a5wn80jwoCpEk	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:08:57.522Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:08:58
ULUFLL41t6RWGgCRtJk80IDDgBhbbFQT	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:08:57.632Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"},"userID":1}	2021-09-07 20:08:58
mIYQPxaWmbYUBDfqA_aL-vV2NOmBY21C	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:08:57.754Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:08:58
eafldFe1lesT-x1a4jUgdgZrPmNygkIR	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:08:57.867Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:08:58
NSwnFCI_LNZLrTM4_SI3wfA9ccMAQ4kD	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:09:22.335Z","httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:09:23
v7RL_hbJir9HNR3bMUkZHGB3ExD0punT	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:09:22.460Z","httpOnly":true,"path":"/","sameSite":"lax"},"userID":1}	2021-09-07 20:09:23
mGNkcxTPgTMKGN1f9Ppn1oKMk3UL7_gG	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:09:22.576Z","httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:09:23
7tq2B2xnHnNNaXNnukFuH1o8oqjBL_9E	{"cookie":{"originalMaxAge":2591999999,"expires":"2021-09-07T20:09:22.701Z","httpOnly":true,"path":"/","sameSite":"lax"}}	2021-09-07 20:09:23
4Cn4r4Pc8A_XmkXI5JJdspfT46aVVu7s	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:09:35.537Z","httpOnly":true,"path":"/","sameSite":"strict"}}	2021-09-07 20:09:36
gP3Vc90XHOpxMhxiirCXAKsPO6NajJm3	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:09:35.704Z","httpOnly":true,"path":"/","sameSite":"strict"},"userID":1}	2021-09-07 20:09:36
9ARIAxRAvyoBeNcpXy_p_-f_ZP9By1jc	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:09:35.818Z","httpOnly":true,"path":"/","sameSite":"strict"}}	2021-09-07 20:09:36
tgxZwu4pkj8wnHN0UMaY1c7FQNI_Ut9c	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:09:35.943Z","httpOnly":true,"path":"/","sameSite":"strict"}}	2021-09-07 20:09:36
XGTIRigLjt2tftU02R2-saPG4cnfKTJ8	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:10:02.124Z","httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:10:03
KLemp_0DY-PdWHtilS_wjX8swjG17p3w	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:10:02.272Z","httpOnly":true,"path":"/","sameSite":"none"},"userID":1}	2021-09-07 20:10:03
BqEzsj5VG3c_AgHYxATjYh36C680FT42	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:10:02.408Z","httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:10:03
MXVrX5XQT1oUEifUtXap0AudIvl178ie	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:10:02.517Z","httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:10:03
caTM7l8yzCKkTBniInEprW0c0BMNjclQ	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:10:28.771Z","secure":false,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:10:29
BcWTE94ZjSMoMHTsOPwDaV_f0h9NOd5P	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:10:28.921Z","secure":false,"httpOnly":true,"path":"/","sameSite":"none"},"userID":1}	2021-09-07 20:10:29
D-RWJ5uZWUsOd5OuSkr1qybgfs7rUtMG	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:10:29.049Z","secure":false,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:10:30
V28UEzSRiZjwTRw6XciqlzJrk9W0jMbH	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:10:29.171Z","secure":false,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:10:30
JEN9wDQg8_rC4Pa8hihf2Zwcmaa82k5P	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:10:46.943Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:10:47
D_a89iZR5sEsQP681r13lvCL3eA0FZB6	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:10:47.058Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"},"userID":1}	2021-09-07 20:10:48
TjufzrxzuXnR8JKaz9czKnIsaDLWbyvG	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:10:47.173Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:10:48
0F5LwQ2_WnA9eTLIKEg833T9u6olMl1u	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:10:47.301Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 20:10:48
KpMMnotni5HzTbcziPv_dN1v6vX65dI2	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:11:22.728Z","secure":true,"httpOnly":false,"path":"/","sameSite":"none"}}	2021-09-07 20:11:23
3VBx-u-_gqhzWmnN1RJXR-lU6X_MpBdb	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:11:22.855Z","secure":true,"httpOnly":false,"path":"/","sameSite":"none"}}	2021-09-07 20:11:23
70TJO7H6uPrBI8TNFWne35UdpLY1egoP	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:15:04.254Z","secure":true,"httpOnly":true,"domain":"http://localhost:3000","path":"/","sameSite":"none"}}	2021-09-07 20:15:05
Cyx7r2TAR96KZo_079PNNCktffIe0hly	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:15:04.396Z","secure":true,"httpOnly":true,"domain":"http://localhost:3000","path":"/","sameSite":"none"},"userID":1}	2021-09-07 20:15:05
6kuz0lpXYA5FwsZjRbES4dwUG2jZg05F	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:15:04.507Z","secure":true,"httpOnly":true,"domain":"http://localhost:3000","path":"/","sameSite":"none"}}	2021-09-07 20:15:05
k_bW5x82nkO6AX62xDZPsdBl1mMqf1q1	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:15:04.662Z","secure":true,"httpOnly":true,"domain":"http://localhost:3000","path":"/","sameSite":"none"}}	2021-09-07 20:15:05
v1loYKrADX1iaqBSGP33fLgQbpPUD2ho	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:15:20.201Z","httpOnly":true,"domain":"http://localhost:3000","path":"/"}}	2021-09-07 20:15:21
_LFhiEuUZPlHeqR8djD2RNGVb6iAtHpa	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:15:20.361Z","httpOnly":true,"domain":"http://localhost:3000","path":"/"},"userID":1}	2021-09-07 20:15:21
rNxSrnDt3tui0d9DPu90v6gAjQ1rWL3y	{"cookie":{"originalMaxAge":2591999999,"expires":"2021-09-07T20:15:20.449Z","httpOnly":true,"domain":"http://localhost:3000","path":"/"}}	2021-09-07 20:15:21
CdefFWEOG5vKZgGsqT4JGACCTZ-HjNFM	{"cookie":{"originalMaxAge":2591999999,"expires":"2021-09-07T20:15:20.564Z","httpOnly":true,"domain":"http://localhost:3000","path":"/"}}	2021-09-07 20:15:21
-atuJesK31lyQ2EgbXWNI_v-NTmXcyhc	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:18:34.935Z","secure":true,"httpOnly":true,"domain":"http://localhost:3000","path":"/","sameSite":"none"}}	2021-09-07 20:18:35
6l5x6wRKpOny5kWa962m_byqXuSK0WVz	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:18:35.062Z","secure":true,"httpOnly":true,"domain":"http://localhost:3000","path":"/","sameSite":"none"},"userID":1}	2021-09-07 20:18:36
DPStNkuTyx88Ij3enjtNFBCCU-UsUVzs	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:18:35.164Z","secure":true,"httpOnly":true,"domain":"http://localhost:3000","path":"/","sameSite":"none"}}	2021-09-07 20:18:36
ZAWhV9WTZHnFLYBFUoOxKxxwbB-BgUmY	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T20:18:35.273Z","secure":true,"httpOnly":true,"domain":"http://localhost:3000","path":"/","sameSite":"none"}}	2021-09-07 20:18:36
S5vzD03f97-zG4NCPTtPf_4OrWZrbG9m	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:08:41.324Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:08:42
lFxDkaS2P1Gn5ENbIJGAJX-Y8QyZEQEw	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:08:41.528Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:08:42
LCe5ABEcNQniuvyPIl2sZ86y_ExkQu0e	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:09:00.983Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:09:01
L76fVLfHOesSE1fbszZrasQpD2adi1UP	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:09:01.077Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:09:02
C8ftt1h_yXhi8QOW-2u_HewkX8U3hi3p	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:09:12.904Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:09:13
ihdcQCluyIcoLpAwGgCRuYHPz9Z1vang	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:09:13.319Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"},"userID":1}	2021-09-07 21:09:14
gGFqJHc8abcJybUkDhPx8Yt9Rob47Pzm	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:09:13.454Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:09:14
AXWEtwwmoBBP0dacoqhi3AGFt72y_DzA	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:09:13.559Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:09:14
dlfhLyGtmCUpKEVEn-BUFiKsQ5laLt7C	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:09:20.100Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:09:21
4nvJhhN0rj5Gr71WTCrr7oHNPnZeKpi_	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:09:20.250Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:09:21
8GtC7r7cMFCNlHghwd2MO7d5NUl1w-Vv	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:09:26.514Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:09:27
NO1MeNEn3HgEtEwc1BMPWiOIDqL-rJY0	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:09:26.608Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"},"userID":1}	2021-09-07 21:09:27
HsC9IWQCcJ_FmN2Wzn_xSWvUavaeY6ki	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:09:26.713Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:09:27
S2PCfu7IIme-4zJfQ8b3OKYeKlGWnbXW	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:09:26.848Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:09:27
QQ3h_ePrmZjX1Ehy8Ui_OCm3Xe5WjFkY	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:10:41.956Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:10:42
dGnBh19h1NVJe0L7yXiNJ1vXYq9dQQx3	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:10:42.059Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:10:43
zIO5Lk6DXd5LKdtBBf-0BFcA10XQGf4A	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:10:49.392Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:10:50
rduHM_bQWm68cqz58BzlrLxiM1nQrJoG	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:10:49.516Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"},"userID":1}	2021-09-07 21:10:50
C-vFoIjsolBNFABUk2vV5hS2WYSQfuBW	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:10:49.662Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:10:50
AwdCI4sRtBSc86u15MyR6d0Gu99mT8en	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:10:49.787Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:10:50
1udghyCGRzNo_lmqKOrC1Nku5DO5G7L5	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:12:32.991Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:12:33
snYDltzmM8WamIwZozEcVZiNFw8-carF	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:12:33.086Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:12:34
CX3bwhL5cjndorNdHrrOwL3Nr2pM80Tb	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:12:41.257Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:12:42
PSFXwgmQBStrQ6T-NYiW91gJLnIc-Muu	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:12:41.633Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:12:42
jKZZ6ZQ4iXlcIfSIM0Onm6ixOsiDodBF	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:12:45.308Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"},"userID":1}	2021-09-07 21:12:46
z6vIX1xjuYQashUusEIXklNRlghUoKZH	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:12:45.450Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:12:46
t3ykkvzs1BZL3nfmPOveYOx32E-bLrLT	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:12:45.570Z","secure":true,"httpOnly":true,"path":"/","sameSite":"none"}}	2021-09-07 21:12:46
dRAqWHwbcnp-owxi1FEUigIPQ2DK_6VB	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:13:17.793Z","httpOnly":true,"path":"/"}}	2021-09-07 21:13:18
XR3DphremDdYe6AVeGDIowUlA3bNz4w_	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:13:17.986Z","httpOnly":true,"path":"/"}}	2021-09-07 21:13:18
an2oGABSkx4OkBbSAmFzcFIuR2sRLIXT	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:13:23.029Z","httpOnly":true,"path":"/"}}	2021-09-07 21:13:24
dpxD13-Lc-lHR1YUF5lpGVVvxj7FGtM5	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:13:23.195Z","httpOnly":true,"path":"/"},"userID":1}	2021-09-07 21:13:24
xMFOWAS5FltJF_zlinue2zBAqR5ZLS7-	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:13:23.375Z","httpOnly":true,"path":"/"}}	2021-09-07 21:13:24
BmlvcpFfyO7PUmKDL6yKMbn7-D8a5a9c	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:13:23.481Z","httpOnly":true,"path":"/"}}	2021-09-07 21:13:24
fqvVZSETFuMlOzQ6PGT-iHNNv7cmrg46	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:14:47.930Z","httpOnly":true,"path":"/"}}	2021-09-07 21:14:48
ERr0JXwd6Q_6tcnnUcJskHJpLgPGeZhk	{"cookie":{"originalMaxAge":2592000000,"expires":"2021-09-07T21:15:42.203Z","httpOnly":true,"path":"/"},"userID":1}	2021-09-07 21:15:43
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: test
--

COPY public.users (id, "createdAt", "updatedAt", "firstName", "lastName", password, email) FROM stdin;
1	2021-08-08 20:03:00.415581	2021-08-08 20:03:00.415581	Madhav	hv	$2b$10$eIwRLgllvwhzkbdoqG5nuuqnTzhfH0iBm2IdjTXjUkGS12bay5BAS	mohanbarman9711@gmail.com
\.


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: test
--

SELECT pg_catalog.setval('public.orders_id_seq', 1, false);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: test
--

SELECT pg_catalog.setval('public.products_id_seq', 9, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: test
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: products PK_0806c755e0aca124e67c0cf6d7d; Type: CONSTRAINT; Schema: public; Owner: test
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY (id);


--
-- Name: orders PK_710e2d4957aa5878dfe94e4ac2f; Type: CONSTRAINT; Schema: public; Owner: test
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY (id);


--
-- Name: users PK_a3ffb1c0c8416b9fc6f907b7433; Type: CONSTRAINT; Schema: public; Owner: test
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);


--
-- Name: users UQ_97672ac88f789774dd47f7c8be3; Type: CONSTRAINT; Schema: public; Owner: test
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE (email);


--
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: test
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);


--
-- Name: IDX_session_expire; Type: INDEX; Schema: public; Owner: test
--

CREATE INDEX "IDX_session_expire" ON public.session USING btree (expire);


--
-- Name: orders FK_151b79a83ba240b0cb31b2302d1; Type: FK CONSTRAINT; Schema: public; Owner: test
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: orders FK_8624dad595ae567818ad9983b33; Type: FK CONSTRAINT; Schema: public; Owner: test
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "FK_8624dad595ae567818ad9983b33" FOREIGN KEY ("productId") REFERENCES public.products(id);


--
-- PostgreSQL database dump complete
--

