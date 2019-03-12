-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 12, 2019 at 08:34 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newgamephp`
--

-- --------------------------------------------------------

--
-- Table structure for table `users_info`
--

CREATE TABLE `users_info` (
  `user_id` int(11) NOT NULL,
  `username` text NOT NULL,
  `left_position` int(11) NOT NULL,
  `top_position` int(11) NOT NULL,
  `user_color` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users_info`
--

INSERT INTO `users_info` (`user_id`, `username`, `left_position`, `top_position`, `user_color`) VALUES
(86, 'slavko', 535, 384, '#0000ff'),
(87, 'xxxxxx', 375, 162, '#00ff00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users_info`
--
ALTER TABLE `users_info`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users_info`
--
ALTER TABLE `users_info`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
