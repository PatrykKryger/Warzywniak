-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: mysql-warzywniak.alwaysdata.net
-- Generation Time: Oct 19, 2025 at 02:22 PM
-- Server version: 10.11.14-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `warzywniak_db`
--
CREATE DATABASE IF NOT EXISTS `warzywniak_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `warzywniak_db`;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `name`) VALUES
(1, 'Warzywa korzeniowe'),
(2, 'Warzywa liściaste'),
(3, 'Warzywa owocowe');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_date` timestamp NULL DEFAULT current_timestamp(),
  `status` varchar(50) DEFAULT 'Pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price_at_purchase` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `unit` enum('kg','sztuka','pęczek','opakowanie') DEFAULT 'kg',
  `country_of_origin` varchar(50) DEFAULT NULL,
  `stock` int(11) DEFAULT 0,
  `short_description` varchar(255) DEFAULT NULL,
  `calories_per_100g` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `image_url` varchar(1024) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `category_id`, `name`, `price`, `unit`, `country_of_origin`, `stock`, `short_description`, `calories_per_100g`, `created_at`, `image_url`) VALUES
(1, 1, 'Marchew', 3.49, 'kg', 'Polska', 100, 'Świeża marchew', 41, '2025-10-19 10:40:49', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbazarekpolski.pl%2Fprodukt%2Fmarchew-z-natka-1peczek%2F&psig=AOvVaw0gF7Jo7EVpMVpqZsOq0aP8&ust=1760956589508000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMCKsNGIsJADFQAAAAAdAAAAABAh'),
(2, 1, 'Ziemniaki', 2.29, 'kg', 'Polska', 200, 'Jadalne, uniwersalne', 77, '2025-10-19 10:40:49', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fzywnosc-ekologiczna.com.pl%2Fprodukt%2Fziemniak-1kg-bio-swiezy%2F%3Fsrsltid%3DAfmBOorlx8izxa__GLzVxV_5Gi3GV9auiz8f-QA94s8c35POe7JbD8f6&psig=AOvVaw3cEJRmTDF7HNl5MZtYEEYH&ust=1760956654334000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCID8v_CIsJADFQAAAAAdAAAAABAE'),
(3, 1, 'Cebula', 2.99, 'kg', 'Polska', 150, 'Cebula żółta', 40, '2025-10-19 10:40:49', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.obi.pl%2Fporady-i-inspiracje%2Fencyklopedia-roslin%2Fwarzywa%2Fcebula-zwyczajna-opis&psig=AOvVaw0blZauSLICYDWo5f3hBhhe&ust=1760956675454000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJDVyPqIsJADFQAAAAAdAAAAABAE'),
(4, 1, 'Pomidor', 7.99, 'kg', 'Hiszpania', 120, 'Soczyste pomidory', 18, '2025-10-19 10:40:49', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuybc.gov.bc.ca%2Fcommodities%2Ftomatoes%2F&psig=AOvVaw2C7FiKtPlFXrPhZ9RjbeTS&ust=1760956695706000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjroISJsJADFQAAAAAdAAAAABAE'),
(5, 1, 'Ogórek', 5.49, 'sztuka', 'Polska', 180, 'Świeży ogórek', 12, '2025-10-19 10:40:49', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffit.poradnikzdrowie.pl%2Fdiety-i-zywienie%2Fco-jesz%2Fogorek-wlasciwosci-odzywcze-jakie-witaminy-ma-ogorek-aa-En8m-YgFB-ceA7.html&psig=AOvVaw0CPhOMSLKeUKe_s2AXkgdd&ust=1760956718691000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDxio-JsJADFQAAAAAdAAAAABAM'),
(6, 1, 'Papryka czerwona', 12.90, 'kg', 'Holandia', 90, 'Słodka papryka', 31, '2025-10-19 10:40:49', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fesklep.pelcowizna.pl%2Fpl%2Fp%2FPAPRYKA-CZERWONA%2F26657&psig=AOvVaw0uUCSUjc3KjAlTTxciw_L9&ust=1760956769187000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJD0iqeJsJADFQAAAAAdAAAAABAi'),
(7, 1, 'Sałata', 3.99, 'sztuka', 'Polska', 80, 'Sałata masłowa', 15, '2025-10-19 10:40:49', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.esklep-kubus.net%2Fpl%2Fp%2FSalata-maslowa-%2F457&psig=AOvVaw1cBAd4JPsICoMp-YQQT0Jy&ust=1760956787694000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKj466-JsJADFQAAAAAdAAAAABAE'),
(8, 1, 'Brokuł', 6.99, 'sztuka', 'Hiszpania', 70, 'Świeży brokuł', 34, '2025-10-19 10:40:49', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpl.wikipedia.org%2Fwiki%2FBroku%25C5%2582&psig=AOvVaw1rkjiVThaZx9t67xtMzdIh&ust=1760956802270000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIim57aJsJADFQAAAAAdAAAAABAH'),
(9, 1, 'Cukinia', 6.49, 'kg', 'Polska', 110, 'Młoda cukinia', 17, '2025-10-19 10:40:49', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbazarekpolski.pl%2Fprodukt%2Fcukinia-zielona-1kg%2F&psig=AOvVaw2gYQq-Yq49AFXE-vk_Upjm&ust=1760956819944000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIiwn7-JsJADFQAAAAAdAAAAABAE'),
(10, 1, 'Por', 4.99, 'sztuka', 'Polska', 60, 'Aromatyczny por', 31, '2025-10-19 10:40:49', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffit.poradnikzdrowie.pl%2Fdiety-i-zywienie%2Fco-jesz%2Fpor-wlasciwosci-i-wartosci-odzywcze-aa-tqZC-BbFC-Y4db.html&psig=AOvVaw0wd2R_4neQVcCT5uoeTPzh&ust=1760956833895000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPi17sWJsJADFQAAAAAdAAAAABAE');

-- --------------------------------------------------------

--
-- Table structure for table `shop_info`
--

CREATE TABLE `shop_info` (
  `shop_id` int(11) NOT NULL,
  `shop_name` varchar(100) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `opening_hours` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `mail` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `name`, `mail`, `created_at`) VALUES
(1, 'admin', 'admin', 'admin', 'pushneex@gmail.com', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `shop_info`
--
ALTER TABLE `shop_info`
  ADD PRIMARY KEY (`shop_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `shop_info`
--
ALTER TABLE `shop_info`
  MODIFY `shop_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
