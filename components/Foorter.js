import React from 'react'
import Script from 'next/script'


function Foorter() {
  return (
    <>
<footer className="footer-wrapper">
<div className="copyright text-center">
    <div className="container">
    <p>
        Copyright © 2022{" "}
        <a href="#" >
        Munasar Abuukar
        </a>{" "}
        All Rights Reserved.
    </p>
    </div>
</div>
</footer>
<div
    className="modal fade popup"
    id="bid_history"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content bid-success-content">
        <button
          type="button"
          className="btn-custom-closer"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i className="ri-close-fill" />
        </button>
        <div className="modal-body pa-8">
          <h3 className="mb-4">History</h3>
          <div className="custom-history">
            <div className="single-item-history d-flex-center">
              <a href="#" className="avatar">
                <img src="images/popular/small/1.png" alt="history" />
                <i className="ri-check-line" />
              </a>
              <div className="content">
                <p>
                  Bid accepted{" "}
                  <span className="color-primary fw-500">12 ETH</span> by{" "}
                  <a className="text-white" href="Profile.html">
                    Zakson
                  </a>
                </p>
                <span className="date">03/01/2022, 10:25</span>
              </div>
            </div>
            <div className="single-item-history d-flex-center">
              <a href="#" className="avatar">
                <img src="images/popular/small/2.png" alt="history" />
                <i className="ri-check-line" />
              </a>
              <div className="content">
                <p>
                  Bid accepted{" "}
                  <span className="color-primary fw-500">15 ETH</span> by{" "}
                  <a className="text-white" href="Profile.html">
                    Smith
                  </a>
                </p>
                <span className="date">02/01/2022, 10:55</span>
              </div>
            </div>
            <div className="single-item-history d-flex-center">
              <a href="#" className="avatar">
                <img src="images/popular/small/3.png" alt="history" />
                <i className="ri-check-line" />
              </a>
              <div className="content">
                <p>
                  Bid accepted{" "}
                  <span className="color-primary fw-500">13 ETH</span> by{" "}
                  <a className="text-white" href="Profile.html">
                    Rion
                  </a>
                </p>
                <span className="date">05/01/2022, 10:34</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade popup"
    id="popup_bid_success"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content bid-success-content">
        <button
          type="button"
          className="btn-custom-closer"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i className="ri-close-fill" />
        </button>
        <div className="modal-body pa-8">
          <h3 className="text-center mb-3">Your Bidding Successfuly Added!</h3>
          <p className="text-center mb-5">
            your bid <strong>(12ETH) </strong> has been listing to our database
          </p>
          <a
            href="explore-filter-sidebar.html"
            className="btn btn-gradient btn-small w-100 justify-content-center"
          >
            {" "}
            <span>Watch Other Listings</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="placeBit"
    tabIndex={-1}
    aria-labelledby="placeBitLaebl"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header flex-column px-8">
          <h3 className="modal-title" id="placeBitLaebl">
            Place a Bid
          </h3>
          <button
            type="button"
            className="btn-custom-closer"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ri-close-fill" />
          </button>
        </div>
        <div className="modal-body px-8 py-5">
          <form action="#">
            <div className="form-group mb-4">
              <label htmlFor="bit">You must bid at least 13 ETH</label>
              <input type="text" id="bit" placeholder="00.00ETH" />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">
                Enter quantity.{" "}
                <span className="color-primary fw-500">5 available</span>
              </label>
              <input type="number" id="quantity" placeholder={1} />
            </div>
            <ul className="bidding-list">
              <li>
                You must bid at least: <strong>12,00 ETH</strong>
              </li>
              <li>
                Service Cost: <strong>70 ETH</strong>
              </li>
              <li>
                Total bid amount: <strong>12,70 ETH</strong>
              </li>
            </ul>
          </form>
        </div>
        <div className="modal-footer px-8">
          <button
            type="button"
            className="btn btn-gradient btn-small w-100 justify-content-center"
            data-bs-dismiss="modal"
            data-bs-toggle="modal"
            data-bs-target="#popup_bid_success"
            aria-label="Close"
          >
            <span>Place a bit</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <Script src="/js/vendor/jquery.js"></Script>
  <Script src="/js/vendor/jquery.nice-select.min.js"></Script>
  <Script src="/js/vendor/modernizer.min.js"></Script>
  <Script src="/js/vendor/slick.min.js"></Script>
  <Script src="/js/vendor/bootstrap.min.js"></Script>
  <Script src="/js/vendor/waypoint.js"></Script>
  <Script src="/js/vendor/js.cookie.js"></Script>
  <Script src="/js/vendor/count-down.js"></Script>
  <Script src="/js/vendor/counter-up.js"></Script>
  <Script src="/js/vendor/isotop.js"></Script>
  <Script src="/js/vendor/imageloaded.js"></Script>
  <Script src="/js/vendor/jquery.custom-file-input.js"></Script>
  <Script src="/js/main.js"></Script>

    </>
  )
}

export default Foorter