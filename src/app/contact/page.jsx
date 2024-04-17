import React from 'react'
import styled from "./page.module.scss"
import Image from 'next/image'
import Button from "../../components/Button/Button"
import contactimg from "../../../public/contact.png"
export default function Contact() {
  return (
    <>
      <div className={styled.container}>
        <h1 className={styled.title}>Contact Us</h1>
        <br />
        <div className={styled.content}>
          <Image src={contactimg} className={styled.contactImg}></Image>

          <form className={styled.form}>
            <input placeholder="name" className={styled.text}></input>
            <br />
            <input placeholder="email" className={styled.text}></input>
            <br />
            <textarea placeholder="message" className={styled.text}></textarea>
<br/><br/>
            <Button url="#" text="send"></Button>
          </form>
        </div>
      </div>
    </>
  );
}
