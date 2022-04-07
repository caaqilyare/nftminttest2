import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Css from '../../components/Css'
import Foorter from '../../components/Foorter'
import Header from '../../components/Header'

function NFTDrop() {
  return (
    <>
     <Head >
        <title>Create Next App</title>
      </Head>
       <Css />

     <Header /> <br /><br /><br />
     <section className="product-details section-bg-separation-2 pt-120 pb-90">
  <div className="container">
    <div className="row">
      <div className="col-xxl-6 mb-6">
        <div className="explore-style-one">
          <div className="thumb">
            <img
              className="img-fluid"
              src="https://cdn.sanity.io/images/iz5ogktd/production/c263480a2e6704879d3fe94d6a6dd622136aa5d3-286x286.png"
              alt="prodcut"
            />
          </div>
          {/* End .thumb */}
        </div>
        {/* End .explore-style-one */}
      </div>
      {/* End col */}
      <div className="col-xxl-6 mb-6 mb-6">
        <div className="details-content">
          <div className="avatar-info-wrapper d-flex-between mb-4">
            <div className="d-flex-center avatar-info">
              <div className="thumb-wrapper">
                <a href="#" className="thumb">
                  <img src="/images/top-seller/1.png" alt="top sellter" />
                </a>
              </div>
              {/* End .thumb-wrapper */}
              <div className="content">
                <h4 className="title  pb-1">
                  <a href="#">James Tonny</a>
                </h4>
                <span className="owner">Item Owner</span>
              </div>
              {/* End .content */}
            </div>
            {/* End .d-flex-cente */}
            <div className="d-flex-between bidder">
              <span>Price</span>
              <div className="d-flex-center">
                <span className="text-white">68.2 ETH</span>
                <img src="/images/fire.png" alt="highest bitter" />
              </div>
            </div>
          </div>
          {/* End .avatar-info-wrapper */}  <br /><br /><br />
          <h2 className="main_title">The Fantasy Art Illustration</h2>
          <div className="justify-content-center"> <br /><br />
              <p className="subtitle items-center">
            There are a few things worth doing before creating your first NFTs.
            pencil icon in the top right. creating your NFTs.
          </p>
          </div>  <br /><br /><br />
          {/* <div className="d-flex-between bidder justify-content-center">
              <span>Please wait... </span>
          </div> */}
          <div className="d-flex-between bidder justify-content-center">
              <span>2 / 10 NFT'S CLAIMED</span>
          </div>
          <br /><br /><br />
          <br />
          <a
            href="#"
            className="btn btn-medium btn-gradient w-100 mt-5 justify-content-center"
          >
            <span>
              <i className="ri-shopping-bag-line" />
              Place Bid
            </span>
          </a>
        </div>
      </div>
      {/* End col */}
    </div>
    {/* ENd .row */}
  </div>
  {/* End .container */}
</section>



     <Foorter />
      

    </>
  )
}

export default NFTDrop