-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Jun 04, 2024 at 09:31 AM
-- Server version: 8.4.0
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Doctor`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `AppointmentId` int NOT NULL,
  `AppointmentDate` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `AppointmentReason` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `AppointmentStatus` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `AppointmentHealthStatus` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `AppointmentTime` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `AppointmentRemark` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `MedicalRecordStatus` tinyint(1) NOT NULL,
  `PatientId` int NOT NULL,
  `DoctorId` int NOT NULL,
  `MedicalRecordId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`AppointmentId`, `AppointmentDate`, `AppointmentReason`, `AppointmentStatus`, `AppointmentHealthStatus`, `AppointmentTime`, `AppointmentRemark`, `MedicalRecordStatus`, `PatientId`, `DoctorId`, `MedicalRecordId`, `createdAt`, `updatedAt`) VALUES
(1, '2024-06-02', 'fever', 'cancelled', 'booked', '12:30', 'Cancelled by patient', 1, 1, 1, 4, '2024-06-01 06:48:35', '2024-06-01 13:50:11'),
(2, '2024-06-10', 'fever', 'cancelled', 'booked', '18:30', 'Cancelled by patient', 1, 1, 1, 5, '2024-06-01 13:28:07', '2024-06-01 13:46:30'),
(3, '2024-06-10', 'sample', 'cancelled', 'booked', '19:30', 'wrong appointment', 1, 1, 2, 6, '2024-06-01 13:48:08', '2024-06-01 14:35:12'),
(4, '2024-06-17', 'sample', 'completed', 'completed', '20:00', 'booked by patient', 1, 1, 1, 7, '2024-06-01 13:51:01', '2024-06-01 13:51:43'),
(5, '2024-06-03', 'data', 'expired', 'booked', '13:30', 'Customer missed the slot', 1, 1, 2, 8, '2024-06-01 14:46:37', '2024-06-01 14:46:59'),
(6, '2024-06-10', 'ajwdlad', 'cancelled', 'booked', '15:30', 'i am on leave', 0, 8, 1, NULL, '2024-06-01 16:05:08', '2024-06-02 07:43:08'),
(7, '2024-06-10', 'ajwdlad', 'booked', 'booked', '15:30', 'booked by patient', 0, 8, 1, NULL, '2024-06-01 16:05:52', '2024-06-01 16:05:52'),
(8, '2024-06-10', 'ajwdlad', 'booked', 'booked', '15:30', 'booked by patient', 0, 8, 1, NULL, '2024-06-01 16:06:28', '2024-06-01 16:06:28'),
(9, '2024-06-13', 'asd', 'booked', 'booked', '09:30', 'booked by patient', 0, 8, 2, NULL, '2024-06-01 16:08:17', '2024-06-01 16:08:17'),
(10, '2024-06-03', 'asease', 'cancelled', 'booked', '14:00', 'i want to cancel', 1, 9, 1, 9, '2024-06-01 16:21:34', '2024-06-01 16:22:10'),
(11, '2024-06-03', 'adasdasd', 'expired', 'booked', '16:30', 'Customer missed the slot', 0, 9, 2, NULL, '2024-06-01 16:22:42', '2024-06-01 16:22:42'),
(12, '2024-06-03', 'fever', 'expired', 'booked', '12:00', 'Customer missed the slot', 0, 9, 1, NULL, '2024-06-02 05:16:36', '2024-06-02 05:16:36'),
(13, '2024-06-03', 'fever', 'expired', 'booked', '12:00', 'Customer missed the slot', 0, 9, 1, NULL, '2024-06-02 05:42:14', '2024-06-02 05:42:14'),
(14, '2024-06-08', 'fever', 'booked', 'booked', '12:30', 'booked by patient', 0, 9, 1, NULL, '2024-06-02 05:50:24', '2024-06-02 05:50:24'),
(15, '2024-06-08', 'feever', 'booked', 'booked', '12:30', 'booked by patient', 0, 9, 1, NULL, '2024-06-02 05:51:59', '2024-06-02 05:51:59'),
(16, '2024-06-08', 'sample', 'booked', 'booked', '13:30', 'booked by patient', 0, 9, 1, NULL, '2024-06-02 05:55:51', '2024-06-02 05:55:51'),
(17, '2024-06-12', 'feeveer', 'booked', 'booked', '13:30', 'booked by patient', 0, 9, 1, NULL, '2024-06-02 05:56:10', '2024-06-02 05:56:10'),
(18, '2024-06-08', 'feeeeveeeer', 'cancelled', 'booked', '13:30', 'Wrongly booked', 0, 9, 2, NULL, '2024-06-02 05:56:45', '2024-06-02 06:02:05'),
(19, '2024-06-03', 'fever', 'expired', 'booked', '13:30', 'Customer missed the slot', 0, 9, 1, NULL, '2024-06-02 08:27:10', '2024-06-02 08:27:10'),
(20, '2024-06-03', 'fever', 'completed', 'booked', '14:30', 'booked by patient', 1, 9, 1, 10, '2024-06-02 08:27:37', '2024-06-02 08:40:55'),
(21, '2024-06-03', 'fever\n', 'expired', 'booked', '15:00', 'Customer missed the slot', 0, 9, 1, NULL, '2024-06-02 08:41:56', '2024-06-02 08:41:56'),
(22, '2024-06-03', 'fever', 'completed', 'booked', '15:30', 'booked by patient', 1, 9, 1, 11, '2024-06-02 08:44:00', '2024-06-02 08:50:06'),
(23, '2024-06-03', 'fever', 'completed', 'booked', '16:00', 'booked by patient', 1, 9, 1, 12, '2024-06-02 08:53:17', '2024-06-02 08:54:54'),
(24, '2024-06-03', 'fever', 'expired', 'booked', '16:00', 'Customer missed the slot', 0, 9, 2, NULL, '2024-06-02 08:53:41', '2024-06-02 08:53:41'),
(25, '2024-06-15', 'cough', 'booked', 'booked', '13:00', 'booked by patient', 0, 9, 2, NULL, '2024-06-04 09:14:02', '2024-06-04 09:14:02'),
(26, '2024-06-15', 'fever', 'booked', 'booked', '13:00', 'booked by patient', 0, 9, 1, NULL, '2024-06-04 09:29:49', '2024-06-04 09:29:49');

