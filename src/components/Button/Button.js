import React from 'react'
import Link from 'next/link'
import styled from "./button.module.scss"
export default function Button({text,url}) {
  return (
    <>
    <Link className={styled.btn} href={url}>{text}</Link>
      
    </>
  )
}
