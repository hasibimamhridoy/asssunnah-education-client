import React from "react";

const Logo = () => {
  return (
    <div>
      <img
        className="w-48 hidden lg:block"
        src="https://deendarpartner.com/psilrimt/2022/05/cropped-DeendarPartner-LOGO-512-%C3%97-512-px-2048-%C3%97-2048-px-1.png"
        alt=""
      />
      <img
        className="w-36 block lg:hidden"
        src="https://deendarpartner.com/psilrimt/2022/05/cropped-DeendarPartner-LOGO-512-%C3%97-512-px-2048-%C3%97-2048-px-1.png"
        alt=""
      />
    </div>
  );
};

export default Logo;
