import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../component/nav'
import Footer from '../component/footer'
import Link from "next/Link"
export default function Home() {
  return (
    <>
      <Head>
        <title>Coder Wikipedia | Home</title>
        <meta name="keywords" content="coder" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem,.......................
          <br />
          Hôm nay là 1 ngày trời trợt đổ hạ giữa mùa đông, tôi tuta from CB with Lov <br />
          rất đói, mong mỏi ngày 30 lương về cho tôi có cái ăn cái mặc, chống chọi qua mùa đông 27 độ này <br />
          Bằng tình yêu nồng nàn với CB, tôi vẫn sẽ đi làm sớm hàng ngày, về đúng giờ, làm việc chăm chỉ.
        </p>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
        <Link href="/coders" legacyBehavior>
          <a className='btn'>See All Coders</a>
        </Link>
        <style jsx>
          {
            `
            .btn {
              display: block;
              width: 150px;
              padding: 8px 0;
              margin: 20px auto;
              background: #ffbf49;
              border-radius: 4px;
              color: black;
              text-align: center;
            }
            `
          }
        </style>
      </div>

    </>
  )
}
