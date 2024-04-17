import React from "react";
import styled from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
async function getData(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if(!res.ok){
    throw new Error("failed to fetch")
  }
  return res.json();
}

const Blog=async()=>{
const data=await getData();

  return (
    <div>
    {data.map(item=>
      <Link  href="#"  key={item.id}>
        <div className={styled.items}>
          <Image className={styled.img}></Image>
          <div className={styled.content}>
            <p className={styled.title}>{item.title}</p>
            <br></br>
            <p className={styled.description}>desc</p>
            <br></br>
          </div>
        </div>
      </Link>
    )}
    </div>
)}
export default Blog