-- --------------------------------------------------------

--
-- Stand-in structure for view `AppointmentView`
-- (See below for the actual view)
--
-- CREATE TABLE `AppointmentView` (
-- `AppointmentDate` varchar(255)
-- ,`AppointmentHealthStatus` varchar(255)
-- ,`AppointmentId` int
-- ,`AppointmentReason` varchar(255)
-- ,`AppointmentRemark` varchar(255)
-- ,`AppointmentStatus` varchar(255)
-- ,`AppointmentTime` varchar(255)
-- ,`DoctorDesignation` varchar(255)
-- ,`DoctorId` int
-- ,`DoctorMobile` varchar(255)
-- ,`DoctorName` varchar(255)
-- ,`DoctorQualification` varchar(255)
-- ,`DoctorStatus` varchar(255)
-- ,`MedicalRecordId` int
-- ,`MedicalRecordStatus` tinyint(1)
-- ,`PatientAddress` varchar(255)
-- ,`PatientAge` int
-- ,`PatientBloodGroup` varchar(255)
-- ,`PatientDOB` varchar(255)
-- ,`PatientGender` varchar(255)
-- ,`PatientId` int
-- ,`PatientMobile` varchar(255)
-- ,`PatientName` varchar(255)
-- ,`UserEmail` varchar(255)
-- );

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `DoctorId` int NOT NULL,
  `DoctorName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `DoctorDesignation` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `DoctorQualification` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `DoctorMobile` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `DoctorAddress` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `DoctorStatus` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `UserId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`DoctorId`, `DoctorName`, `DoctorDesignation`, `DoctorQualification`, `DoctorMobile`, `DoctorAddress`, `DoctorStatus`, `UserId`, `createdAt`, `updatedAt`) VALUES
