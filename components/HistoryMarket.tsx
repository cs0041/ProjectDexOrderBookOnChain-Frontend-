import { time } from 'console'
import { ethers } from 'ethers'
import React, { useContext, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { ContractContext } from '../context/ContratContext'
import { ConvertSmallDateTime } from '../utils/DateTime'
import { toEtherandFixFloatingPoint } from '../utils/UnitInEther'

// interface Props {
//   order: EventMarketOrder[]
// }

function HistoryMarket() {
  const { marketEvent,loadOrderBook,loadOrderBookByAddress }=  useContext(ContractContext)
  const { address, isConnected } = useAccount()
  // useEffect(() => {
  //     const sorting = () => {
  //         marketEvent.sort(function (a, b) {
  //           return b.Date - a.Date
  //         })
  //     }
  //     sorting()
  //     loadOrderBook()
  //     loadOrderBookByAddress(address!)
  // }, [marketEvent])


  return (
    <div className="h-full p-5">
      {/* text-white font-semibold text-base transition-all py-1 px-4 rounded-lg bg-black cursor-pointer */}
      <span className=" text-base text-white font-semibold  py-2 px-4 rounded-lg   bg-black ">
        Market Trades
      </span>
      <div className="grid grid-cols-3 py-5">
        <div>Time</div>
        <div>Price(USDT)</div>
        <div>Amount(BTC)</div>
      </div>
      <div className="myscroll h-[92%] pb-10 ">
        {marketEvent.map((item, index) => (
          <div className=" grid grid-cols-3 text-base  py-2 ">
            <div>{ConvertSmallDateTime(item.date.toNumber())}</div>
            <div
              className={` ${
                item.isBuy === 0 ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {toEtherandFixFloatingPoint(item.price)}
            </div>
            <div>{toEtherandFixFloatingPoint(item.amount)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HistoryMarket