import React, { useContext, useState } from 'react'
import { ContractContext } from '../../context/ContratContext'
import { useRouter } from 'next/router'
type Props = {}

function deposit({}: Props) {
  const { checkFactoryPair } = useContext(ContractContext)
  const router = useRouter()
  const [inputAddressToken0, setInputAddressToken0] = useState('')
  const [inputAddressToken1, setInputAddressToken1] = useState('')


  return (
    <>
      <div className="flex flex-col w-full    items-center mt-[10vh] ">
        <div className="blue-glassmorphism p-10 min-w-[500px]  ">
          <h1 className="text-xl text-center   mb-10">Deposit/Withdraw</h1>
          <form className=" space-y-10">
            <input
              type="text"
              // onKeyPress={(event) => {
              //   if (!/^[0-9]*[.,]?[0-9]*$/.test(event.key)) {
              //     event.preventDefault()
              //   }
              // }}
              onChange={(e) => {
                setInputAddressToken0(e.target.value)
              }}
              className="outline-none pl-5  p-4 font-semibold bg-[#13131b] border-[1px] border-[#1c1c28] hover:border-gray-600  focus:border-[1px] focus:border-gray-600 text-white text-sm rounded-lg block w-full   "
              placeholder="Input Address Token0"
              required
            />
           
            <input
              type="text"
              // onKeyPress={(event) => {
              //   if (!/^[0-9]*[.,]?[0-9]*$/.test(event.key)) {
              //     event.preventDefault()
              //   }
              // }}
              onChange={(e) => {
                setInputAddressToken1(e.target.value)
              }}
              className="outline-none pl-5  p-4 font-semibold bg-[#13131b] border-[1px] border-[#1c1c28] hover:border-gray-600  focus:border-[1px] focus:border-gray-600 text-white text-sm rounded-lg block w-full   "
              placeholder="Input Address Token1"
              required
            />
            <div className=" flex justify-center ">
              <button
                onClick={async (event) => {
                  event.preventDefault()
                   if (inputAddressToken0 != '' || inputAddressToken1 != '')
                   {
                     const contractPairAddress = await checkFactoryPair(
                       inputAddressToken0,
                       inputAddressToken1
                     )
                      router.push(
                        `/deposit/depositpair?contractaddress=${contractPairAddress}&addresstoken0=${inputAddressToken0}&addresstoken1=${inputAddressToken1}`
                      )

                   }
                }}
                className="ButtonHover py-3"
              >
                Go to deposit/withdraw this pair
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default deposit
