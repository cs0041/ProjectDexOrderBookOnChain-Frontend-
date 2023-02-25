import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Loader from './Loader'
import { ContractContext } from '../context/ContratContext'
import ModalShowNew from './ModalShowNew'

type Props = {}

function Header({}: Props) {
  const { txNotification, isLoadingTxNavBar } = useContext(ContractContext)
  const { pathname } = useRouter()
  const [isScrolled, setisScrolled] = useState(false)
  const [showNew, setShowNew] = useState(false)

    useEffect(() => {
      const hadnleScroll = () => {
       
        if (window.scrollY > 0) {
          setisScrolled(true)

        } else {
          setisScrolled(false)
        }
      }

      window.addEventListener('scroll', hadnleScroll)

      return () => {
        window.removeEventListener('scroll', hadnleScroll)
      }
    }, [])
  return (
    <div className="sticky inset-0 z-10">
      <div
        className={`flex flex-row text-base font-semibold items-center justify-between px-10 transition-all duration-200 ${
          isScrolled && 'bg-[#141414] '
        } py-3 space-x-10`}
      >
        <div className="flex flex-row items-center space-x-2">
          <h1 className="text-2xl mr-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
            Trustless
          </h1>
          <Link href="/markets">
            <h1
              className={`${
                pathname === '/markets' ? 'Buttonselect' : 'ButtonHover'
              } `}
            >
              Markets
            </h1>
          </Link>
          <Link href="/trade">
            <h1
              className={`${
                pathname === '/trade' ? 'Buttonselect' : 'ButtonHover'
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
          <Link href="/createpair">
            <h1
              className={`${
                pathname === '/createpair' ? 'Buttonselect' : 'ButtonHover'
              } `}
            >
              CreatePair
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

          <h1 
          onClick={()=>setShowNew(true)}
          className={`ButtonHover `}>✨ What's New ✨</h1>
        </div>

        
        {showNew && <ModalShowNew onClose={() => setShowNew(false)} />}

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
