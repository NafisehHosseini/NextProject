import React from 'react'
import styled from './page.module.scss'
import Image from 'next/image'
import Button from '../../../components/Button/Button';
import img from "../../../../public/about.jpg";
export default function Category({params}) {
  return (
    <>
      <h1 className={styled.cattitle}>{params.category}</h1>
      <div className={styled.items}>
        <Image src={img} className={styled.img}></Image>
        <div className={styled.content}>
          <p className={styled.title}>title</p>
          <br></br>
          <p className={styled.description}>desc</p>
          <br></br>
          <Button url="#" text="See More"></Button>
        </div>
      </div>
      <div className={styled.items}>
        <Image src={img} className={styled.img}></Image>
        <div className={styled.content}>
          <p className={styled.title}>title</p>
          <br></br>
          <p className={styled.description}>desc</p>
          <br></br>
          <Button url="#" text="See More"></Button>
        </div>
      </div>
    </>
  );
}
