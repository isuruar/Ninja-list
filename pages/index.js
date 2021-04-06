import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head> 
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className = {styles.title}>Homepage</h1>
          <p className = {styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatem fugit eveniet quidem, laudantium amet ipsum quibusdam quo facere recusandae accusamus, repudiandae expedita nihil, consequatur doloremque inventore velit odio unde?</p>
          <p className = {styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatem fugit eveniet quidem, laudantium amet ipsum quibusdam quo facere recusandae accusamus, repudiandae expedita nihil, consequatur doloremque inventore velit odio unde?</p>
          <Link href="/ninjas">
          <a className = {styles.btn}>See Ninja Listing</a>
          </Link>
      </div>
    </>
      
  )
}
