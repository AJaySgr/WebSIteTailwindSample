import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:justify-between">
      <ul className="flex gap-6 font-lato text-gray-400">
        <li>
          <a href="http://instagram.com">Instagram</a>
        </li>
        <li>
          <a href="http://facebook.com">Facebook</a>
        </li>
        <li>
          <a href="http://twitter.com">Twiter</a>
        </li>
      </ul>
      <div className="flex gap-2">
        <img src="./assets/Help-Avatar.svg" alt="Help" />
        <div>
          <p>Have any questions?</p>
          <a href="#" className="font-lato font-medium">
            Talk to specilist
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
