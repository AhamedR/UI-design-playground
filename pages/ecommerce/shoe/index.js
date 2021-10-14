// Design idea : https://dribbble.com/shots/11100479-Nike-Single-Product-Page?utm_source=Clipboard_Shot&utm_campaign=a7madesigner&utm_content=Nike%20-%20Single%20Product%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=a7madesigner&utm_content=Nike%20-%20Single%20Product%20Page&utm_medium=Social_Share

import Head from 'next/head'
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
            <img src='' />
            <button>Fav</button>
          </div>
          <div className={styles.productLeftImage}>
            <img src='' />
            <img src='' />
            <img src='' />
          </div>
          <div className={styles.productLeftDots}>
            <span />
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
