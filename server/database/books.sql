-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Nov 19. 14:16
-- Kiszolgáló verziója: 10.4.14-MariaDB
-- PHP verzió: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `books`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `books`
--

CREATE TABLE `books` (
  `book_id` int(11) NOT NULL,
  `title` varchar(55) NOT NULL,
  `author` varchar(55) NOT NULL,
  `description` varchar(150) NOT NULL,
  `category` varchar(55) NOT NULL,
  `published` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `img` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `books`
--

INSERT INTO `books` (`book_id`, `title`, `author`, `description`, `category`, `published`, `img`) VALUES
(1, 'A Programozás alapjai', 'ismeretlen', 'Lorem ipsum dolor sit amet consectetur adipisicing elit', 'Programming', '2022-11-18 17:33:50', 'https://static-assets.codecademy.com/components/curriculum/path/front-end-engineer-career-path/curriculum-card.svg'),
(2, 'SQL', 'ismeretlen', 'Lorem ipsum dolor sit amet consectetur adipisicing elit', 'SQL', '2022-11-18 17:33:57', 'https://static-assets.codecademy.com/components/curriculum/path/front-end-engineer-career-path/curriculum-card.svg'),
(3, 'A Programozás alapjai', 'ismeretlen', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eum doloribus et libero facilis incidunt?', 'Programming', '2022-11-18 17:33:55', 'https://static-assets.codecademy.com/components/curriculum/path/front-end-engineer-career-path/curriculum-card.svg'),
(4, 'SQL', 'ismeretlen', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eum doloribus et libero facilis incidunt?', 'SQL', '2022-11-18 17:33:59', 'https://static-assets.codecademy.com/components/curriculum/path/front-end-engineer-career-path/curriculum-card.svg');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `books`
--
ALTER TABLE `books`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
