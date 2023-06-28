import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
     <div className={styles.container}>
      <div>©2023 Chintan. All rights reserved.</div>
      <div className={styles.social}>
        <Image src='/1.png'height={15} width={15} className={styles.icon} alt='lamadev-social'/>
        <Image src='/2.png'height={15} width={15} className={styles.icon} alt='lamadev-social'/>
        <Image src='/3.png'height={15} width={15} className={styles.icon} alt='lamadev-social'/>
        <Image src='/4.png'height={15} width={15} className={styles.icon} alt='lamadev-social'/>
      </div>
     </div>
     
  )
}

export default Footer