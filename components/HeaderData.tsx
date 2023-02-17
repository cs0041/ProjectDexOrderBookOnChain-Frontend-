import React, { useContext } from 'react'
import { ContractContext } from '../context/ContratContext'

type Props = {}

function HeaderData({}: Props) {
    const { priceToken } = useContext(ContractContext)

  return (
    <div className="text-sm font-light flex flex-1 items-center    px-8 py-3  space-x-10">
      <h1 className="font-bold border-r-2 pr-10 border-gray-600   flex  items-center">
        BTC/USD
      </h1>
      <div className="font-semibold flex flex-col pr-10  ">
        <p>{priceToken ? priceToken : 'wait Price ...'}</p>
      </div>
      <div className=" flex flex-col pr-10 border-r-[1px] border-gray-600 ">
        <span>24h Change</span>
        <span>-412 -2.64%</span>
      </div>
      <div className=" flex flex-col  pr-10 border-r-[1px] border-gray-600  ">
        <span>24h Hight</span>
        <span>-412 -2.64%</span>
      </div>
      <div className=" flex flex-col   pr-10 border-r-[1px] border-gray-600 ">
        <span>24h Low</span>
        <span>-412 -2.64%</span>
      </div>
      <div className=" flex flex-col  pr-10 border-r-[1px] border-gray-600  ">
        <span>24h Volume(BTC)</span>
        <span>312.32</span>
      </div>
      <div className=" flex flex-col  ">
        <span>24h Volume(USDT)</span>
        <span>871242.42</span>
      </div>
    </div>
  )
}

export default HeaderData
