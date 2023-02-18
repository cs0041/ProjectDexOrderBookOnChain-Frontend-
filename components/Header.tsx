import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Loader from './Loader'
import { ContractContext } from '../context/ContratContext'
import Image from 'next/image'
type Props = {}

function Header({}: Props) {
  const {  txNotification,isLoadingTxNavBar } = useContext(ContractContext)
   const {pathname} = useRouter()
    return (
      <div className="border-b-[1px] border-gray-600  sticky inset-0 z-10 ">
        <div className="flex flex-row text-base font-semibold items-center justify-between px-10  bg-[#1c1c28] py-3 space-x-10">
          <div className="flex flex-row items-center space-x-2">
            <h1 className="text-2xl mr-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
              Trustless protocol
            </h1>
            <Link href="/">
              <h1
                className={`${
                  pathname === '/' ? 'Buttonselect' : 'ButtonHover'
                } `}
              >
                Trade
              </h1>
            </Link>
            <Link href="/deposit">
              <h1
                className={`${
                  pathname === '/deposit' ? 'Buttonselect' : 'ButtonHover'
                } `}
              >
                Deposit/Withdraw
              </h1>
            </Link>
            <Link href="/faucet">
              <h1
                className={`${
                  pathname === '/faucet' ? 'Buttonselect' : 'ButtonHover'
                } `}
              >
                Faucet
              </h1>
            </Link>
          </div>

          <form className="flex items-center w-1/5 min-w-fit">
            <input
              type="text"
              // onKeyPress={(event) => {
              //   if (!/^[0-9]*[.,]?[0-9]*$/.test(event.key)) {
              //     event.preventDefault()
              //   }
              // }}
              onChange={(e) => {}}
              className="outline-none pl-5 font-bold bg-[#13131b] border-[1px] border-[#1c1c28] hover:border-gray-600  focus:border-[1px] focus:border-gray-600 text-white text-sm rounded-lg block w-full p-1.5  "
              placeholder="Address"
              required
            />

            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
              }}
              className="transition-all p-2 ml-2 text-sm font-medium text-white  rounded-full  hover:bg-[#454258] "
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>

          <div className="flex flex-row items-center space-x-2">
            {isLoadingTxNavBar && (
              <div
                onClick={() => {
                  window.open(
                    `https://mumbai.polygonscan.com/tx/${txNotification}`
                  )
                }}
                className="transition duration-150 ease-in-out cursor-pointer hover:scale-105 px-5 space-x-3 py-2 flex justify-center items-center text-black font-bold bg-white rounded-xl"
              >
                <h1>Pending </h1>
                {/* <span className={`loader`}></span> */}
                <Loader />
              </div>
            )}

            <ConnectButton
              label="connect web3"
              accountStatus={'full'}
              chainStatus={'full'}
            />
          </div>
        </div>
      </div>
    )
}

export default Header