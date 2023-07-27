import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'home',
    links: [
      { label: 'Home', icon: <FaCreditCard />, url: '/' },
      
    ],
  },
  {
    page: 'admissions',
    links: [
      { label: 'Apply Now', icon: <FaCreditCard />, url: '/apply-now' },
      { label: 'Fee Structure', icon: <FaCreditCard />, url: '/fee-structure' },
      { label: 'School Handbook', icon: <FaCreditCard />, url: '/student-handbook' },
    ],
  },
  {
    page: 'academics',
    links: [
      { label: 'Academic Year', icon: <FaBook />, url: '/academic-year' },
      { label: 'Departments', icon: <FaBook />, url: '/departments' },
      { label: 'E-Learning', icon: <FaBook />, url: '/e-learning' },
      { label: 'Student Life', icon: <FaBook />, url: '/student-life' },
    ],
  },
  {
    page: 'about',
    links: [
      { label: 'About Us', icon: <FaBriefcase />, url: '/about-us' },
      { label: 'News and Events', icon: <FaBriefcase />, url: '/news-and-events' },
    ],
  },
];

export default sublinks;