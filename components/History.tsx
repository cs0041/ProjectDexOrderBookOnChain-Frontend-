import React, { useContext, useEffect, useState } from 'react'
import { ContractContext } from '../context/ContratContext'
import UpdateModal from '../components/Modal'
import { useAccount } from 'wagmi'
import { AdjustmentsHorizontalIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { ethers } from 'ethers'
import { ConvertFullDateTime } from '../utils/DateTime'
import { toEtherandFixFloatingPoint } from '../utils/UnitInEther'

type Props = {}

enum ShowOrderStatus {
  OpenOrder,
  OrderHistory,
}

const History = (props: Props) => {
  const { address, isConnected } = useAccount()

  const {
    isLoadingOrderBookByAddress,
    orderBookByAddress,
    sendTxCancelOrder,
    loadOrderBookByAddress,
    loadHistoryByAddress,
    historyOrderEvent,
  } = useContext(ContractContext)


  // for update modal
  const [sideBuyOrSell, setSideBuyOrSell] = useState<number>(-1)
  const [idUpdate, setIdUpdate] = useState<number>(-1)
  const [showUpdateModal, setShowUpdateModal] = useState(false)

  const [selectShowOrder, setSelectShowOrder] = useState<ShowOrderStatus>(
    ShowOrderStatus.OpenOrder
  )
  return (
    <div className="p-5  h-full ">
      <div className=" flex flex-row items-center space-x-5 mb-5">
        <button
          onClick={() => setSelectShowOrder(ShowOrderStatus.OpenOrder)}
          className={`
          ${
            selectShowOrder === ShowOrderStatus.OrderHistory
              ? 'ButtonHover !py-2'
              : 'Buttonselect  !py-2'
          } `}
        >
          Open Order({orderBookByAddress.length})
        </button>
        <button
          onClick={() => setSelectShowOrder(ShowOrderStatus.OrderHistory)}
          className={`
          ${
            selectShowOrder === ShowOrderStatus.OrderHistory
              ? 'Buttonselect !py-2'
              : 'ButtonHover !py-2'
          } `}
        >
          Order History
        </button>

        <ArrowPathIcon
          onClick={() => {
            loadHistoryByAddress()
            loadOrderBookByAddress()
          }}
          className="IconHover"
        />
      </div>

      <div className="h-full  myscroll">
        {selectShowOrder === ShowOrderStatus.OpenOrder ? (
          <>
            <div className=" text-xl grid grid-cols-9  border-b-2 border-gray-700 p-3 ">
              <div>Date</div>
              <div>Pair</div>
              <div>Type</div>
              <div>Side</div>
              <div>Price</div>
              <div>Amount</div>
              <div>Filled</div>
              <div>Total</div>
              <div>Cancel Order</div>
            </div>

            <div className="max-h-full ">
              {orderBookByAddress.map((item) => (
                <div className=" grid grid-cols-9 text-xl border-b-2 border-gray-700  p-3 ">
                  <div>{ConvertFullDateTime(Number(item.createdDate))}</div>
                  <div> BTC/USDT</div>
                  <div>Limit</div>
                  <div
                    className={`${
                      item.BuyOrSell === 0 ? 'text-green-500' : 'text-red-500'
                    }  `}
                  >
                    {item.BuyOrSell === 0 ? 'Buy' : 'Sell'}
                  </div>
                  <div className="flex flex-row">
                    {item.price}
                    <AdjustmentsHorizontalIcon
                      onClick={() => {
                        setIdUpdate(item.id)
                        setSideBuyOrSell(item.BuyOrSell)
                        setShowUpdateModal(true)
                      }}
                      className="IconHover !h-8 !w-8"
                    />
                  </div>
                  <div className="flex flex-row">
                    {item.amount}
                    <AdjustmentsHorizontalIcon
                      onClick={() => {
                        setIdUpdate(item.id)
                        setSideBuyOrSell(item.BuyOrSell)
                        setShowUpdateModal(true)
                      }}
                      className="IconHover !h-8 !w-8"
                    />
                  </div>
                  <div>{item.filled}</div>
                  <div>{Number(item.price) * Number(item.amount)}</div>
                  <TrashIcon
                    onClick={() => sendTxCancelOrder(item.BuyOrSell, item.id)}
                    className="IconHover !h-8 !w-8"
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className=" text-xl grid grid-cols-6  border-b-2 border-gray-700 p-3   ">
              <div>Date</div>
              <div>Pair</div>
              <div>Type</div>
              <div>Side</div>
              <div>Price</div>
              <div>Amount</div>
            </div>

            <div className=" max-h-full ">
              {historyOrderEvent.map((item) => (
                <div className=" grid grid-cols-6 text-xl border-b-2 border-gray-700  p-3">
                  <div>{ConvertFullDateTime(item.date.toNumber())}</div>
                  <div> BTC/USDT</div>
                  <div>{item.Type}</div>
                  <div
                    className={`${
                      item.Type === 'MarketOrder'
                        ? item.isBuy === 1
                          ? 'text-green-500'
                          : 'text-red-500'
                        : item.isBuy === 0
                        ? 'text-green-500'
                        : 'text-red-500'
                    } `}
                  >
                    {item.Type === 'MarketOrder'
                      ? item.isBuy === 0
                        ? 'Sell'
                        : 'Buy'
                      : item.isBuy === 0
                      ? 'Buy'
                      : 'Sell'}
                  </div>
                  <div>
                    {Number(toEtherandFixFloatingPoint(item.price)) === 0
                      ? 'Market'
                      : toEtherandFixFloatingPoint(item.price)}
                  </div>
                  <div> {toEtherandFixFloatingPoint(item.amount)} </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {showUpdateModal && (
        <UpdateModal
          id={idUpdate}
          side={sideBuyOrSell}
          onClose={() => setShowUpdateModal(false)}
        />
      )}
    </div>
  )
}

export default History