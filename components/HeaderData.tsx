import React, { useContext } from 'react'
import { ContractContext } from '../context/ContratContext'

type Props = {}

function HeaderData({}: Props) {
    const { priceToken } = useContext(ContractContext)

  return (
    <div className="text-sm font-light flex flex-1 items-center    px-8 py-3  space-x-10">
      <h1 className="font-bold border-r-2 pr-10 border-gray-600 text-2xl space-x-5  flex  items-center">
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#F49B33"/>
          <path d="M68.4212 39.7851C67.9297 33.5124 62.5575 31.3189 55.7435 30.6008L55.8949 21.9128L50.6092 21.823L50.4598 30.282C49.0704 30.2554 47.6516 30.26 46.2358 30.2639L46.3876 21.7495L41.1013 21.6568L40.9492 30.3418C39.8041 30.3442 38.6778 30.3483 37.5821 30.327L37.5819 30.2997L30.2884 30.1706L30.1906 35.8177C30.1906 35.8177 34.0982 35.8113 34.0321 35.8814C36.1739 35.9201 36.8475 37.1753 37.0325 38.2538L36.8615 48.1498C37.0083 48.1525 37.1997 48.1631 37.4202 48.1945L36.8608 48.1865L36.6187 62.0507C36.5115 62.7214 36.0968 63.7891 34.5986 63.7663C34.6674 63.8266 30.7564 63.6997 30.7564 63.6997L29.5954 69.9943L36.4786 70.1145C37.7578 70.1391 39.0173 70.1835 40.2518 70.2123L40.1015 78.9975L45.3843 79.088L45.5357 70.4001C46.9859 70.4522 48.3895 70.4877 49.7602 70.5125L49.6066 79.1644L54.8923 79.2542L55.0466 70.4864C63.9468 70.1317 70.2066 68.001 71.1251 59.6661C71.8672 52.9562 68.7575 49.8991 63.732 48.6006C66.8271 47.0938 68.7897 44.3769 68.4212 39.7851ZM60.6936 58.4426C60.5856 65.0091 49.3533 64.0649 45.7688 64.0058L45.9757 52.3648C49.5616 52.4296 60.816 51.5955 60.6936 58.4426ZM58.522 41.9761C58.4176 47.9506 49.0533 47.087 46.0707 47.0353L46.2544 36.4813C49.237 36.533 58.6312 35.7445 58.522 41.9761Z" fill="white"/>
        </svg>

        <h1>BTC - USD</h1>
        
      </h1>
      <div className=" flex flex-col pr-10 text-xl  ">
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
