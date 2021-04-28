-- CREATE DATABASE hospital;

-- USE hospital;

-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////

-- PHYSICIANS
-- +--------------+-------------+------+-----+---------+----------------+
-- | Field        | Type        | Null | Key | Default | Extra          |
-- +--------------+-------------+------+-----+---------+----------------+
-- | physician_id | tinyint     | NO   | PRI | NULL    | auto_increment |
-- | first_name   | VARCHAR(30) | YES  |     | NULL    |                |
-- | last_name    | VARCHAR(30) | YES  |     | NULL    |                |
-- | specialty    | VARCHAR(50) | YES  |     | NULL    |                |
-- | image        | VARCHAR(30) | YES  |     | NULL    |                |
-- | gender       | VARCHAR(10) | YES  |     | NULL    |                |
-- +--------------+-------------+------+-----+---------+----------------+

DROP TABLE physicians;

CREATE TABLE physicians(
    physician_id TINYINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    specialty VARCHAR(50),
    photo VARCHAR(30),
    gender VARCHAR(10),
    telephone VARCHAR(15)
);


INSERT INTO physicians (first_name, last_name, specialty, photo, gender, telephone)
VALUES  ('steven'   , 'santiago', 'podiatry'                , 'face-1' , 'male'  , '257-852-6428'),
        ('jan'      , 'sharp'   , 'nephrology'              , 'face-2' , 'female', '459-821-4896'),
        ('joy'      , 'mckenzie', 'pulmonology'             , 'face-3' , 'female', '125-548-9658'),
        ('sophie'   , 'mccormik', 'general surgery'         , 'face-4' , 'female', '128-745-3654'),
        ('dave'     , 'morrison', 'neurosurgery'            , 'face-5' , 'male'  , '456-852-6479'),
        ('leigh'    , 'morton'  , 'internal medicine'       , 'face-6' , 'female', '945-614-7526'),
        ('jamie'    , 'rodgers' , 'urology'                 , 'face-7' , 'female', '845-319-7425'),
        ('horace'   , 'roberts' , 'anesthesiology'          , 'face-8' , 'male'  , '345-542-6248'),
        ('clara'    , 'burke'   , 'maternal, fetal medicine', 'face-9' , 'female', '545-758-8524'),
        ('geneva'   , 'curtis'  , 'cardiology'              , 'face-10', 'female', '914-536-7428'),
        ('meghan'   , 'brewer'  , 'gastroenterology'        , 'face-11', 'female', '345-635-4896'),
        ('vernon'   , 'owens'   , 'family medicine'         , 'face-12', 'male'  , '354-965-7485'),
        ('lynn'     , 'greene'  , 'pediatrics'              , 'face-13', 'female', '384-962-7484'),
        ('heather'  , 'sherman' , 'internal medicine'       , 'face-14', 'female', '504-365-9757'),
        ('johnathan', 'erikson' , 'gynecology'              , 'face-15', 'male'  , '364-242-1585'),
        ('joe'      , 'chandler', 'dermatology'             , 'face-16', 'male'  , '125-458-6585'),
        ('angeline' , 'collins' , 'neurology'               , 'face-17', 'female', '852-456-9517');
-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////

-- PATIENTS
-- +------------+-------------+------+-----+---------+----------------+
-- | Field      | Type        | Null | Key | Default | Extra          |
-- +------------+-------------+------+-----+---------+----------------+
-- | patient_id | tinyint     | NO   | PRI | NULL    | auto_increment |
-- | first_name | VARCHAR(30) | YES  |     | NULL    |                |
-- | last_name  | VARCHAR(30) | YES  |     | NULL    |                |
-- | gender     | VARCHAR(15) | YES  |     | NULL    |                |
-- | height     | smallint    | YES  |     | NULL    |                |
-- | weight     | smallint    | YES  |     | NULL    |                |
-- | dob        | date        | YES  |     | NULL    |                |
-- +------------+-------------+------+-----+---------+----------------+

-- DROP TABLE patients;

-- CREATE TABLE patients(
--     patient_id TINYINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     first_name VARCHAR(30),
--     last_name VARCHAR(30),
--     gender VARCHAR(15),
--     height SMALLINT,
--     weight SMALLINT,
--     dob DATE
-- );


-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////

-- APPOINTMENTS
-- +------------------+----------+------+-----+---------+----------------+
-- | Field            | Type     | Null | Key | Default | Extra          |
-- +------------------+----------+------+-----+---------+----------------+
-- | appointment_id   | tinyint  | NO   | PRI | NULL    | auto_increment |
-- | patient_id       | int      | YES  |     | NULL    |                |
-- | doctor_id        | int      | YES  |     | NULL    |                |
-- | appointment_date | date     | YES  |     | NULL    |                |
-- | height           | smallint | YES  |     | NULL    |                |
-- | weight           | smallint | YES  |     | NULL    |                |
-- +------------------+----------+------+-----+---------+----------------+

-- DROP TABLE appointments;

-- CREATE TABLE appointments(
--     appointment_id TINYINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     patient_id INT,
--     doctor_id INT,
--     appointment_date DATE,
--     height SMALLINT,
--     weight SMALLINT
-- );


-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////