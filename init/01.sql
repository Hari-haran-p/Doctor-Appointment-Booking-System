-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2024 at 05:26 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `doctor`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `AppointmentId` int(11) NOT NULL,
  `AppointmentDate` varchar(255) NOT NULL,
  `AppointmentReason` varchar(255) NOT NULL,
  `AppointmentStatus` varchar(255) NOT NULL,
  `AppointmentHealthStatus` varchar(255) NOT NULL,
  `AppointmentTime` varchar(255) NOT NULL,
  `AppointmentRemark` varchar(255) NOT NULL,
  `MedicalRecordStatus` tinyint(1) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `DoctorId` int(11) NOT NULL,
  `MedicalRecordId` int(11) DEFAULT NULL,
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
(5, '2024-06-03', 'data', 'booked', 'booked', '13:30', 'booked by patient', 1, 1, 2, 8, '2024-06-01 14:46:37', '2024-06-01 14:46:59'),
(6, '2024-06-10', 'ajwdlad', 'cancelled', 'booked', '15:30', 'i am on leave', 0, 8, 1, NULL, '2024-06-01 16:05:08', '2024-06-02 07:43:08'),
(7, '2024-06-10', 'ajwdlad', 'booked', 'booked', '15:30', 'booked by patient', 0, 8, 1, NULL, '2024-06-01 16:05:52', '2024-06-01 16:05:52'),
(8, '2024-06-10', 'ajwdlad', 'booked', 'booked', '15:30', 'booked by patient', 0, 8, 1, NULL, '2024-06-01 16:06:28', '2024-06-01 16:06:28'),
(9, '2024-06-13', 'asd', 'booked', 'booked', '09:30', 'booked by patient', 0, 8, 2, NULL, '2024-06-01 16:08:17', '2024-06-01 16:08:17'),
(10, '2024-06-03', 'asease', 'cancelled', 'booked', '14:00', 'i want to cancel', 1, 9, 1, 9, '2024-06-01 16:21:34', '2024-06-01 16:22:10'),
(11, '2024-06-03', 'adasdasd', 'booked', 'booked', '16:30', 'booked by patient', 0, 9, 2, NULL, '2024-06-01 16:22:42', '2024-06-01 16:22:42'),
(12, '2024-06-03', 'fever', 'booked', 'booked', '12:00', 'booked by patient', 0, 9, 1, NULL, '2024-06-02 05:16:36', '2024-06-02 05:16:36'),
(13, '2024-06-03', 'fever', 'booked', 'booked', '12:00', 'booked by patient', 0, 9, 1, NULL, '2024-06-02 05:42:14', '2024-06-02 05:42:14'),
(14, '2024-06-08', 'fever', 'booked', 'booked', '12:30', 'booked by patient', 0, 9, 1, NULL, '2024-06-02 05:50:24', '2024-06-02 05:50:24'),
(15, '2024-06-08', 'feever', 'booked', 'booked', '12:30', 'booked by patient', 0, 9, 1, NULL, '2024-06-02 05:51:59', '2024-06-02 05:51:59'),
(16, '2024-06-08', 'sample', 'booked', 'booked', '13:30', 'booked by patient', 0, 9, 1, NULL, '2024-06-02 05:55:51', '2024-06-02 05:55:51'),
(17, '2024-06-12', 'feeveer', 'booked', 'booked', '13:30', 'booked by patient', 0, 9, 1, NULL, '2024-06-02 05:56:10', '2024-06-02 05:56:10'),
(18, '2024-06-08', 'feeeeveeeer', 'cancelled', 'booked', '13:30', 'Wrongly booked', 0, 9, 2, NULL, '2024-06-02 05:56:45', '2024-06-02 06:02:05'),
(19, '2024-06-03', 'fever', 'booked', 'booked', '13:30', 'booked by patient', 0, 9, 1, NULL, '2024-06-02 08:27:10', '2024-06-02 08:27:10'),
(20, '2024-06-03', 'fever', 'completed', 'booked', '14:30', 'booked by patient', 1, 9, 1, 10, '2024-06-02 08:27:37', '2024-06-02 08:40:55'),
(21, '2024-06-03', 'fever\n', 'booked', 'booked', '15:00', 'booked by patient', 0, 9, 1, NULL, '2024-06-02 08:41:56', '2024-06-02 08:41:56'),
(22, '2024-06-03', 'fever', 'completed', 'booked', '15:30', 'booked by patient', 1, 9, 1, 11, '2024-06-02 08:44:00', '2024-06-02 08:50:06'),
(23, '2024-06-03', 'fever', 'completed', 'booked', '16:00', 'booked by patient', 1, 9, 1, 12, '2024-06-02 08:53:17', '2024-06-02 08:54:54'),
(24, '2024-06-03', 'fever', 'booked', 'booked', '16:00', 'booked by patient', 0, 9, 2, NULL, '2024-06-02 08:53:41', '2024-06-02 08:53:41');

