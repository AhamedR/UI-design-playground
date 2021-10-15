// Design idea : https://dribbble.com/shots/11100479-Nike-Single-Product-Page?utm_source=Clipboard_Shot&utm_campaign=a7madesigner&utm_content=Nike%20-%20Single%20Product%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=a7madesigner&utm_content=Nike%20-%20Single%20Product%20Page&utm_medium=Social_Share

import Head from 'next/head'
import Image from 'next/image'
import styles from './styles.module.scss'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>3D Product view</title>
        <meta name='description' content='3D product view' />
      </Head>
      <main className={styles.main}>
        <div className={styles.productLeft}>
          <div className={styles.productLeftHeader}>
            <Image
              src='/assets/ecommerce/shoe/nike-logo.gif'
              width='60'
              height='60'
              quality='50'
            />
            <button>
              <svg width='22' height='20' viewBox='0 0 22 20' fill='#FFFFFF' xmlns='http://www.w3.org/2000/svg'>
                <path d='M4.19558 12.1955L4.19478 12.1948C3.08138 11.0906 2.21027 10.0052 1.62167 8.99689C1.02899 7.98163 0.75 7.09158 0.75 6.36363C0.75 4.31806 1.56385 2.9407 2.64964 2.05967C3.7592 1.15935 5.19016 0.750008 6.41665 0.75C8.452 0.749987 10.0953 1.97732 10.4718 2.35071L11 2.87447L11.5281 2.35071C11.6953 2.18489 12.2008 1.77576 12.9373 1.41057C13.668 1.0482 14.5843 0.750006 15.5834 0.75C16.8098 0.749992 18.2408 1.15933 19.3503 2.05966C20.4361 2.94069 21.25 4.31806 21.25 6.36364C21.25 7.0844 20.9514 7.99675 20.3421 9.03185C19.7394 10.0557 18.8668 11.1419 17.8051 12.1948C16.1957 13.7909 13.0431 16.9062 11.1556 18.7705C11.0585 18.8664 10.902 18.8665 10.8042 18.7693L4.19558 12.1955Z' stroke='#FFFFFF' strokeWidth='1.5' />
              </svg>
            </button>
          </div>
          <div className={styles.productLeftImage}>
            <img src='/assets/ecommerce/shoe/shoe.png' />
          </div>
          <div className={styles.productLeftDots}>
            <span />
            <span data-active='true' />
            <span />
            <span />
          </div>
        </div>
        <div className={styles.productRight}>
          {/* Star */}
          <div className={styles.productRightRating}>
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <h2 className={styles.productRightTitle}>Nike Air Zoom Structure 22</h2>
          <h4 className={styles.productRightSubTitle}>Style Number <p>AH5402-797</p></h4>
          <h1 className={styles.productRightPrice}>$79.00</h1>
          <p className={styles.productRightDescription}>Feels secure.Still a trusted favourite for your everyday runs.The Nike Air Zoom Structure 22 keeps it light with added ventilation for a cool feel to match the heat coming off your tread.Every step feels plush, with plenty of support through the midfoot and the heel working together for a smooth, stable journey.</p>
          <div className={styles.productRightColors}>
            <label>Color</label>
            <div>
              <input type='radio' />
              <input type='radio' />
              <input type='radio' />
            </div>
          </div>
          <div className={styles.productRightSizes}>
            <label>Color</label>
            <div>
              <button>10</button>
              <button>11</button>
              <button>11.5</button>
              <button>12</button>
              <button>12.5</button>
              <button>13</button>
            </div>
          </div>
          <div className={styles.productRightQuantity}>
            <label>Quantity</label>
            <div>
              <button>+</button>
              <p>2</p>
              <button>-</button>
            </div>
          </div>
          <button className={styles.productRightSubmit}>Add to Cart</button>
        </div>
      </main>
    </div>
  )
}
