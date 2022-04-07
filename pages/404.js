import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Css from '../components/Css'
import Foorter from '../components/Foorter'
import Header from '../components/Header'


export default function Custom404() {
    return (
        <>
        <Head >
        <title>404</title>
        </Head>
        <Css />

        <Header /> <br /><br /><br />
        <section className="ptb-120">
        <div className="container">
            <div className="not-found-inner">
            <div className="row align-items-cente">
                <div className="col-md-5 mb-5">
                <img
                    src="/images/404/404.png"
                    alt="not found page"
                    className="img-fluid"
                />
                </div>
                {/* End .col */}
                <div className="col-md-7">
                <div className="not-found-content">
                    <h1 className="title">
                    Opps...! 404 <br />
                    Page not found
                    </h1>
                    <p>
                    You seem can’t to find the page <br /> you’re looking for.
                    </p>
                    <Link href="/">
                        <a href="" className="btn btn-gradient">
                    <span>Back To Home</span>
                    </a>
                    </Link>
                    
                </div>
                </div>
                {/* End .col */}
            </div>
            </div>
            {/* End .not-found-inner */}
        </div>
        </section>


        <Foorter />
        </>
    )
  }