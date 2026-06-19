-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: library
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artslifestyle`
--

DROP TABLE IF EXISTS `artslifestyle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artslifestyle` (
  `BookID` int NOT NULL AUTO_INCREMENT,
  `BookName` varchar(255) DEFAULT NULL,
  `CoverImage` varchar(255) DEFAULT NULL,
  `BookLink` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`BookID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artslifestyle`
--

LOCK TABLES `artslifestyle` WRITE;
/*!40000 ALTER TABLE `artslifestyle` DISABLE KEYS */;
INSERT INTO `artslifestyle` VALUES (1,'Student Cook','/images/cooking.jpg','https://www.usu.edu/aggiewellness/files/USU-Student-Cookbook-FINAL-1.pdf'),(2,'Fundamentals of Photography','/images/photograph.jpg','https://gactvd.in/Documents/Learning/Viscom/Basic%20Photography%20-PDF%201.pdf'),(3,'Drawing Basics','/images/drawing.jpg','https://lemoorecollege.edu/oer/documents/2024-drawing-basics-art-005a-oer-textbook-digital.pdf'),(4,'Fashion Designing','/images/fasihon.jpg','https://navttc.gov.pk/MatricTechBooks/9thbooks/FashionDesignfor9th.pdf'),(5,'Hindustani Music','/images/MUSIC.jpg','https://www.nios.ac.in/media/documents/Hindustani_Music_242/Hindustani_Music_ThBook1_Eng.pdf'),(6,'The Complete Fitness','/images/fitness.jpg','https://www.clemson.edu/business/academics/army-rotc/documents/fitness-handbook.pdf');
/*!40000 ALTER TABLE `artslifestyle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_ratings`
--

DROP TABLE IF EXISTS `book_ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_ratings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `book_name` varchar(255) NOT NULL,
  `rating` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`book_name`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_ratings`
--

LOCK TABLES `book_ratings` WRITE;
/*!40000 ALTER TABLE `book_ratings` DISABLE KEYS */;
INSERT INTO `book_ratings` VALUES (1,'MEB49421','Fashion Designing',5),(3,'MEB49421','Hindustani Music',5),(4,'MEB49421','The Complete Fitness',3),(5,'MEB49421','Drawing Basics',2),(6,'MEB49421','Fundamentals of Photography',2),(7,'MEB49421','Student Cook',5),(19,'MEB49421','GRANDMAS BAG of STORIES',3),(20,'MEB49421','Banking ',3),(21,'MEB49421','Computer Science',4),(22,'MEB49421','Commerce',1),(23,'MEB49421','SCARY STORIES',5),(24,'MEB85701','Fashion Designing',5),(25,'MEB49421','Destination India Booklet',5),(26,'MEB49421','The Psychology Book',3),(27,'MEB49421','Introduction to Philosophy',2),(28,'MEB49421','Inspiration to Live Your Magic',3),(29,'MEB49421','The Secret of Success',1),(30,'MEB49421','The History Book',1),(31,'MEB49421','SCIENCE FICTION',5),(32,'MEB49421','Mathematics',1),(33,'MEB49421','Crime Story ',1),(38,'MEB49421','Medical & Nursing',3),(39,'MEB46604','Mathematics',5),(41,'MEB67578','Mathematics',5),(42,'MEB67578','INDIAN YEAR BOOK',4),(43,'MEB67578','Ranthambhore Adventure',5),(44,'MEB67578','Programming In C',5),(45,'MEB67578','UPSC ',5),(46,'MEB67578','Destination India Booklet',4);
/*!40000 ALTER TABLE `book_ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `childrenteens`
--

DROP TABLE IF EXISTS `childrenteens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `childrenteens` (
  `BookID` int NOT NULL AUTO_INCREMENT,
  `BookName` varchar(255) DEFAULT NULL,
  `Author` varchar(255) DEFAULT NULL,
  `CoverImage` varchar(255) DEFAULT NULL,
  `BookLink` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`BookID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `childrenteens`
--

