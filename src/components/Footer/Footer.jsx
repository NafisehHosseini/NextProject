import React from "react";
import Image from "next/image"
import styled from "./Footer.module.scss";
export default function Footer() {
  return (
    <div className={styled.container}>
      <p>@Powered By Nafiseh Hosseini</p>
      <div>
        <Image alt="instagram"></Image>
      </div>
    </div>
  );
}
