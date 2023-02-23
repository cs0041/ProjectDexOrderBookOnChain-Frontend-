import React, { useContext, useState } from 'react'
import { ContractContext } from '../context/ContratContext'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import router from 'next/router'
import { notificationToast } from '../utils/notificationToastify'

type Props = {}

enum LimitMarketStatus {
  Limit,
  Market,
}

function PanelCommand({}: Props) {
  const {
    sendTxLimitOrder,
    sendTxMarketOrder,
    balancesSpotToken0,
    balancesSpotToken1,
    balancesTradeToken0,
    balancesTradeToken1,
    symbolToken0,
    symbolToken1,
    ContractPairOrderAddress,
    ContractToken0Address,
    ContractToken1Address,
  } = useContext(ContractContext)

  const [selectlimitMarket, setSelectlimitMarket] = useState<LimitMarketStatus>(
    LimitMarketStatus.Limit
  )

  const [inputBuyPriceTokenLimitOrder, setInputBuyPriceTokenLimitOrder] =
    useState<string>()
  const [inputBuyAmountTokenLimitOrder, setInputBuyAmountTokenLimitOrder] =
    useState<string>()

  const [inputSellPriceTokenLimitOrder, setInputSellPriceTokenLimitOrder] =
    useState<string>()
  const [inputSellAmountTokenLimitOrder, setInputSellAmountTokenLimitOrder] =
    useState<string>()
  return (
    <div className=" px-5  py-2">
      <div className="space-x-5 h-1/6 ">
        <button
          onClick={() => setSelectlimitMarket(LimitMarketStatus.Limit)}
          className={`
          ${
            selectlimitMarket === LimitMarketStatus.Limit
              ? 'Buttonselect !py-2'
              : 'ButtonHover  !py-2'
          } `}
        >
          Limit Order
        </button>
        <button
          onClick={() => setSelectlimitMarket(LimitMarketStatus.Market)}
          className={`
          ${
            selectlimitMarket === LimitMarketStatus.Market
              ? 'Buttonselect !py-2'
              : 'ButtonHover  !py-2'
          } `}
        >
          Market Order
        </button>
      </div>

      <div className="  mt-2 flex-row flex space-x-10 justify-center  ">
        <div className="space-y-3  w-1/2 ">
          <div className="flex flex-row space-x-5   ">
            <span className="text-lg text-gray-400">Balances</span>
            <span className="text-lg text-white flex flex-row">
              {balancesSpotToken1} {symbolToken1}
            </span>
            <div className=" flex  items-center ">
              <PlusCircleIcon
                onClick={() =>
                  router.push(
                    `/deposit/depositpair?contractaddress=${ContractPairOrderAddress}&addresstoken0=${ContractToken0Address}&addresstoken1=${ContractToken1Address}`
                  )
                }
                className=" IconHover"
              />
            </div>
          </div>
          {selectlimitMarket === LimitMarketStatus.Limit && (
            <div className="InputOrder">
              <span className="flex items-center pl-2 pr-5 text-gray-400">
                Price
              </span>
              <input
                type="number"
                onKeyPress={(event) => {
                  if (!/^[0-9]*[.,]?[0-9]*$/.test(event.key)) {
                    event.preventDefault()
                  }
                }}
                onChange={(e) => {
                  setInputBuyPriceTokenLimitOrder(e.target.value)
                }}
                className="  w-full py-2 pr-2 text-right  bg-transparent outline-none  text-white"
              />
              <span className="flex items-center  pr-5">{symbolToken1}</span>
            </div>
          )}

          <div className="InputOrder">
            <span className="flex items-center pl-2 pr-5 text-gray-400">
              Amount
            </span>
            <input
              type="number"
              onKeyPress={(event) => {
                if (!/^[0-9]*[.,]?[0-9]*$/.test(event.key)) {
                  event.preventDefault()
                }
              }}
              onChange={(e) => {
                setInputBuyAmountTokenLimitOrder(e.target.value)
              }}
              className="  w-full py-2 pr-2 text-right  bg-transparent outline-none  "
            />
            <span className="flex items-center  pr-5">
              {selectlimitMarket === LimitMarketStatus.Limit
                ? `${symbolToken0}`
                : `${symbolToken1}`}
            </span>
          </div>

          {selectlimitMarket === LimitMarketStatus.Limit && (
            <div className="bg-gray-500 flex flex-row text-base rounded-sm cursor-not-allowed">
              <span className="flex items-center pl-4 pr-5 ">Total</span>
              <div className="  w-full py-2 pr-2 text-right  ">
                {(
                  Number(inputBuyAmountTokenLimitOrder) *
                  Number(inputBuyPriceTokenLimitOrder)
                ).toFixed(4)}
              </div>
              <span className="flex items-center  pr-5">{symbolToken1}</span>
            </div>
          )}

          <button
            onClick={() => {
              if (selectlimitMarket === LimitMarketStatus.Limit) {
               notificationToast( sendTxLimitOrder( 0,inputBuyAmountTokenLimitOrder!,  inputBuyPriceTokenLimitOrder!  ))
              } else if (selectlimitMarket === LimitMarketStatus.Market) {
                notificationToast(sendTxMarketOrder(0, inputBuyAmountTokenLimitOrder!))
              }
            }}
            className=" w-full text-white rounded bg-green-500 py-2 font-semibold hover:opacity-70"
          >
            Buy {symbolToken0}
          </button>
        </div>

        <div className="space-y-3  w-1/2">
          <div className="flex flex-row space-x-5   ">
            <span className="text-lg text-gray-400">Balances</span>
            <span className="text-lg text-white flex flex-row">
              {balancesSpotToken0} {symbolToken0}
            </span>
            <div className=" flex  items-center ">
              <PlusCircleIcon
                onClick={() =>
                  router.push(
                    `/deposit/depositpair?contractaddress=${ContractPairOrderAddress}&addresstoken0=${ContractToken0Address}&addresstoken1=${ContractToken1Address}`
                  )
                }
                className=" IconHover"
              />
            </div>
          </div>

          {selectlimitMarket === LimitMarketStatus.Limit && (
            <div className="InputOrder">
              <span className="flex items-center pl-2 pr-5 text-gray-400">
                Price
              </span>
              <input
                type="number"
                required
                onKeyPress={(event) => {
                  if (!/^[0-9]*[.,]?[0-9]*$/.test(event.key)) {
                    event.preventDefault()
                  }
                }}
                onChange={(e) => {
                  setInputSellPriceTokenLimitOrder(e.target.value)
                }}
                className=" w-full py-2 pr-2 text-right  bg-transparent outline-none  text-white"
              />
              <span className="flex items-center  pr-5">{symbolToken1}</span>
            </div>
          )}

          <div className="InputOrder">
            <span className="flex items-center pl-2 pr-5 text-gray-400">
              Amount
            </span>
            <input
              type="number"
              required
              onKeyPress={(event) => {
                if (!/^[0-9]*[.,]?[0-9]*$/.test(event.key)) {
                  event.preventDefault()
                }
              }}
              onChange={(e) => {
                setInputSellAmountTokenLimitOrder(e.target.value)
              }}
              className=" w-full py-2 pr-2 text-right  bg-transparent outline-none  "
            />
            <span className="flex items-center  pr-5">{symbolToken0}</span>
          </div>

          {selectlimitMarket === LimitMarketStatus.Limit && (
            <div className="bg-gray-500 flex flex-row text-base  rounded-sm cursor-not-allowed">
              <span className="flex items-center pl-4 pr-5 ">Total</span>
              <div className="  w-full py-2 pr-2 text-right  ">
                {(
                  Number(inputSellAmountTokenLimitOrder) *
                  Number(inputSellPriceTokenLimitOrder)
                ).toFixed(4)}
              </div>
              <span className="flex items-center  pr-5">{symbolToken1}</span>
            </div>
          )}

          <button
            onClick={() => {
              if (selectlimitMarket === LimitMarketStatus.Limit) {
                notificationToast(sendTxLimitOrder(  1, inputSellAmountTokenLimitOrder!, inputSellPriceTokenLimitOrder!))
              } else if (selectlimitMarket === LimitMarketStatus.Market) {
                notificationToast(sendTxMarketOrder(1, inputSellAmountTokenLimitOrder!))
              }
            }}
            className="w-full text-white rounded bg-red-500 py-2 font-semibold hover:opacity-70"
          >
            Sell {symbolToken0}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PanelCommand
