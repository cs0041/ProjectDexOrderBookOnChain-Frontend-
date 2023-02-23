import { NextPageContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React, { useContext, useEffect, useState } from 'react'
import { ContractContext } from '../../context/ContratContext'
import { useRouter } from 'next/router'
import {notificationToast} from '../../utils/notificationToastify'
interface Props {
  query: ParsedUrlQuery
}


function deposit({ query }: Props) {
    const {
      setContractPairOrderAddress,
      setContractToken0Address,
      setContractToken1Address,
      ContractPairOrderAddress,
      ContractToken0Address,
      ContractToken1Address,
      symbolToken0,
      symbolToken1,
      checkFactoryPair,
    } = useContext(ContractContext)
    const router = useRouter()
     const { pid, contractaddress, addresstoken0, addresstoken1 } = router.query 

    useEffect(() => {
        async function check() {
          const isExistPair = await checkFactoryPair(
            addresstoken0 as string,
            addresstoken1 as string
          )
          if (contractaddress != isExistPair) {
            router.push('/nopair')
          }
        }
        check()
        setContractPairOrderAddress(contractaddress as string)
        setContractToken0Address(addresstoken0 as string)
        setContractToken1Address(addresstoken1 as string)
    }, [])
    
    
    const [amountInputDepositToken0, setAmountInputDepositToken0] =
        useState<string>()
    const [amountInputDepositToken1, setAmountInputDepositToken1] =
        useState<string>()
    const [amountInputWithdrawToken0, setAmountInputWithdrawToken0] =
        useState<string>()
    const [amountInputWithdrawToken1, setAmountInputWithdrawToken1] =
        useState<string>()
    const {
        balancesSpotToken0,
        balancesSpotToken1,
        balancesTradeToken0,
        balancesTradeToken1,
        balancesERC20Token0,
        balancesERC20Token1,
        sendTxDeposit,
        sendTxWithdraw,
    } = useContext(ContractContext)
  return (
    <>
      <div className="flex flex-col w-full h-[92vh] p-10 space-y-10 ">
        <div className="flex flex-col xl:flex-row justify-center  gap-10">
          <div className="blue-glassmorphism p-10">
            <h1 className="text-xl text-center font-bold mb-10">Deposit</h1>
            <div className="flex flex-row space-x-10">
              <div className="  bg-black/30 p-10   rounded-md">
                <div className="space-y-4">
                  <h1 className="text-center text-base font-bold mb-5">
                    Deposit {symbolToken0}
                  </h1>
                  <span className=" text-base font-light">
                    Avbl {balancesERC20Token0} {symbolToken0}
                  </span>
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
                      className="  w-full py-2 pr-2 text-right    bg-transparent outline-none  text-white"
                    />
                    <span className="flex items-center  pr-5">
                      {symbolToken0}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      notificationToast(sendTxDeposit( amountInputDepositToken0!, ContractToken0Address  ),)
                      
                    }}
                    className="w-full text-white rounded bg-green-500 py-3 font-semibold hover:opacity-70"
                  >
                    Deposit {symbolToken0}
                  </button>
                </div>
              </div>
              <div className="  bg-black/30 p-10 rounded-md">
                <div className="space-y-4">
                  <h1 className="text-center text-base font-bold mb-5">
                    Deposit {symbolToken1}
                  </h1>
                  <span className=" text-base font-light">
                    Avbl {balancesERC20Token1} {symbolToken1}
                  </span>
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
                    <span className="flex items-center  pr-5">
                      {symbolToken1}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                        notificationToast( sendTxDeposit(
                        amountInputDepositToken1!,
                        ContractToken1Address
                      ))
                    }}
                    className="w-full text-white rounded bg-green-500 py-3 font-semibold hover:opacity-70"
                  >
                    Deposit {symbolToken1}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="blue-glassmorphism  p-10 ">
            <h1 className="text-xl text-center font-bold mb-10">Withdraw</h1>
            <div className="flex flex-row space-x-10">
              <div className="  bg-black/30 p-10   rounded-md">
                <div className="space-y-4">
                  <h1 className="text-center text-base font-bold mb-5">
                    Withdraw {symbolToken0}
                  </h1>
                  <span className=" text-base font-light">
                    Avbl {balancesSpotToken0} {symbolToken0}
                  </span>
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
                    <span className="flex items-center  pr-5">
                      {symbolToken0}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                        notificationToast(  sendTxWithdraw(
                        amountInputWithdrawToken0!,
                        ContractToken0Address
                      ))
                    }}
                    className="w-full text-white rounded bg-red-500 py-3 font-semibold hover:opacity-70"
                  >
                    Withdraw {symbolToken0}
                  </button>
                </div>
              </div>
              <div className="  bg-black/30 p-10 rounded-md">
                <div className="space-y-4">
                  <h1 className="text-center text-basae font-bold mb-5">
                    Withdraw {symbolToken1}
                  </h1>
                  <span className=" text-base font-light">
                    Avbl {balancesSpotToken1} {symbolToken1}
                  </span>
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
                    <span className="flex items-center  pr-5">
                      {symbolToken1}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                        notificationToast(   sendTxWithdraw(
                        amountInputWithdrawToken1!,
                        ContractToken1Address
                      ))
                    }}
                    className="w-full text-white rounded bg-red-500 py-3 font-semibold hover:opacity-70"
                  >
                    Withdraw {symbolToken1}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center  ">
          <div className="blue-glassmorphism  p-10">
            <h1 className="text-center font-semibold m-5 text-xl">
              Dashboard Balances
            </h1>
            <div className="flex flex-row space-x-10 font-extralight">
              <div className="flex flex-col text-green-500">
                <h1 className="flex flex-col ">
                  Balances Spot
                  <span className="text-base text-white">
                    ( available for withdrawal )
                  </span>
                </h1>
                <span>
                  Amount {symbolToken0} : {balancesSpotToken0}
                </span>
                <span>
                  Amount {symbolToken1} : {balancesSpotToken1}
                </span>
              </div>
              <div className="flex flex-col text-red-500">
                <h1 className="flex flex-col">
                  Balances Trade
                  <span className="text-base text-white">
                    ( not available for withdrawal )
                  </span>
                </h1>
                <span>
                  Amount {symbolToken0} : {balancesTradeToken0}
                </span>
                <span>
                  Amount {symbolToken1} : {balancesTradeToken1}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center ">
          <button
            onClick={async (event) => {
              router.push(
                `/trade/tradepair?contractaddress=${contractaddress}&addresstoken0=${addresstoken0}&addresstoken1=${addresstoken1}`
              )
            }}
            className="ButtonHover py-3"
          >
            Go back to trade
          </button>
        </div>
       
      </div>
    </>
  )
}

export default deposit


// export const getServerSideProps = async (context: NextPageContext) => {
//   const { query } = context
//   return { props: { query } }
// }