-- --------------------------------------------------------

--
-- Stand-in structure for view `appointmentview`
-- (See below for the actual view)
--
-- CREATE TABLE `AppointmentView` (
-- `AppointmentId` int(11)
-- ,`AppointmentDate` varchar(255)
-- ,`AppointmentReason` varchar(255)
-- ,`AppointmentTime` varchar(255)
-- ,`AppointmentStatus` varchar(255)
-- ,`AppointmentHealthStatus` varchar(255)
-- ,`AppointmentRemark` varchar(255)
-- ,`MedicalRecordStatus` tinyint(1)
-- ,`MedicalRecordId` int(11)
-- ,`DoctorId` int(11)
-- ,`DoctorName` varchar(255)
-- ,`DoctorDesignation` varchar(255)
-- ,`DoctorStatus` varchar(255)
-- ,`DoctorMobile` varchar(255)
-- ,`PatientId` int(11)
-- ,`PatientName` varchar(255)
-- ,`PatientGender` varchar(255)
-- ,`PatientBloodGroup` varchar(255)
-- ,`PatientDOB` varchar(255)
-- ,`PatientAge` int(11)
-- ,`PatientAddress` varchar(255)
-- ,`PatientMobile` varchar(255)
-- );

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `DoctorId` int(11) NOT NULL,
  `DoctorName` varchar(255) NOT NULL,
  `DoctorDesignation` varchar(255) NOT NULL,
  `DoctorQualification` varchar(255) NOT NULL,
  `DoctorMobile` varchar(255) NOT NULL,
  `DoctorAddress` varchar(255) NOT NULL,
  `DoctorStatus` varchar(255) NOT NULL,
  `UserId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`DoctorId`, `DoctorName`, `DoctorDesignation`, `DoctorQualification`, `DoctorMobile`, `DoctorAddress`, `DoctorStatus`, `UserId`, `createdAt`, `updatedAt`) VALUES
(1, 'Kavinraj K', 'Senior doctor', 'MBBS', '9754321781', 'Sathy, erode', 'Available', 2, '2024-06-01 06:23:13', '2024-06-01 06:23:13'),
(2, 'Hariaharan P', 'Otho surgeon', 'MBBS, Ortho', '987654210', 'kothukadu, sathy', 'Available', 3, '2024-06-01 15:18:34', '2024-06-01 15:18:34');

-- --------------------------------------------------------

--
-- Table structure for table `medicalrecords`
--

CREATE TABLE `medicalRecords` (
  `MedicalRecordId` int(11) NOT NULL,
  `Height` int(11) NOT NULL,
  `Weight` int(11) NOT NULL,
  `Pressure` int(11) NOT NULL,
  `Temperature` int(11) NOT NULL,
  `MedicalRecordRemark` varchar(255) NOT NULL,
  `Symptoms` varchar(255) NOT NULL,
  `Medications` varchar(255) NOT NULL,
  `Treatments` varchar(255) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `DoctorId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medicalrecords`
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
-- Stand-in structure for view `medicalrecordview`
-- (See below for the actual view)
--
-- CREATE TABLE `MedicalRecordView` (
-- `MedicalRecordId` int(11)
-- ,`Height` int(11)
-- ,`Weight` int(11)
-- ,`Pressure` int(11)
-- ,`temperature` int(11)
-- ,`MedicalRecordRemark` varchar(255)
-- ,`Symptoms` varchar(255)
-- ,`Medications` varchar(255)
-- ,`Treatments` varchar(255)
-- ,`PatientId` int(11)
-- ,`PatientName` varchar(255)
-- ,`PatientMobile` varchar(255)
-- ,`DoctorId` int(11)
-- ,`DoctorName` varchar(255)
-- );

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `PatientId` int(11) NOT NULL,
  `PatientName` varchar(255) NOT NULL,
  `PatientAge` int(11) NOT NULL,
  `PatientGender` varchar(255) NOT NULL,
  `PatientDOB` varchar(255) NOT NULL,
  `PatientMobile` varchar(255) NOT NULL,
  `PatientBloodGroup` varchar(255) NOT NULL,
  `PatientAddress` varchar(255) NOT NULL,
  `PatientAccountStatus` varchar(255) NOT NULL DEFAULT 'true',
  `UserId` int(11) NOT NULL,
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
  `PrescriptionId` int(11) NOT NULL,
  `Disease` varchar(255) NOT NULL,
  `Prescription` varchar(255) NOT NULL,
  `PrescriptionRemark` varchar(255) NOT NULL,
  `DoctorId` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `AppointmentId` int(11) NOT NULL,
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
-- Stand-in structure for view `prescriptionview`
-- (See below for the actual view)
--
-- CREATE TABLE `PrescriptionView` (
-- `PrescriptionId` int(11)
-- ,`Disease` varchar(255)
-- ,`Prescription` varchar(255)
-- ,`PrescriptionRemark` varchar(255)
-- ,`createdAt` datetime
-- ,`DoctorId` int(11)
-- ,`DoctorName` varchar(255)
-- ,`DoctorDesignation` varchar(255)
-- ,`DoctorStatus` varchar(255)
-- ,`DoctorMobile` varchar(255)
-- ,`PatientId` int(11)
-- ,`PatientName` varchar(255)
-- ,`PatientGender` varchar(255)
-- ,`PatientBloodGroup` varchar(255)
-- ,`PatientDOB` varchar(255)
-- ,`PatientAge` int(11)
-- ,`PatientAddress` varchar(255)
-- ,`PatientMobile` varchar(255)
-- ,`AppointmentId` int(11)
-- ,`AppointmentStatus` varchar(255)
-- ,`AppointmentDate` varchar(255)
-- ,`AppointmentTime` varchar(255)
-- ,`AppointmentReason` varchar(255)
-- );

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserId` int(11) NOT NULL,
  `UserEmail` varchar(255) NOT NULL,
  `UserPassword` varchar(255) NOT NULL,
  `UserRole` varchar(255) NOT NULL,
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
-- Structure for view `appointmentview`
--
DROP TABLE IF EXISTS `appointmentview`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `AppointmentView`  AS SELECT `t1`.`AppointmentId` AS `AppointmentId`, `t1`.`AppointmentDate` AS `AppointmentDate`, `t1`.`AppointmentReason` AS `AppointmentReason`, `t1`.`AppointmentTime` AS `AppointmentTime`, `t1`.`AppointmentStatus` AS `AppointmentStatus`, `t1`.`AppointmentHealthStatus` AS `AppointmentHealthStatus`, `t1`.`AppointmentRemark` AS `AppointmentRemark`, `t1`.`MedicalRecordStatus` AS `MedicalRecordStatus`, `t1`.`MedicalRecordId` AS `MedicalRecordId`, `t2`.`DoctorId` AS `DoctorId`, `t2`.`DoctorName` AS `DoctorName`, `t2`.`DoctorDesignation` AS `DoctorDesignation`, `t2`.`DoctorQualification` AS `DoctorQualification` , `t2`.`DoctorStatus` AS `DoctorStatus`, `t2`.`DoctorMobile` AS `DoctorMobile`, `t3`.`PatientId` AS `PatientId`, `t3`.`PatientName` AS `PatientName`, `t3`.`PatientGender` AS `PatientGender`, `t3`.`PatientBloodGroup` AS `PatientBloodGroup`, `t3`.`PatientDOB` AS `PatientDOB`, `t3`.`PatientAge` AS `PatientAge`, `t3`.`PatientAddress` AS `PatientAddress`, `t3`.`PatientMobile` AS `PatientMobile` FROM ((`appointments` `t1` join `doctors` `t2` on(`t1`.`DoctorId` = `t2`.`DoctorId`)) join `patients` `t3` on(`t1`.`PatientId` = `t3`.`PatientId`)) ;

