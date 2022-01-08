import React from "react";

interface Props {}

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-1">
      <p className="text-center mt-1">Book IT - {year}, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
