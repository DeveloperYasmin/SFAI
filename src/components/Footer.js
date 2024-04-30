import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col mt-10  md:flex-row text-gray-500 items-center">
      <p className="mx-4">&copy; {new Date().getFullYear()} San Francisco AI Conference LLC. All Rights Reserved</p>
      <p className="mx-9">Made w/💜Savior</p>
      <p className="mx-9">Terms of Use | Proposal Terms</p>
    </footer>
  );
};

export default Footer;
