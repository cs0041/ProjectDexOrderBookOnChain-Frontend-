import { useContext, useEffect, useState } from 'react'
import { ContractContext } from '../context/ContratContext'
import MuiModal from '@mui/material/Modal'

interface Props {
  onClose: () => void
  side: number
  id:number
}

function Modal({onClose,side,id}: Props) {
    const { sendTxUpdateOrder } = useContext(ContractContext)


  const [showModal, setShowModal] = useState(true)

   const [amountInput, setAmountInput] = useState<string>()
   const [priceInput, setPriceInput] = useState<string>()

  const handleCLose = () => {
    setShowModal(false)
    onClose()
  }

  return (
    <MuiModal
      open={showModal}
      onClose={handleCLose}
      className="flxex m-auto w-1/5 h-1/5   justify-center items-center
   rounded-md scrollbar-hide  bg-[#1c1c28]  border-[1px] border-gray-600 p-10"
    >
      <div className="space-y-4">
        <div className="bg-gray-900 flex flex-row text-xl">
          <span className="flex items-center pl-2 pr-5">Price</span>
          <input
            type="number"
            onKeyPress={(event) => {
              if (!/^[0-9]*[.,]?[0-9]*$/.test(event.key)) {
                event.preventDefault()
              }
            }}
            onChange={(e) => {
              setPriceInput(e.target.value)
            }}
            className="  w-full py-2 pr-2 text-right  bg-transparent outline-none  text-white "
          />
          <span className="flex items-center  pr-5">USDT</span>
        </div>

        <div className="bg-gray-900 flex flex-row text-xl">
          <span className="flex items-center pl-2 pr-5">Amount</span>
          <input
            type="number"
            onKeyPress={(event) => {
              if (!/^[0-9]*[.,]?[0-9]*$/.test(event.key)) {
                event.preventDefault()
              }
            }}
            onChange={(e) => {
              setAmountInput(e.target.value)
            }}
            className="  w-full py-2 pr-2 text-right  bg-transparent outline-none  text-white"
          />
          <span className="flex items-center  pr-5">BTC</span>
        </div>
        <button
          onClick={() => {
            sendTxUpdateOrder(side, id, amountInput!, priceInput!)
          }}
          className="w-full text-white rounded bg-green-500 py-3 font-semibold"
        >
          Update order
        </button>
      </div>
    </MuiModal>
  )
}

export default Modal