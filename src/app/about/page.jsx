import React from "react";
import Image from "next/image";
import styled from "./page.module.scss";
import aboutImg from "../../../public/about.jpg"
import Button from "@/components/Button/button";
import Contact from './../contact/page';
export default function about() {
  return (
    <>
      <div className={styled.container}>
        <Image src={aboutImg} className={styled.img}></Image>
        <p className={styled.ImgTxt}>Our Story tellers</p>
      </div>
      <div className={styled.discription}>
        <div>
          <h2>What we doing?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero
            inventore sequi officiis eos aliquam sapiente accusantium quod velit
            quidem ratione debitis maxime nemo, perferendis tenetur, facilis
            nesciunt dignissimos tempore.
          </p>
        </div>
        <div>
          <br />
          <h2>why choose us?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero
            inventore sequi officiis eos aliquam sapiente accusantium quod velit
            quidem ratione debitis maxime nemo, perferendis tenetur, facilis
            nesciunt dignissimos tempore.
          </p>
          <br /> <br />
          <Button url="contact" text="contact"></Button>
        </div>
      </div>
    </>
  );
}
