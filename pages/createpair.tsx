import React, { useContext, useState } from 'react'
import {
  PlusCircleIcon,
} from '@heroicons/react/24/solid'
import { ContractContext } from '../context/ContratContext'
import { notificationToast } from '../utils/notificationToastify'

type Props = {}

function createpair({}: Props) {
    const {  sendTxCreatePair, } = useContext(ContractContext)

      const [inputAddressToken0, setInputAddressToken0] =useState("")
      const [inputAddressToken1, setInputAddressToken1] = useState("")
  return (
    <div className="flex flex-1 justify-center items-center mt-[10vh] ">
      <div className="blue-glassmorphism p-5 w-1/4 space-y-10">
        <h1 className="text-xl   text-center">CreatePair</h1>
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
          <div className=" flex justify-center ">
            <PlusCircleIcon className=" IconHover cursor-default  h-8 w-8" />
          </div>

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
              onClick={(event) => {
                event.preventDefault()
                notificationToast(sendTxCreatePair( inputAddressToken0,  inputAddressToken1  ))
              }}
              className="ButtonHover py-3"
            >
              CreatePair
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default createpair