(1, 'Kavinraj K', 'Senior doctor', 'MBBS', '9754321781', 'Sathy, erode', 'Available', 2, '2024-06-01 06:23:13', '2024-06-03 06:44:44'),
(2, 'Hariaharan P', 'Otho surgeon', 'MBBS, Ortho', '987654210', 'kothukadu, sathy', 'Available', 3, '2024-06-01 15:18:34', '2024-06-01 15:18:34');

-- --------------------------------------------------------

--
-- Table structure for table `medicalRecords`
--

CREATE TABLE `medicalRecords` (
  `MedicalRecordId` int NOT NULL,
  `Height` int NOT NULL,
  `Weight` int NOT NULL,
  `Pressure` int NOT NULL,
  `Temperature` int NOT NULL,
  `MedicalRecordRemark` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Symptoms` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Medications` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Treatments` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `PatientId` int NOT NULL,
  `DoctorId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medicalRecords`
--

INSERT INTO `medicalRecords` (`MedicalRecordId`, `Height`, `Weight`, `Pressure`, `Temperature`, `MedicalRecordRemark`, `Symptoms`, `Medications`, `Treatments`, `PatientId`, `DoctorId`, `createdAt`, `updatedAt`) VALUES
(4, 162, 62, 100, 56, 'sample', 'cough', 'tablets', 'injection', 1, 1, '2024-06-01 13:11:42', '2024-06-01 13:11:42'),
(5, 60, 160, 90, 57, 'sample', 'cough', 'tablets', 'injection', 1, 1, '2024-06-01 13:28:55', '2024-06-01 13:28:55'),
(6, 125, 45, 100, 45, 'sample', 'sample', 'sample', 'sample', 1, 2, '2024-06-01 13:48:41', '2024-06-01 13:48:41'),
(7, 175, 68, 100, 56, 'sample', 'sample', 'sample', 'sample', 1, 1, '2024-06-01 13:51:43', '2024-06-01 13:51:43'),
(8, 10, 10, 10, 10, 'sample', 'sample', 'sample', 'sample', 1, 2, '2024-06-01 14:46:59', '2024-06-01 14:46:59'),
(9, 100, 100, 100, 100, 'dayta', 'data', 'data', 'data', 9, 1, '2024-06-01 16:22:00', '2024-06-01 16:22:00'),
(10, 176, 65, 100, 56, 'samoke', 'cough', 'tablet', 'injection', 9, 1, '2024-06-02 08:28:19', '2024-06-02 08:28:19'),
(11, 176, 76, 100, 65, 'sample', 'sample', 'sampe', 'sample', 9, 1, '2024-06-02 08:44:42', '2024-06-02 08:44:42'),
(12, 176, 76, 76, 65, 'sample', 'sample', 'sample', 'sample', 9, 1, '2024-06-02 08:54:11', '2024-06-02 08:54:11');

-- --------------------------------------------------------

--
-- Stand-in structure for view `MedicalRecordView`
-- (See below for the actual view)
-- --
-- CREATE TABLE `MedicalRecordView` (
-- `createdAt` datetime
-- ,`DoctorId` int
-- ,`DoctorName` varchar(255)
-- ,`Height` int
-- ,`MedicalRecordId` int
-- ,`MedicalRecordRemark` varchar(255)
-- ,`Medications` varchar(255)
-- ,`PatientId` int
-- ,`PatientMobile` varchar(255)
-- ,`PatientName` varchar(255)
-- ,`Pressure` int
-- ,`Symptoms` varchar(255)
-- ,`Temperature` int
-- ,`Treatments` varchar(255)
-- ,`Weight` int
-- );

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `PatientId` int NOT NULL,
  `PatientName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `PatientAge` int NOT NULL,
  `PatientGender` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `PatientDOB` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `PatientMobile` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `PatientBloodGroup` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `PatientAddress` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `PatientAccountStatus` varchar(255) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'true',
  `UserId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`PatientId`, `PatientName`, `PatientAge`, `PatientGender`, `PatientDOB`, `PatientMobile`, `PatientBloodGroup`, `PatientAddress`, `PatientAccountStatus`, `UserId`, `createdAt`, `updatedAt`) VALUES
(1, 'Sai Prashanth K', 22, 'male', '26-03-2001', '9754321781', 'B+ve', 'Sathy, erode', 'true', 1, '2024-06-01 06:23:13', '2024-06-01 06:23:13'),
(8, 'ajshdkjahdkjahdkjas', 12, 'Male', '1212-12-12', '123445673', 'jkb', 'sijdlansdlnadsl khbkjbk', 'true', 11, '2024-06-01 15:46:19', '2024-06-01 15:46:19'),
(9, 'sai', 22, 'Male', '2001-03-26', '1234567890', 'b', 'asnand', 'true', 12, '2024-06-01 16:20:37', '2024-06-01 16:20:37');

-- --------------------------------------------------------

--
-- Table structure for table `prescriptions`
--

CREATE TABLE `prescriptions` (
  `PrescriptionId` int NOT NULL,
  `Disease` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Prescription` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `PrescriptionRemark` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `DoctorId` int NOT NULL,
  `PatientId` int NOT NULL,
  `AppointmentId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prescriptions`
--

INSERT INTO `prescriptions` (`PrescriptionId`, `Disease`, `Prescription`, `PrescriptionRemark`, `DoctorId`, `PatientId`, `AppointmentId`, `createdAt`, `updatedAt`) VALUES
(1, 'Colds and Flu', 'Paracetamol -5\nsyrum - 100ml', 'after dinner', 1, 1, 4, '2024-06-02 07:25:59', '2024-06-02 07:25:59'),
(7, 'Colds and Flu', 'asasd asdasd\nasdasd', 'saasd ', 1, 9, 20, '2024-06-02 08:40:55', '2024-06-02 08:40:55'),
(8, 'Depression', 'jnl jnln', 'jnnl nlknlkn', 1, 9, 22, '2024-06-02 08:50:06', '2024-06-02 08:50:06'),
(9, 'Colds and Flu', 'tablets -5 ', 'sample', 1, 9, 23, '2024-06-02 08:54:54', '2024-06-02 08:54:54');

-- --------------------------------------------------------

--
-- Stand-in structure for view `PrescriptionView`
-- (See below for the actual view)
--
-- CREATE TABLE `PrescriptionView` (
-- `AppointmentDate` varchar(255)
-- ,`AppointmentId` int
-- ,`AppointmentReason` varchar(255)
-- ,`AppointmentStatus` varchar(255)
-- ,`AppointmentTime` varchar(255)
-- ,`createdAt` datetime
-- ,`Disease` varchar(255)
-- ,`DoctorDesignation` varchar(255)
-- ,`DoctorId` int
-- ,`DoctorMobile` varchar(255)
-- ,`DoctorName` varchar(255)
-- ,`DoctorStatus` varchar(255)
-- ,`PatientAddress` varchar(255)
-- ,`PatientAge` int
-- ,`PatientBloodGroup` varchar(255)
-- ,`PatientDOB` varchar(255)
-- ,`PatientGender` varchar(255)
-- ,`PatientId` int
-- ,`PatientMobile` varchar(255)
-- ,`PatientName` varchar(255)
-- ,`Prescription` varchar(255)
-- ,`PrescriptionId` int
-- ,`PrescriptionRemark` varchar(255)
-- );

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserId` int NOT NULL,
  `UserEmail` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `UserPassword` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `UserRole` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserId`, `UserEmail`, `UserPassword`, `UserRole`, `createdAt`, `updatedAt`) VALUES
