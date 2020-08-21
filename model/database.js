require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "recipeideas",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE IF EXISTS `users`; /*!40101 SET @saved_cs_client     = @@character_set_client */; /*!50503 SET character_set_client = utf8mb4 */; CREATE TABLE `users` (   `id` int NOT NULL AUTO_INCREMENT,   `username` varchar(45) DEFAULT NULL,   `password` varchar(255) DEFAULT NULL,   PRIMARY KEY (`id`),   UNIQUE KEY `username_UNIQUE` (`username`) ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;   DROP TABLE IF EXISTS `favourites`; /*!40101 SET @saved_cs_client     = @@character_set_client */; /*!50503 SET character_set_client = utf8mb4 */; CREATE TABLE `favourites` (   `id` int NOT NULL AUTO_INCREMENT,   `userId` int DEFAULT NULL,   `recipeId` int DEFAULT NULL,   PRIMARY KEY (`id`),   KEY `fk_users_id_idx` (`userId`),   CONSTRAINT `fk_users_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci; /*!40101 SET character_set_client = @saved_cs_client */;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `information` was successful!");

    console.log("Closing...");
  });

  con.end();
});
