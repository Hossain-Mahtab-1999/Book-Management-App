-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` varchar(600) NOT NULL,
  `cover` varchar(600) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (41,'Sherlock Holmes','Written by Arthur Doyle','image-1674468065001.sherlock-holmes-book-cover.jpg',12),(42,'Romeo Juliet','Written by William Shakespeare','image-1674468098825.Romeo.jpg',12),(43,'Ebong Himu','Written by Humayun Ahmed','image-1674468132055.ebong himu by Humayun Ahmed.jpg',12),(44,'Ami Topu','Written by Jafor Iqbal','image-1674468164185.Ami-Topu-By-Muhammad-Zafar-Iqbal-185x265.jpg',10),(45,'Byomkesh shomogro','Written by Shorobindu','image-1674468223653.Byomkesh.jpg',13),(46,'Feldua Ekadosh','Written by Satyajit Roy','image-1674468283836.Feluda.jpg',12),(47,'Tin Goyenda','Written by Rakib Hasan','image-1674468318051.Tin Goyenda.jfif',15),(49,'Aj Himur Biye','Written by Humayun Ahmed','image-1674468383937.Aj Himur Biye.jpg',12),(54,'The Hunger Games','Written by Collins Suzanne','image-1674468651339.The_Hunger_Games_cover.jpg',14);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `cover` varchar(600) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'test1','test1@gamil.com','$2a$10$gGGVerextH16NIF9WdLlE.z2KamcgoSqdP5CXsMF5GNdPbtATXESC',NULL),(3,'test2','test2@gmail.com','$2a$10$GE3v8LgMSZhEJQEkmDjgOu3akC59JmLigHxACUJlrmlKmneNp9Ohi',NULL),(4,'Tamim Iqbal','ti28@gmail.com','$2a$10$BKg2yV9Tdr7KEOqY2zNZb.UI1PZMdobT49wv.avaxl8sCtoJywg.m',NULL),(5,'Liton Kumar Das','lkd16@gmail.com','$2a$10$KCBYtgI8s6eQYHKLINn5cOAzijAhmzNOZ0ceohNloFy6Wwfas63jy',NULL),(7,'hello','hello@gmail.com','$2a$10$2bSRS0hmD7IOwh0skkdIhODzprCAGBF5unrkcddWIolWkYHn8AA8W',NULL),(9,'Shakib','sh75@gmail.com','$2a$10$2M1ztvbLhw4rOQT0Mcv3SuqrOnWt475dLUuicDTNNPw/MVQNoU4lG',NULL),(10,'Mash','M2@gmail.com','$2a$10$g5wzkUYAAItL..M4qdw1r.jPI9NnGzf7uRmMxp/D9LB3wJYIh3CLi',NULL),(11,'Talent','tp@gmail.com','$2a$10$aiW3jZ.9gzTyirNQtlanHuTw7QAOb3vl3WmzyeZZUgqMuirLA5YOe',NULL),(12,'Watson','Watson@gmail.com','$2a$10$QGj8TIJ7YNDQQQ24wbJBXuyRM8xkweFXrsxwXerz1K2VmxBq9o3/m',NULL),(13,'Shane','Shane@gmail.com','$2a$10$Hz3eTGvVN5JWoT0w0I0JxOcmQs7CK9Zc2hL2ZY07OjWw/1rUZVuwq',NULL),(14,'Aqua','aq@gmail.com','$2a$10$GnnHuNLB63bMOiZJEV0P/.9bQ31MjvQfBXaCthkJmZA.YhZgePkRW',NULL),(15,'Warne','warne@gmail.com','$2a$10$YCnewqQo7y/JJiV4bD/xR.QXgOeXmA2yN.KE/YcJsgxM9TLcAL02a',NULL),(16,'Lee','lee@gmail.com','$2a$10$DnMkIts3z5doJo8X4.rnZ.dQCx80/e3JxzUmn37k1Axe56NbPhNSy',NULL),(17,'Sanga','sanga@gmail.com','$2a$10$pL/DHlfgcmyhxSGwkGkhSeT5bFCoLmHVCGu/nTbKrR3.FXM.RGDGy',NULL),(18,'Malinga','malinga@gmail.com','$2a$10$5PyPGt8PLGEnW0z8OOSziOrIpoYbG65RnaT1dOIzfhtl4qUJk7Svu',NULL),(19,'Bijoy','bijoy@gmail.com','$2a$10$4YqUZzIiDS0gxh2TT7yy/.VcMGsJ7WvxG6JxqPV/LmrJYjGhtIAqi',NULL),(20,'Zakir','zakir@gmail.com','$2a$10$nEILdWHMg0QH8XXyrY5OruuZNESlS75hxq4JHF22AXeNBBMP5ZMC6',NULL),(21,'Rohit','rohit@gmail.com','$2a$10$hllElLQt9/Bo.5G0xNDc0uGjRS6LgUb.vANm0bm.G2ka5xn4KfJXO',NULL),(22,'Arman','arman@gmail.com','$2a$10$i70f/CYVMLaIQslu2iBjN.ezdhHHTcRNP3NGjBJDoWOaqgboFXYAS',NULL),(23,'Amit','amit@gmail.com','$2a$10$vU4V/USrnPDu/D45qlBa4efQJkvXNHLC3TlXAOmEA86IrvP2PdN3S',NULL),(24,'Shoumik','shoumik@gmail.com','$2a$10$Hlbf2X2IFaCd0Ghhx01uaOk7okVju5aEOM07YcBgMFh8iSusIUTQW',NULL),(25,'Spider','spider@gmail.com','$2a$10$W1FEB9sucBjDzqCC3ZTT/ezjzqt16c047jBe5tBgMALT3oyVQQpJG','image-1674449604743.Profile1.jpg'),(26,'Realme','realme@gmail.com','$2a$10$wkluNdulxanRroeLAlTMleIY2c5phzBR8UXuuEFmBo1z3e8tVnY1O','image-1674450205196.Profile1.jpg'),(27,'Akash','xiaomi@gmail.com','$2a$10$qxIMCtLCLHLvFrxdDD9oGewhQYk3XE0DcPShhyDBmcyIjJcCh1zzG','image-1674467336582.userlogo.png'),(28,'Abir','abir@gmail.com','$2a$10$0cA09q66OfGRHZzplEjBSefQZgc/cWDg8TE/wgJNKlow5D.mSYeaK','image-1674469020501.userlogo.png'),(29,'Fahim','fahim12@gmail.com','$2a$10$zpMfzDpSYt6z8IhFcorB6Of6.LGCWy4FbeQetvfAnfW6UuZI.1QHC','image-1674469600976.userlogo.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-23 16:53:26
