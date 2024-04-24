"use client";

import type { Metadata } from "next";
import { useState } from 'react';

function SvgCButton({ url, svgelement }: { url: string; svgelement: React.ReactNode }) {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <button
      style={{
        width: "32px",
        height: "32px",
        background: "none",
        margin: "6px 10px"
      }}
      onClick={handleClick}
    >
      {svgelement}
    </button>
  );
}

export default SvgCButton;