-- --------------------------------------------------------

--
-- Structure for view `medicalrecordview`
--
DROP TABLE IF EXISTS `medicalrecordview`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `MedicalRecordView`  AS SELECT `t1`.`MedicalRecordId` AS `MedicalRecordId`, `t1`.`Height` AS `Height`, `t1`.`Weight` AS `Weight`, `t1`.`Pressure` AS `Pressure`, `t1`.`Temperature` AS `Temperature`,`t1`.`createdAt` AS `createdAt`, `t1`.`MedicalRecordRemark` AS `MedicalRecordRemark`, `t1`.`Symptoms` AS `Symptoms`, `t1`.`Medications` AS `Medications`, `t1`.`Treatments` AS `Treatments`, `t2`.`PatientId` AS `PatientId`, `t2`.`PatientName` AS `PatientName`, `t2`.`PatientMobile` AS `PatientMobile`, `t3`.`DoctorId` AS `DoctorId`, `t3`.`DoctorName` AS `DoctorName` FROM ((`medicalRecords` `t1` join `patients` `t2` on(`t1`.`PatientId` = `t2`.`PatientId`)) join `doctors` `t3` on(`t1`.`DoctorId` = `t3`.`DoctorId`)) ;

-- --------------------------------------------------------

--
-- Structure for view `prescriptionview`
--
DROP TABLE IF EXISTS `prescriptionview`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `PrescriptionView`  AS SELECT `t1`.`PrescriptionId` AS `PrescriptionId`, `t1`.`Disease` AS `Disease`, `t1`.`Prescription` AS `Prescription`, `t1`.`PrescriptionRemark` AS `PrescriptionRemark`, `t1`.`createdAt` AS `createdAt`, `t2`.`DoctorId` AS `DoctorId`, `t2`.`DoctorName` AS `DoctorName`, `t2`.`DoctorDesignation` AS `DoctorDesignation`, `t2`.`DoctorStatus` AS `DoctorStatus`, `t2`.`DoctorMobile` AS `DoctorMobile`, `t3`.`PatientId` AS `PatientId`, `t3`.`PatientName` AS `PatientName`, `t3`.`PatientGender` AS `PatientGender`, `t3`.`PatientBloodGroup` AS `PatientBloodGroup`, `t3`.`PatientDOB` AS `PatientDOB`, `t3`.`PatientAge` AS `PatientAge`, `t3`.`PatientAddress` AS `PatientAddress`, `t3`.`PatientMobile` AS `PatientMobile`, `t4`.`AppointmentId` AS `AppointmentId`, `t4`.`AppointmentStatus` AS `AppointmentStatus`, `t4`.`AppointmentDate` AS `AppointmentDate`, `t4`.`AppointmentTime` AS `AppointmentTime`, `t4`.`AppointmentReason` AS `AppointmentReason` FROM (((`prescriptions` `t1` join `doctors` `t2` on(`t1`.`DoctorId` = `t2`.`DoctorId`)) join `patients` `t3` on(`t1`.`PatientId` = `t3`.`PatientId`)) join `appointments` `t4` on(`t1`.`AppointmentId` = `t4`.`AppointmentId`)) ;

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
-- Indexes for table `medicalrecords`
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
  MODIFY `AppointmentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `DoctorId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `medicalrecords`
--
ALTER TABLE `medicalRecords`
  MODIFY `MedicalRecordId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `PatientId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `prescriptions`
--
ALTER TABLE `prescriptions`
  MODIFY `PrescriptionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
-- Constraints for table `medicalrecords`
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
