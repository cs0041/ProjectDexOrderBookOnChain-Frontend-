import React, { useContext, useState } from 'react'
import { ContractContext } from '../context/ContratContext'
import {ContractPairOrderAddress,ContractToken0Address,ContractToken1Address} from '../utils//Address'

type Props = {}

function deposit({}: Props) {
    
   const [amountInputDepositToken0, setAmountInputDepositToken0] = useState<string>()
   const [amountInputDepositToken1, setAmountInputDepositToken1] = useState<string>()
   const [amountInputWithdrawToken0, setAmountInputWithdrawToken0] = useState<string>()
   const [amountInputWithdrawToken1, setAmountInputWithdrawToken1] = useState<string>()
    const {
      balancesSpotToken0,
      balancesSpotToken1,
      balancesTradeToken0,
      balancesTradeToken1,
      balancesERC20Token0,
      balancesERC20Token1,
      sendTxDeposit,
      sendTxWithdraw
    } = useContext(ContractContext)
  return (
    <>

    <div className="flex flex-col w-full h-[92vh] p-10 space-y-10 ">
      <div className="flex flex-row justify-center space-x-10">
        <div className="blue-glassmorphism p-10">
          <h1 className="text-2xl text-center font-bold mb-10">Deposit</h1>
          <div className="flex flex-row space-x-10">
            <div className="  bg-black/30 p-10   rounded-md">
              <div className="space-y-4">
                <h1 className="text-center text-xl font-bold mb-5">Deposit BTC</h1>
                <span className=" text-xl font-light">Avbl {balancesERC20Token0}</span>
                <div className="InputOrder">
                  <span className="flex items-center pl-2 pr-5">Amount</span>
                  <input
                    type="number"
                    onKeyPress={(event) => {
                      if (!/^[0-9]*[.,]?[0-9]*$/.test(event.key)) {
                        event.preventDefault()
                      }
                    }}
                    onChange={(e) => {
                      setAmountInputDepositToken0(e.target.value)
                    }}
                    className="  w-full py-2 pr-2 text-right  bg-transparent outline-none  text-white"
                  />
                  <span className="flex items-center  pr-5">BTC</span>
                </div>
                <button
                  onClick={() => {
                    sendTxDeposit(amountInputDepositToken0!,ContractToken0Address)
                  }}
                  className="w-full text-white rounded bg-green-500 py-3 font-semibold hover:opacity-70"
                >
                  Deposit BTC
                </button>
              </div>
            </div>
            <div className="  bg-black/30 p-10 rounded-md">
              <div className="space-y-4">
                <h1 className="text-center text-xl font-bold mb-5">Deposit USDT</h1>
                    <span className=" text-xl font-light">Avbl {balancesERC20Token1}</span>
                <div className="InputOrder">
                  <span className="flex items-center pl-2 pr-5">Amount</span>
                  <input
                    type="number"
                    onKeyPress={(event) => {
                      if (!/^[0-9]*[.,]?[0-9]*$/.test(event.key)) {
                        event.preventDefault()
                      }
                    }}
                    onChange={(e) => {
                      setAmountInputDepositToken1(e.target.value)
                    }}
                    className="  w-full py-2 pr-2 text-right  bg-transparent outline-none  text-white"
                  />
                  <span className="flex items-center  pr-5">USDT</span>
                </div>
                <button
                  onClick={() => {
                     sendTxDeposit(amountInputDepositToken1!,ContractToken1Address)
                  }}
                  className="w-full text-white rounded bg-green-500 py-3 font-semibold hover:opacity-70"
                >
                  Deposit USDT
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="blue-glassmorphism  p-10 ">
          <h1 className="text-2xl text-center font-bold mb-10">Withdraw</h1>
          <div className="flex flex-row space-x-10">
            <div className="  bg-black/30 p-10   rounded-md">
              <div className="space-y-4">
                <h1 className="text-center text-xl font-bold mb-5">Withdraw BTC</h1>
                 <span className=" text-xl font-light">Avbl {balancesSpotToken0}</span>
                <div className="InputOrder">
                  <span className="flex items-center pl-2 pr-5">Amount</span>
                  <input
                    type="number"
                    onKeyPress={(event) => {
                      if (!/^[0-9]*[.,]?[0-9]*$/.test(event.key)) {
                        event.preventDefault()
                      }
                    }}
                    onChange={(e) => {
                      setAmountInputWithdrawToken0(e.target.value)
                    }}
                    className="  w-full py-2 pr-2 text-right  bg-transparent outline-none  text-white"
                  />
                  <span className="flex items-center  pr-5">BTC</span>
                </div>
                <button
                  onClick={() => {
                     sendTxWithdraw(amountInputWithdrawToken0!,ContractToken0Address)
                  }}
                  className="w-full text-white rounded bg-red-500 py-3 font-semibold hover:opacity-70"
                >
                  Withdraw BTC
                </button>
              </div>
            </div>
            <div className="  bg-black/50 p-10 rounded-md">
              <div className="space-y-4">
                <h1 className="text-center text-xl font-bold mb-5">Withdraw USDT</h1>
                <span className=" text-xl font-light">Avbl {balancesSpotToken1}</span>
                <div className="InputOrder">
                  <span className="flex items-center pl-2 pr-5">Amount</span>
                  <input
                    type="number"
                    onKeyPress={(event) => {
                      if (!/^[0-9]*[.,]?[0-9]*$/.test(event.key)) {
                        event.preventDefault()
                      }
                    }}
                    onChange={(e) => {
                      setAmountInputWithdrawToken1(e.target.value)
                    }}
                    className="  w-full py-2 pr-2 text-right  bg-transparent outline-none  text-white"
                  />
                  <span className="flex items-center  pr-5">USDT</span>
                </div>
                <button
                  onClick={() => {
                       sendTxWithdraw(amountInputWithdrawToken1!,ContractToken1Address)
                  }}
                  className="w-full text-white rounded bg-red-500 py-3 font-semibold hover:opacity-70"
                >
                  Withdraw USDT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-xl">
        <div className="blue-glassmorphism  p-10">
          <h1 className="text-center font-semibold m-5 text-2xl">Dashboard blacness</h1>
          <div className="flex flex-row space-x-10 font-extralight">
            <div className="flex flex-col text-green-500">
              <h1 className='flex flex-col '>
                Balances Spot <span className='text-base text-white'>( available for withdrawal )</span>
              </h1>
              <span>Amount BTC : {balancesSpotToken0}</span>
              <span>Amount USDT : {balancesSpotToken1}</span>
            </div>
            <div className="flex flex-col text-red-500">
               <h1 className='flex flex-col'>
                Balances Trade <span className='text-base text-white'>( no available for withdrawal )</span>
              </h1>
              <span>Amount BTC : {balancesTradeToken0}</span>
              <span>Amount USDT : {balancesTradeToken1}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default deposit
