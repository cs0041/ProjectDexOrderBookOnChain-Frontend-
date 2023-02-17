import React, { useContext, useEffect, useState } from 'react'
import { ContractContext } from '../context/ContratContext'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { FloatingPoint } from '../utils/UnitInEther'

type Props = {}

enum ShowOrderBookStatus {
  BS = "BuySell",
  S = "Sell",
  B = "Buy"
}

function OrderBook({}: Props) {
  const {
    loadOrderBook,
    loadingOrderBuy,
    loadingOrderSell,
    orderBookBuy,
    orderBookSell,
  } = useContext(ContractContext)

  const [statusShowOrderBook, setStatusShowOrderBook] = useState<ShowOrderBookStatus>(ShowOrderBookStatus.BS)

  return (
    <div className=" flex flex-col flex-1 h-full">
      <header className="flex justify-between   p-5 h-[10%] items-center">
        <div className="flex space-x-5 ">
          <button
            onClick={() => setStatusShowOrderBook(ShowOrderBookStatus.BS)}
            className="space-x-1 flex flex-row hover:opacity-70"
          >
            <div className="space-y-1">
              <div className="w-[20px] h-[20px] bg-red-500" />
              <div className="w-[20px] h-[20px] bg-green-500" />
            </div>
            <div className="w-[20px] h-[44px] bg-gray-600 " />
          </button>

          <button
            onClick={() => setStatusShowOrderBook(ShowOrderBookStatus.B)}
            className="space-x-1 flex flex-row hover:opacity-70"
          >
            <div className="w-[20px] h-[44px] bg-green-500" />
            <div className="w-[20px] h-[44px] bg-gray-600 " />
          </button>

          <button
            onClick={() => setStatusShowOrderBook(ShowOrderBookStatus.S)}
            className="space-x-1 flex flex-row hover:opacity-70"
          >
            <div className="w-[20px] h-[44px] bg-red-500" />
            <div className="w-[20px] h-[44px] bg-gray-600 " />
          </button>
        </div>

        <ArrowPathIcon
          onClick={() => {
            loadOrderBook()
          }}
          className="IconHover"
        />
        {/* <span className="text-2xl">100</span> */}
      </header>

      <div className="text-sm grid grid-cols-3  gap-x-3 pr-5  pb-5 ">
        <div className="text-right">Price(USDT)</div>
        <div className="text-right">Amount(BTC)</div>
        <div className="text-right">Total</div>
      </div>

      {statusShowOrderBook === ShowOrderBookStatus.B ? null : (
        <div className={` 
        ${statusShowOrderBook === ShowOrderBookStatus.S ? "h-[84%]" : "h-[44%]"} 
        text-red-500   pr-5 text-base myscroll `}>
          {orderBookSell.map((item) => (
            <div className="grid grid-cols-3 gap-x-3">
              <div className="text-right ">{item.price}</div>
              <div className="text-right ">
                {(Number(item.amount) - Number(item.filled)).toFixed(
                  FloatingPoint
                )}
              </div>
              <div className="text-right ">
                {(
                  (Number(item.amount) - Number(item.filled)) *
                  Number(item.price)
                ).toFixed(FloatingPoint)}
              </div>
            </div>
          ))}
        </div>
      )}

      {statusShowOrderBook === ShowOrderBookStatus.BS && (
        <div className="w-full h-[4%] text-3xl border-y-[1px] border-gray-600  my-5 " />
      )}



      {statusShowOrderBook === ShowOrderBookStatus.S ? null : (
        <div className={`
          ${statusShowOrderBook === ShowOrderBookStatus.B ? "h-[84%]" : "h-[44%]"}  
        text-green-500  pr-5 text-base myscroll`}>
          {orderBookBuy.map((item) => (
            <div className="grid grid-cols-3 gap-x-3">
              <div className="text-right">{item.price}</div>
              <div className="text-right ">
                {(Number(item.amount) - Number(item.filled)).toFixed(
                  FloatingPoint
                )}
              </div>
              <div className="text-right ">
                {(
                  (Number(item.amount) - Number(item.filled)) *
                  Number(item.price)
                ).toFixed(FloatingPoint)}
              </div>
            </div>
          ))}
        </div>
      )}
      <br />
    </div>
  )
}

export default OrderBook
