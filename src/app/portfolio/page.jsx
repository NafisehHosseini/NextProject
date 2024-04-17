import React from 'react'
import styled from './page.module.scss'
import Link from 'next/link'
export default function page() {
  return (
    <div className={styled.container}>
      <div className={styled.items}>
        <Link href="/portfolio/websites" className={styled.links}>
          <span className={styled.span}>websites</span>
        </Link>
        <Link className={styled.links} href="/portfolio/Application">
          <span className={styled.span}>Application</span>
        </Link>
      </div>
    </div>
  );
}