(1, 'sai@gmail.com', 'sai1234', 'patient', '2024-06-01 06:23:13', '2024-06-01 06:23:13'),
(2, 'kavin@gmail.com', 'kavin123', 'doctor', '2024-06-01 06:23:13', '2024-06-01 06:23:13'),
(3, 'hari@gmail.com', 'hari123', 'doctor', '2024-06-01 15:18:09', '2024-06-01 15:18:09'),
(11, 'vigneshleefc@gmail.com', 'sai', 'patient', '2024-06-01 15:46:19', '2024-06-01 15:46:19'),
(12, 'saiprashanth.cs21@bitsathy.ac.in', 'sai', 'patient', '2024-06-01 16:20:37', '2024-06-01 16:20:37');

-- --------------------------------------------------------

--
-- Structure for view `AppointmentView`
--
DROP TABLE IF EXISTS `AppointmentView`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `AppointmentView`  AS SELECT `T1`.`AppointmentId` AS `AppointmentId`, `T1`.`AppointmentDate` AS `AppointmentDate`, `T1`.`AppointmentReason` AS `AppointmentReason`, `T1`.`AppointmentTime` AS `AppointmentTime`, `T1`.`AppointmentStatus` AS `AppointmentStatus`, `T1`.`AppointmentHealthStatus` AS `AppointmentHealthStatus`, `T1`.`AppointmentRemark` AS `AppointmentRemark`, `T1`.`MedicalRecordStatus` AS `MedicalRecordStatus`, `T1`.`MedicalRecordId` AS `MedicalRecordId`, `T2`.`DoctorId` AS `DoctorId`, `T2`.`DoctorName` AS `DoctorName`, `T2`.`DoctorQualification` AS `DoctorQualification`, `T2`.`DoctorDesignation` AS `DoctorDesignation`, `T2`.`DoctorStatus` AS `DoctorStatus`, `T2`.`DoctorMobile` AS `DoctorMobile`, `T3`.`PatientId` AS `PatientId`, `T3`.`PatientName` AS `PatientName`, `T3`.`PatientGender` AS `PatientGender`, `T3`.`PatientBloodGroup` AS `PatientBloodGroup`, `T3`.`PatientDOB` AS `PatientDOB`, `T3`.`PatientAge` AS `PatientAge`, `T3`.`PatientAddress` AS `PatientAddress`, `T3`.`PatientMobile` AS `PatientMobile`, `T4`.`UserEmail` AS `UserEmail` FROM (((`appointments` `T1` join `doctors` `T2` on((`T1`.`DoctorId` = `T2`.`DoctorId`))) join `patients` `T3` on((`T1`.`PatientId` = `T3`.`PatientId`))) join `users` `T4` on((`T3`.`UserId` = `T4`.`UserId`))) ;

