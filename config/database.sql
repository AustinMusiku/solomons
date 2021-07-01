-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: solomons
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `Order_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Address` varchar(45) NOT NULL,
  `Phone` varchar(45) NOT NULL,
  `Payment` varchar(45) NOT NULL,
  `Amount` int(11) NOT NULL,
  `Cart` mediumtext NOT NULL,
  PRIMARY KEY (`Order_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'Austin Musiku','musiku47@gmail.com','2488','0793682778','mpesa',140,''),(2,'Austin Musiku','musiku47@gmail.com','2488','0793682778','cash',140,'[object Object]'),(5,'Austin Musiku','musiku47@gmail.com','2488','0793682778','cash',140,'[{\"Id\":1,\"Title\":\"500g Honey jar\",\"Unit_Price\":140,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":1}]'),(6,'AustinDev','musiku47@gmail.com','2488','0100901994','mpesa',980,'[{\"Id\":2,\"Title\":\"1kg Honey Jar\",\"Unit_Price\":280,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":2},{\"Id\":1,\"Title\":\"500g Honey jar\",\"Unit_Price\":140,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":3}]'),(7,'Austin Musiku','musiku47@gmail.com','2488','0793682778','mpesa',140,'[{\"Id\":1,\"Title\":\"500g Honey jar\",\"Unit_Price\":140,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":\"1\"}]'),(8,'Austin Musiku','musiku47@gmail.com','2488','0793682778','cash',1120,'[{\"Id\":1,\"Title\":\"500g Honey jar\",\"Unit_Price\":140,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":\"1\"},{\"Id\":4,\"Title\":\"2kg Honey Jar\",\"Unit_Price\":420,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":\"1\"},{\"Id\":2,\"Title\":\"1kg Honey Jar\",\"Unit_Price\":280,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":2}]'),(9,'musaikolo','musiku47@gmail.com','2488','0793682778','mpesa',1120,'[{\"Id\":1,\"Title\":\"500g Honey jar\",\"Unit_Price\":140,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":\"1\"},{\"Id\":4,\"Title\":\"2kg Honey Jar\",\"Unit_Price\":420,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":\"1\"},{\"Id\":2,\"Title\":\"1kg Honey Jar\",\"Unit_Price\":280,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":2}]'),(10,'musaikolo','musiku47@gmail.com','2488','0793682778','mpesa',0,'[]'),(11,'Austin Idulani','musiku47@gmail.com','2488','0793682778','mpesa',280,'[{\"Id\":2,\"Title\":\"1kg Honey Jar\",\"Unit_Price\":280,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":\"1\"}]'),(12,'Austin Musiku','musiku47@gmail.com','2488','0793682778','mpesa',6440,'[{\"Id\":2,\"Title\":\"1kg Honey Jar\",\"Unit_Price\":280,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":23}]'),(13,'Austin Musiku','musiku47@gmail.com','2488','0793682778','cash',560,'[{\"Id\":2,\"Title\":\"1kg Honey Jar\",\"Unit_Price\":280,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":2}]'),(14,'Austin Musiku','musiku47@gmail.com','2488','0793682778','cash',1400,'[{\"Id\":2,\"Title\":\"1kg Honey Jar\",\"Unit_Price\":280,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":2},{\"Id\":4,\"Title\":\"2kg Honey Jar\",\"Unit_Price\":420,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":2}]'),(15,'Austin Musiku','musiku47@gmail.com','2488','0793682778','cash',560,'[{\"Id\":2,\"Title\":\"1kg Honey Jar\",\"Unit_Price\":280,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":2}]');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(30) NOT NULL,
  `Unit_Price` int(10) NOT NULL,
  `Img_Url` varchar(45) DEFAULT NULL,
  `Quantity` varchar(45) DEFAULT '1',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'500g Honey jar',140,'/public/assets/jar.jpg','1'),(2,'1kg Honey Jar',280,'/public/assets/jar.jpg','1'),(4,'2kg Honey Jar',420,'/public/assets/jar.jpg','1');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*INSERT INTO `sessions` VALUES ('W13W0xFgOjKXVjNoDhBUIegrKYbLXfcJ',1625173796,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"8a614fdf-1534-4eb1-9d42-285b8af2806a\",\"cart\":[{\"Id\":2,\"Title\":\"1kg Honey Jar\",\"Unit_Price\":280,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":\"1\"},{\"Id\":4,\"Title\":\"2kg Honey Jar\",\"Unit_Price\":420,\"Img_Url\":\"/public/assets/jar.jpg\",\"Quantity\":\"1\"}]}'),('gVbho71TjpxddNQfoCDod5zIso9k8zVW',1625154377,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"6bcf2321-9a2c-4758-b215-769da568b228\"}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-01 15:51:31
