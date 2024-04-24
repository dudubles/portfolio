"use client";

import React, { CSSProperties } from 'react';

function SvgCButton({
  style,
  url,
  svgelement,
}: Readonly<{
  style: CSSProperties;
  url: string;
  svgelement: React.ReactNode;
}>) {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <button style={style}
      onClick={handleClick}
    >
      {svgelement}
    </button>
  );
}

export default SvgCButton;