-- --------------------------------------------------------

--
-- Structure for view `MedicalRecordView`
--
DROP TABLE IF EXISTS `MedicalRecordView`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `MedicalRecordView`  AS SELECT `t1`.`MedicalRecordId` AS `MedicalRecordId`, `t1`.`Height` AS `Height`, `t1`.`Weight` AS `Weight`, `t1`.`Pressure` AS `Pressure`, `t1`.`Temperature` AS `Temperature`, `t1`.`createdAt` AS `createdAt`, `t1`.`MedicalRecordRemark` AS `MedicalRecordRemark`, `t1`.`Symptoms` AS `Symptoms`, `t1`.`Medications` AS `Medications`, `t1`.`Treatments` AS `Treatments`, `t2`.`PatientId` AS `PatientId`, `t2`.`PatientName` AS `PatientName`, `t2`.`PatientMobile` AS `PatientMobile`, `t3`.`DoctorId` AS `DoctorId`, `t3`.`DoctorName` AS `DoctorName` FROM ((`medicalRecords` `t1` join `patients` `t2` on((`t1`.`PatientId` = `t2`.`PatientId`))) join `doctors` `t3` on((`t1`.`DoctorId` = `t3`.`DoctorId`))) ;

-- --------------------------------------------------------

--
-- Structure for view `PrescriptionView`
--
DROP TABLE IF EXISTS `PrescriptionView`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `PrescriptionView`  AS SELECT `t1`.`PrescriptionId` AS `PrescriptionId`, `t1`.`Disease` AS `Disease`, `t1`.`Prescription` AS `Prescription`, `t1`.`PrescriptionRemark` AS `PrescriptionRemark`, `t1`.`createdAt` AS `createdAt`, `t2`.`DoctorId` AS `DoctorId`, `t2`.`DoctorName` AS `DoctorName`, `t2`.`DoctorDesignation` AS `DoctorDesignation`, `t2`.`DoctorStatus` AS `DoctorStatus`, `t2`.`DoctorMobile` AS `DoctorMobile`, `t3`.`PatientId` AS `PatientId`, `t3`.`PatientName` AS `PatientName`, `t3`.`PatientGender` AS `PatientGender`, `t3`.`PatientBloodGroup` AS `PatientBloodGroup`, `t3`.`PatientDOB` AS `PatientDOB`, `t3`.`PatientAge` AS `PatientAge`, `t3`.`PatientAddress` AS `PatientAddress`, `t3`.`PatientMobile` AS `PatientMobile`, `t4`.`AppointmentId` AS `AppointmentId`, `t4`.`AppointmentStatus` AS `AppointmentStatus`, `t4`.`AppointmentDate` AS `AppointmentDate`, `t4`.`AppointmentTime` AS `AppointmentTime`, `t4`.`AppointmentReason` AS `AppointmentReason` FROM (((`prescriptions` `t1` join `doctors` `t2` on((`t1`.`DoctorId` = `t2`.`DoctorId`))) join `patients` `t3` on((`t1`.`PatientId` = `t3`.`PatientId`))) join `appointments` `t4` on((`t1`.`AppointmentId` = `t4`.`AppointmentId`))) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`AppointmentId`),
  ADD KEY `PatientId` (`PatientId`),
  ADD KEY `DoctorId` (`DoctorId`),
  ADD KEY `MedicalRecordId` (`MedicalRecordId`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`DoctorId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `medicalRecords`
--
ALTER TABLE `medicalRecords`
  ADD PRIMARY KEY (`MedicalRecordId`),
  ADD KEY `PatientId` (`PatientId`),
  ADD KEY `DoctorId` (`DoctorId`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`PatientId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `prescriptions`
--
ALTER TABLE `prescriptions`
  ADD PRIMARY KEY (`PrescriptionId`),
  ADD KEY `DoctorId` (`DoctorId`),
  ADD KEY `PatientId` (`PatientId`),
  ADD KEY `AppointmentId` (`AppointmentId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`),
  ADD UNIQUE KEY `UserEmail` (`UserEmail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `AppointmentId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `DoctorId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `medicalRecords`
--
ALTER TABLE `medicalRecords`
  MODIFY `MedicalRecordId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `PatientId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `prescriptions`
--
ALTER TABLE `prescriptions`
  MODIFY `PrescriptionId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`),
  ADD CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`DoctorId`) REFERENCES `doctors` (`DoctorId`),
  ADD CONSTRAINT `appointments_ibfk_3` FOREIGN KEY (`MedicalRecordId`) REFERENCES `medicalRecords` (`MedicalRecordId`);

--
-- Constraints for table `doctors`
--
ALTER TABLE `doctors`
  ADD CONSTRAINT `doctors_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`);

--
-- Constraints for table `medicalRecords`
--
ALTER TABLE `medicalRecords`
  ADD CONSTRAINT `medicalRecords_ibfk_1` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`),
  ADD CONSTRAINT `medicalRecords_ibfk_2` FOREIGN KEY (`DoctorId`) REFERENCES `doctors` (`DoctorId`);

--
-- Constraints for table `patients`
--
ALTER TABLE `patients`
  ADD CONSTRAINT `patients_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`);

--
-- Constraints for table `prescriptions`
--
ALTER TABLE `prescriptions`
  ADD CONSTRAINT `prescriptions_ibfk_1` FOREIGN KEY (`DoctorId`) REFERENCES `doctors` (`DoctorId`),
  ADD CONSTRAINT `prescriptions_ibfk_2` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`),
  ADD CONSTRAINT `prescriptions_ibfk_3` FOREIGN KEY (`AppointmentId`) REFERENCES `appointments` (`AppointmentId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
