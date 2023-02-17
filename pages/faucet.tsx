
type Props = {}

// function faucet({}: Props) {
//   return (
//     <div className='w-screen h-screen'>
//         faucet
//     </div>
//   )
// }

// export default faucet

import React, { useState, useContext, useEffect } from 'react'
import CountdownTimer from '../components/CountdownTimer'
import Image from 'next/image'
import { useAccount } from 'wagmi'
import { ContractContext } from '../context/ContratContext'

function faucet({}: Props) {
     const {
        timeUnLockFaucet,
        sendTxFaucet
     } = useContext(ContractContext)
  const { address, isConnected } = useAccount()
  return (
    <>
      <div className="flex  flex-col w-screen  h-[88vh] mt-10 items-center ">
        <div className="p-5  max-w-[500px] min-w-[400px] flex flex-col w-full justify-start  blue-glassmorphism mb-10 ">
          <h1 className="text-white text-3xl font-bold  ">Get Gas</h1>
          <Image
            className=" fixed right-3 top-3 "
            src="/images/images/polygon.png"
            alt="me"
            width="72"
            height="72"
          />

          <p className="text-gray-400 text-sm  mt-5  ">
            This faucet transfers Matic
          </p>
          <p className="text-gray-400 text-sm  ">
            for use as gas on Matic Mumbai testnets
          </p>
          <button
            onClick={() => window.open('https://faucet.polygon.technology/')}
            className="  Buttonselect hover:opacity-60 mt-2 max-w-[100px]"
          >
            Click
          </button>
        </div>

        <div className="p-5  max-w-[500px] min-w-[400px] flex flex-col w-full justify-start  blue-glassmorphism ">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-white text-3xl font-bold  ">Get Test Tokens</h1>
            <div className="flex flex-row">
              <Image
                src="/images/images/tether.png"
                alt="me"
                width="72"
                height="72"
              />
              <Image
                src="/images/images/crypto.png"
                alt="me"
                width="72"
                height="72"
              />
              {/* <img src={thb} className="w-14 " />
              <img src={pusd} className="w-14" /> */}
            </div>
          </div>
          <p className="text-gray-400 text-sm  mt-5  ">
            This faucet transfers TestToken (BTC, USDT)
          </p>
          <p className="text-gray-400 text-sm  ">
            on Matic Mumbai testnets for use in TrustLess Protocal
          </p>
          <h2 className="text-white  text-lg font-bold   mt-10">NetWork</h2>
          <button className=" max-w-[100px] Buttonselect   mt-2  !cursor-default">
            Mumbai
          </button>

          <h2 className="text-white text-lg font-bold   mt-5">
            Token received
          </h2>
          <div className="flex flex-row w-full mt-2 space-x-5 ">
            <button className=" max-w-[120px] Buttonselect    !cursor-default">
              10 BTC
            </button>
            <button className=" max-w-[120px] Buttonselect    !cursor-default">
              1000 USDT
            </button>
          </div>

          <h2 className="text-white  text-lg font-bold   mt-5">
            Wallet Address
          </h2>
          <div className="Buttonselect py-3 mt-2 !cursor-default">
            {address ? address : 'pls connect wallet'}
          </div>

          <button
            disabled={timeUnLockFaucet > Math.floor(Date.now() / 1000)}
            onClick={sendTxFaucet}
            className={`${
              timeUnLockFaucet > Math.floor(Date.now() / 1000)
                ? 'cursor-not-allowed bg-gray-700'
                : 'Buttonselect hover:opacity-60 '
            }  mt-5   text-white border-none outline-none w-full py-3 font-bold text-2xl rounded-md  transition-all `}
          >
            {Number(timeUnLockFaucet) > Math.floor(Date.now() / 1000) ? (
              <CountdownTimer
                countdownTimestampMs={Number(timeUnLockFaucet + '000')}
              />
            ) : (
              'Get Faucet'
            )}
          </button>
        </div>
      </div>
    </>
  )
}
export default faucet
