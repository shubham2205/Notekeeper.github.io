import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} || All Sides Reserve By Shubham</p>
    </footer>
  );
}

export default Footer;
