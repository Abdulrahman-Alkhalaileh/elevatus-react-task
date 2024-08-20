import React from "react";

export interface LogoProps {
  width?: number;
}

const Logo: React.FC<LogoProps> = ({ width }) => {
  return (
    <>
      <img
        width={width || 150}
        alt="Logo"
        src="https://elevatus-production.s3.eu-central-1.amazonaws.com/career_portal/2021/05/15084eba-33e0-4a8a-b74c-8a158d12b6b2/original/y2ZqILiIdB5rmdH5XuG6ujLRHRJbweiyMbSrsYjN.png"
      />
    </>
  );
};

export default Logo;