LOCK TABLES `childrenteens` WRITE;
/*!40000 ALTER TABLE `childrenteens` DISABLE KEYS */;
INSERT INTO `childrenteens` VALUES (1,'GRANDMAS BAG of STORIES',' Priya Kuriyan','/images/story.jpg','https://www.ssgopalganj.in/online/E-Books/CLASS%20VI/Grandma\'s%20Bag%20of%20Stories%20by%20Sudha%20Murthy.pdf'),(2,'GHOSTS COMIC',' RAINA TELGEMEIER','/images/comic.jpg','https://kids.scholastic.com/content/dam/scholastic/kids/pdf/Book%20Excerpts/Ghosts%20Book%201%20Excerpt.pdf'),(3,'My first English book',' IILT','/images/earlyy.jpg','https://ncca.ie/media/2077/first_englishbook.pdf'),(4,'Young Adult Fiction',' Mar Casas Cachinero','/images/young.jpg','http://eureka.biada.org/wp-content/uploads/2017/02/3-Mar-Casas-Cachinero.pdf'),(5,'Panchatantra',' PANDIT VISHNU SHARMA','/images/pachatantra.jpg','https://www.banyantree.in/jagdishpur/wp-content/uploads/2020/06/Panchatantra-.pdf');
/*!40000 ALTER TABLE `childrenteens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `competitiveexams`
--

DROP TABLE IF EXISTS `competitiveexams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `competitiveexams` (
  `BookID` int NOT NULL AUTO_INCREMENT,
  `BookName` varchar(255) DEFAULT NULL,
  `CoverImage` varchar(255) DEFAULT NULL,
  `BookLink` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`BookID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `competitiveexams`
--

LOCK TABLES `competitiveexams` WRITE;
/*!40000 ALTER TABLE `competitiveexams` DISABLE KEYS */;
INSERT INTO `competitiveexams` VALUES (1,'UPSC ','/images/upsc.jpg','https://drive.google.com/file/d/1RVwSwmerhGssppisX4kBptLQSsFLIYfC/view'),(2,'TNPSC ','/images/tnpsc.png','https://tamilnaducareerservices.tn.gov.in/asset/books/list_of_books_for_tnpsc.pdf'),(3,'JEE ','/images/jee.jpg','https://freedownloads.dishapublication.com/wp-content/uploads/2024/08/9789362250476_interior.pdf'),(4,'NEET ','/images/neet.jpg','https://freedownloads.dishapublication.com/wp-content/uploads/2019/12/9789362251015_interior.pdf'),(5,'Banking ','/images/baking.webp','https://u.pcloud.link/publink/show?code=XZYY3MVZBvM84zUAOxfXxttWdiorG0f3S1RV');
/*!40000 ALTER TABLE `competitiveexams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `education`
--

DROP TABLE IF EXISTS `education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `education` (
  `BookID` int NOT NULL AUTO_INCREMENT,
  `BookName` varchar(255) DEFAULT NULL,
  `CoverImage` varchar(1638) DEFAULT NULL,
  `BookLink` varchar(1638) DEFAULT NULL,
  PRIMARY KEY (`BookID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education`
--

LOCK TABLES `education` WRITE;
/*!40000 ALTER TABLE `education` DISABLE KEYS */;
INSERT INTO `education` VALUES (1,'Mathematics','/images/maths.webp','https://books.google.com.gh/books?id=2HQLEAAAQBAJ&printsec=frontcover#v=onepage&q&f=false'),(2,'Physics','/images/physics.jpg','https://ncert.nic.in/textbook/pdf/leph101.pdf'),(3,'Chemistry','/images/chemistry.jpg','https://ebooks.ebalbharati.in/pdfs/1203030414.pdf'),(4,'Biology','/images/biology.jpg','https://static.collegedekho.com/media/uploads/2022/09/21/class-12-biology-textbook-pdf-1.pdf'),(5,'Computer Science','/images/computerscience.jpg','https://www.bhumipublishing.com/wp-content/uploads/2025/05/Trends-in-Computer-Science-and-Information-Technology-Research-1.pdf'),(6,'Engineering','/images/Engineering,.jpg','https://www.pce-fet.com/common/library/books/39/173_BasicElectricalEngineeringbyV.K.MehtaandRohitMehta.pdf'),(7,'Commerce','/images/commerce.jpg','https://bieap.apcfss.in/Uploads/Materials/Commerce-I.pdf'),(8,'Economics','/images/economics.jpg','https://www.drnishikantjha.com/booksCollection/SYJC%20Economics.pdf'),(9,'Business Studies','/images/Business Studies.jpg','https://samagra.kite.kerala.gov.in/files/samagra-resource/uploads/tbookscmq/Class_XI/BusinessStudies/Business%20Studies.pdf'),(10,'Medical & Nursing','/images/Medical & Nursing.jpg','https://content.e-bookshelf.de/media/reading/L-4061291-75f85760bd.pdf'),(11,'Law','/images/law.jpg','https://www.archives.gov/files/about/laws/basic-laws-book-2016.pdf');
/*!40000 ALTER TABLE `education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fiction`
--

DROP TABLE IF EXISTS `fiction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fiction` (
  `BookID` int NOT NULL AUTO_INCREMENT,
  `BookName` varchar(255) DEFAULT NULL,
  `Author` varchar(255) DEFAULT NULL,
  `CoverImage` varchar(10000) DEFAULT NULL,
  `BookLink` varchar(1638) DEFAULT NULL,
  PRIMARY KEY (`BookID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fiction`
--

LOCK TABLES `fiction` WRITE;
/*!40000 ALTER TABLE `fiction` DISABLE KEYS */;
INSERT INTO `fiction` VALUES (1,'Ranthambhore Adventure','DEEPAK DALAL','/images/Adventure.jpg','https://www.deepakdalal.com/theRanthambhoreAdventure.pdf'),(2,'The Mystery of the Sea','Bram Stoker','/images/mystery.jpg','https://www.bramstoker.org/pdf/novels/07sea.pdf'),(3,'Three Short Novels','Angela Esterhammer','/images/history.jpg','https://edinburghuniversitypress.com/media/resources/9781474402095_Three_Short_Novels_Introduction.pdf'),(4,'SCIENCE FICTION',' Isaac Asimov ','/images/scifi.jpg','https://bpb-us-w2.wpmucdn.com/voices.uchicago.edu/dist/8/644/files/2017/09/SCIENCE_FICTION_AND_EITRO%C2%B7SCIENCE_FICTION_Meillassoux_2015-138m7mw.pdf'),(5,'SCARY STORIES',' Alvin Schwartz ','/images/horrier.jpg','https://files.commons.gc.cuny.edu/wp-content/blogs.dir/6542/files/2019/03/B-001-014-456.pdf');
/*!40000 ALTER TABLE `fiction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nonfiction`
--

DROP TABLE IF EXISTS `nonfiction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nonfiction` (
  `BookID` int NOT NULL AUTO_INCREMENT,
  `BookName` varchar(255) DEFAULT NULL,
  `Author` varchar(255) DEFAULT NULL,
  `CoverImage` varchar(255) DEFAULT NULL,
  `BookLink` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`BookID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nonfiction`
--

LOCK TABLES `nonfiction` WRITE;
/*!40000 ALTER TABLE `nonfiction` DISABLE KEYS */;
INSERT INTO `nonfiction` VALUES (1,'Inspiration to Live Your Magic','LARRY ANDERSON','/images/biography.jpg','https://ati.dae.gov.in/ati12052021_9.pdf'),(2,'The Secret of Success','William Walker Atkinson','/images/secret.jpg','https://www.yogebooks.com/english/atkinson/1908secretsuccess.pdf'),(3,'The History Book','FIONA COWARD','/images/historybook.jpg','https://www.torosceviri.info/wp-content/uploads/2019/09/The-History-Book-DK-2016.pdf'),(4,'Introduction to Philosophy','NATHAN SMITH','/images/philosophy.jpg','https://assets.openstax.org/oscms-prodcms/media/documents/Introduction_to_Philosophy-WEB_cszrKYp.pdf'),(5,'The Psychology Book','CATHERINE COLLIN','/images/psychology.jpg','https://shortcutstv.com/text/psychology_explained.pdf'),(6,'Crime Story ',' John and Celia Turvey','/images/crime story.jpg','https://isfdyt81.edu.ar/wp-content/uploads/2022/12/level-4-Crime-Story-Penguin-Readers-1.pdf'),(7,'Destination India Booklet',' Jaideep Mazumdar','/images/travel.jpg','https://eoivienna.gov.in/public_files/assets/pdf/Destination_india.pdf');
/*!40000 ALTER TABLE `nonfiction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `our_library`
--

DROP TABLE IF EXISTS `our_library`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `our_library` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `project` varchar(52) DEFAULT NULL,
  `district` varchar(52) DEFAULT NULL,
  `place` varchar(52) DEFAULT NULL,
  `link` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `our_library`
--

LOCK TABLES `our_library` WRITE;
/*!40000 ALTER TABLE `our_library` DISABLE KEYS */;
INSERT INTO `our_library` VALUES (1,'/images/East Velayudhapuram.jpg','Project Pearl','Thoothukudi District.','East Velayudhapuram','https://chennai.ashanet.org/news/2022/05/inauguration-of-new-libraries/'),(2,'/images/Suriyaminikkan.jpg','Project Pearl','Thoothukudi District.','Suriyaminikkan','https://chennai.ashanet.org/news/2022/05/inauguration-of-new-libraries/'),(3,'/images/South Subramaniapuram.jpg','Project Pearl','Thoothukudi District.','South Subramaniapuram ','https://chennai.ashanet.org/news/2022/05/inauguration-of-new-libraries/'),(4,'/images/Nagalapuram.jpg','Project Pearl','Thoothukudi District.','Nagalapuram','https://chennai.ashanet.org/news/2022/05/inauguration-of-new-libraries/'),(5,'/images/Seeyapoondi.jpg','Project Thulasi',' Villupuram District.','Seeyapoondi','https://chennai.ashanet.org/news/2022/05/inauguration-of-new-libraries/'),(6,'/images/Kaatu Sithamboor.jpg','Project Thulasi',' Villupuram District.','Kaatu Sithamboor','https://chennai.ashanet.org/news/2022/05/inauguration-of-new-libraries/'),(7,'/images/Annanagar.jpg','Project Sangamam','  Thiruvallur District.','Annanagar ','https://chennai.ashanet.org/news/2022/05/inauguration-of-new-libraries/');
/*!40000 ALTER TABLE `our_library` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pinned_books`
--

DROP TABLE IF EXISTS `pinned_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pinned_books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(50) DEFAULT NULL,
  `book_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_pin` (`user_id`,`book_name`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pinned_books`
--

LOCK TABLES `pinned_books` WRITE;
/*!40000 ALTER TABLE `pinned_books` DISABLE KEYS */;
INSERT INTO `pinned_books` VALUES (10,'MEB49421','Biology'),(8,'MEB49421','Mathematics'),(15,'MEB67578','Destination India Booklet'),(12,'MEB67578','INDIAN YEAR BOOK'),(11,'MEB67578','Mathematics'),(13,'MEB67578','Ranthambhore Adventure'),(14,'MEB67578','UPSC ');
/*!40000 ALTER TABLE `pinned_books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `user_id` varchar(50) NOT NULL,
  `rating` int NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES ('MEB42145',5),('MEB46604',5),('MEB49421',5),('MEB63307',5),('MEB67225',4),('MEB67578',5),('MEB77950',5);
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recommendation`
--

DROP TABLE IF EXISTS `recommendation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recommendation` (
  `BookID` int NOT NULL AUTO_INCREMENT,
  `BookName` varchar(255) DEFAULT NULL,
  `CoverImage` varchar(255) DEFAULT NULL,
  `BookLink` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`BookID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recommendation`
--

LOCK TABLES `recommendation` WRITE;
/*!40000 ALTER TABLE `recommendation` DISABLE KEYS */;
INSERT INTO `recommendation` VALUES (1,'THE NEW OXFORD PICTURE DICTIONARY','/images/DICTIONARY.jpg','https://homepage.ntu.edu.tw/~karchung/OxfordPictureDictionary.pdf'),(2,'Encyclopedia of India','/images/E N C Y C L O P E D I A.jpg','https://www2.hunter.cuny.edu/pending-migration/polsci/faculty/jenkins/2006-encyclopedia-of-india-pol-econ-of-liberalization.pdf'),(3,'WORLD ATLAS','/images/atlas.jpg','https://s3.amazonaws.com/scschoolfiles/596/nystrom_world_atlas.pdf'),(4,'INDIAN YEAR BOOK','/images/yearbook.jpg','https://uploads.iasscore.in/pdf/1712552498-INDIAN_YEAR_BOOK_2024.pdf');
/*!40000 ALTER TABLE `recommendation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `membership` varchar(50) DEFAULT NULL,
  `passwords` int DEFAULT NULL,
  `bookTypes` text,
  `created_at` datetime NOT NULL DEFAULT (((now() + interval 5 hour) + interval 30 minute)),
  `memberID` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (1,'sudharsan','2009-08-08','Male','9080758569','anandansudharsan404@gmail.com','Yearly',2589,NULL,'2026-01-26 18:37:33','MEB49421'),(2,'Raghavi','2008-05-18','Female','9790924344','geetharaghavisrs887@gmail.com','Half-Yearly',1826,NULL,'2026-01-26 20:23:00','MEB42145'),(3,'Yamini L B','1991-12-06','Female','9600569589','yaminiasha2022@gmail.com','Monthly',1907,NULL,'2026-01-28 00:53:11','MEB85701'),(4,'sree','2026-01-01','Male','9080758569','anandansudharsan404@gmail.com','Yearly',1234,NULL,'2026-01-28 18:41:23','MEB67578'),(5,'Rohith','2009-02-05','Male','7868028248','rohithsarmagopi@gmail.com','Yearly',1234,NULL,'2026-01-28 22:18:43','MEB46604'),(6,'sree ','2012-02-02','Male','9080758569','anandansudharsan404@gmail.com','Yearly',1234,NULL,'2026-01-31 20:07:27','MEB45452'),(7,'sree ','2006-01-24','Male','9080758569','anandansudharsan404@gmail.com','Yearly',1234,NULL,'2026-01-31 21:36:04','MEB27454');
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skilldevelopment`
--

DROP TABLE IF EXISTS `skilldevelopment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skilldevelopment` (
  `BookID` int NOT NULL AUTO_INCREMENT,
  `BookName` varchar(255) DEFAULT NULL,
  `Author` varchar(255) DEFAULT NULL,
  `CoverImage` varchar(255) DEFAULT NULL,
  `BookLink` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`BookID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skilldevelopment`
--

LOCK TABLES `skilldevelopment` WRITE;
/*!40000 ALTER TABLE `skilldevelopment` DISABLE KEYS */;
INSERT INTO `skilldevelopment` VALUES (1,'Programming In C','Balraj Kumar','/images/programming.jpg','https://www.lpude.in/SLMs/Master%20of%20Computer%20Applications/Sem_1/DECAP010_PROGRAMMING_IN_C.pdf'),(2,'Data Structures and Algorithms','Luca Del Tongo','/images/dsa.jpg','https://mta.ca/~rrosebru/oldcourse/263114/Dsa.pdf'),(3,'Artificial Intelligence','Peter Norvig','/images/ai.jpg','https://people.engr.tamu.edu/guni/csce625/slides/AI.pdf');
/*!40000 ALTER TABLE `skilldevelopment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-10 17:29:25
