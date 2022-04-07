import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Css from '../components/Css'
import Foorter from '../components/Foorter'
import Header from '../components/Header'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
       <Css />

     <Header />
     <section className="hero-banner-style bg-1 bg-image top-section-gap">
  <div className="hero-banner_inner">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xxl-8 col-xl-7 col-lg-7">
          <div className="banner-content">
            <h1 className="mb-6 title">
              Collect your <br />
              <span>digital assets</span> NFTs
            </h1>
            <p>
              Marketplace for monster character collections <br />
              non fungible token NFTs.
            </p>
            <img
              src="images/shape/2.png"
              alt="shape"
              className="shape shape-2 dark rotate-360"
            />
            <img
              src="images/shape/3.png"
              alt="shape"
              className="shape shape-3 dark rotate-360"
            />
            <img
              src="images/shape/2-light.png"
              alt="shape"
              className="shape shape-2 light rotate-360"
            />
            <img
              src="images/shape/3-light.png"
              alt="shape"
              className="shape shape-3 light rotate-360"
            />
          </div>
        </div>
        <div className="col-xxl-4 col-xl-5 col-lg-5">
          <div className="explore-style-two">
            <div className="slider slider-activation-banner-3">
              <a href="product-details.html" className="thumb">
                <img src="images/explore/hero/1.jpg" alt="explore-item" />
              </a>
              <a href="product-details.html" className="thumb">
                <img src="images/explore/hero/2.jpg" alt="explore-item" />
              </a>
              <a href="product-details.html" className="thumb">
                <img src="images/explore/hero/4.jpg" alt="explore-item" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 
  <section className="pt-120 pb-90 masonary-wrapper-activation">
    <div className="container">
      <div className="grid-filter-wrapper mesonry-list">
        <div className="resizer" />
        <Link href="/nft/nameofnft">
           <div className="grid-item cat--4">
          <div className="explore-style-one">
            <div className="thumb">
              <a href="product-details.html">
                {" "}
                <img
                  src="images/explore/28.jpg"
                  alt="nft live auction thumbnail"
                />
              </a>
            </div>
            <div className="content">
              <div className="header d-flex-between pt-4 pb-3">
                <h3 className="title">
                  <a href="product-details.html">TALES OF TSUKI GENESIS</a>
                </h3>
              </div>
              <div className="product-share-wrapper">
                <div className="profile-share d-flex-center">
                  <a className="more-author-text" href="#" tabIndex={0}>
                  Tales of Tsuki is a collection of 9,999 beautiful,
                  </a>
                </div>
              </div>
              <div className="product-owner py-4 d-flex-between">
                <span className="bid-owner d-flex-center justify-content-center">
                  <strong><a href="author-profile.html">Tsuki #8279</a>
                  </strong>
                </span>
              </div>
              <div className="action-wrapper d-flex-between pt-4">
                <button
                  
                  className="btn btn-medium btn-gradient w-100 justify-content-center mt-5"
                >
                  <span>
                    <i className="ri-shopping-bag-line" /> View More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        </Link>
       
        
      </div>
    </div>
  </section>
  <Foorter />
   


    
    </>
  )
}
