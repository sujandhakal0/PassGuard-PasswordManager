import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#031326]">
      <div className="text-[#e0e1e4] py-4 flex flex-col justify-center gap-3 items-center">
        <div className="logo font-bold text-[#e0e1e4] text-lg relative">
          <span className="absolute -left-4 text-3xl text-[#F39C12]">
            &lsaquo;
          </span>
          PASS<span className="text-[#F39C12]">GUARD</span>
          <span className="absolute -right-4 text-3xl text-[#e0e1e4]">
            &rsaquo;
          </span>
        </div>
        <div className="flex justify-center items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} PASSGUARD. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
