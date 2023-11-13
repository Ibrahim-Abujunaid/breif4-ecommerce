-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 13, 2023 at 08:08 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce2`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `image` varchar(100) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(11) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `role_id` int(11) NOT NULL DEFAULT 2,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`image`, `id`, `username`, `password`, `email`, `role_id`, `created_at`) VALUES
('user5.jpg', 5, 'isra', '123456', 'isr@gmail.com', 2, '2023-11-12 08:14:49'),
(NULL, 9, 'testuser', 'testpasswor', 'testuser@example.com', 2, '2023-11-11 09:49:34'),
(NULL, 10, 'abod ', 'abod12345', 'userahmad@example.com', 2, '2023-11-11 09:52:43'),
(NULL, 13, 'abdalrahman', 'Abod12345', 'abdalhababseh@outlook.com', 1, '2023-11-12 08:37:11'),
(NULL, 14, 'shimaa', '1234567', 'shimaa@gmail.com', 2, '2023-11-12 13:40:47'),
('path/to/userimage1.jpg', 15, 'your_username', 'your_passwo', 'your_email@example.com', 2, '2023-11-12 08:22:39'),
('path/to/userge1.jpg', 17, 'yourame', 'youword', 'your_email@emple.com', 2, '2023-11-12 08:23:12'),
(NULL, 18, 'israkk', '123456', 'israaamer28112811@gmail.com', 2, '2023-11-12 08:24:53'),
('path/to/userimage.jpg', 19, 'isrraaa', '1234433', 'new-email@example.com', 2, '2023-11-12 12:47:44'),
(NULL, 20, 'browm', 'abod1234', 'testser@example.com', 2, '2023-11-12 15:54:30'),
(NULL, 21, 'assaS', '123456', 'israa2SS8@gmail.com', 2, '2023-11-12 17:50:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
