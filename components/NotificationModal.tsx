import React, { useState, useContext } from 'react'
import { shortenAddress } from '../utils/shortenAddress'
import { XCircleIcon } from '@heroicons/react/24/outline'
interface Props {
  txNotification: string
  onClose: any
}

const NotificationModal = ({ txNotification, onClose }: Props) => {
  return (
    <>
      <div className="flex flex-col  justify-center items-center   top-0 right-10  z-10 fixed transition duration-150 ease-out">
        <div
          onClick={(e) => e.stopPropagation()}
          className=" p-5  mt-20 flex flex-col backdrop-blur-xl  border-[1px] border-gray-600 rounded-lg"
        >
          <div className="flex flex-row gap-20">
            <h1 className="text-white font-semibold  text-xl mr-20">
              Transaction receipt
            </h1>
            <XCircleIcon onClick={onClose} className="IconHover" />
            {/* <BsXSquareFill
              fontSize={32}
              color="#fff"
              onMouseOver={({ target }) => (target.style.color = '#EF4444')}
              onMouseOut={({ target }) => (target.style.color = '#fff')}
              onClick={() => {
                props.onClose()
              }}
              className="cursor-pointer hover:color-[#00000] transition ease-in-out"
            /> */}
          </div>
          <a
            className="text-[#6f6e84] hover:text-white font-body text-base underline mt-5"
            href={`https://mumbai.polygonscan.com/tx/${txNotification}`}
            target="_blank"
          >
            View on Mumbai: {shortenAddress(txNotification)}
          </a>
        </div>
      </div>
    </>
  )
}

export default NotificationModal
