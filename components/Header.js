import React from 'react'
import Link from 'next/link'
import { useAddress, useDisconnect, useMetamask ,useNFTDrop } from "@thirdweb-dev/react";
function Header() {
      // Auth token
      const connectWithMetamask = useMetamask();
      const address = useAddress();
      const disconnect = useDisconnect();
    
  return (
    <>
       <header className="ib-header header-default header-fixed header--sticky fluid-header">
            <div className="header-inner d-flex align-items-center justify-content-between">
            <div className="header-left d-flex align-items-center">
                <div className="logo-wrapper"> <br /> <br />
                <Link href="/">
                    <h2 className='logo logo-light mb-5 title'>NFTs Drop Mint</h2>
                </Link>
                <Link href="/">
                    <h2 className='logo logo-dark mb-5 title'>NFTs Drop Mint</h2>
                </Link>
                
                </div>
            </div>
            <div className="header-right d-flex align-items-center">
                <ul className="header-right-inner">
                    {address ? 
                    <></> :    
                       <li className="wallet-button">
                    <a onClick={() => (address ? disconnect() : connectWithMetamask())}  className="btn btn-gradient btn-small">
                    <span>
                        <i className="ri-wallet-3-line" />
                        Login With Metamask
                    </span>
                    </a>
                </li>
                }

                  {address && (
                <li className="avatar-info">
                    <a href="#">
                    <img src="/images/avatar/user.png" alt="user avatar" />
                    </a>
                    <ul className="submenu">
                    
                            <li>
                            <a href="create.html">
                            <i className="ri-wallet-2-line" /> {address.substring(0,5)}.... {address.substring(address.length - 5)}
                            </a>
                        </li>
                          
                   
                    <li>
                        <a onClick={() => (address ? disconnect() : connectWithMetamask())}>
                        <i className="ri-shut-down-line" />
                        Sign out 
                        </a>
                    </li>
                    </ul>
                </li>
                  )} 

                
                {/* theme swicher */}
                <li>
                    <label
                    className="theme-switcher-label d-flex"
                    htmlFor="theme-switcher"
                    >
                    <input
                        type="checkbox"
                        className="theme-switcher"
                        id="theme-switcher"
                    />
                    <div className="switch-handle">
                        <i className="ri-sun-line light-text" />
                        <i className="ri-moon-line dark-text" />
                    </div>
                    </label>
                </li>
                </ul>
            </div>
            </div>
        </header>
    </>
  )
}

export default Header