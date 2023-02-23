import { useContext, useEffect, useState } from 'react'
import { ContractContext } from '../context/ContratContext'
import MuiModal from '@mui/material/Modal'
import { notificationToast } from '../utils/notificationToastify'
import { XCircleIcon } from '@heroicons/react/24/outline'


enum Version {
  _0_1_0 = '0.1.0',
  _0_2_0 = '0.2.0',
}

function ModalShowNew() {
  const [statusVersion, setStatusVersion] = useState<Version>(Version._0_2_0)

  const [showModal, setShowModal] = useState(true)

  const [amountInput, setAmountInput] = useState<string>()
  const [priceInput, setPriceInput] = useState<string>()

  const handleCLose = () => {
    setShowModal(false)
   // onClose()
  }

  return (
    <MuiModal
      open={showModal}
      onClose={handleCLose}
      className="flxex m-auto  w-[400px] h-[400px]  
   rounded-xl relative   bg-[#1c1c28]  border-[1px] border-gray-600 p-10 outline-none"
    >
      <div className="outline-none space-y-5">
        <XCircleIcon onClick={handleCLose} className="IconHover absolute right-5 top-5"  />
        <h1 className="text-xl font-semibold text-center">✨ What's New ✨</h1>
        <p className="text-center"> Trustless v 0.2.0 is coming 🤖🥰🚀</p>
        <p className="text-center">See details below</p>
        <div className="flex flex-row">
          <button
            onClick={() => setStatusVersion(Version._0_1_0)}
            className={`${
              statusVersion === Version._0_1_0 ? 'Buttonselect' : 'ButtonHover'
            } `}
          >
            v 0.1.0
          </button>
          <button
            onClick={() => setStatusVersion(Version._0_2_0)}
            className={`${
              statusVersion === Version._0_2_0 ? 'Buttonselect' : 'ButtonHover'
            } `}
          >
            v 0.2.0
          </button>
        </div>

        <div className="text-sm">
          {statusVersion === Version._0_2_0 && (
            <div>
              <p>- Dynamic pair trade</p>
              <p>- User can create own pair</p>
              <p>- Show info Markets on Trustless</p>
              <p>- New notification</p>
              <p>- charts multi time frames</p>
              <p>- Fix bug ui </p>
            </div>
          )}
          {statusVersion === Version._0_1_0 && (
            <div>
              <p>- Trade Limit Order Book</p>
              <p>- Only 1 pair</p>
              <p>- Charts time frames only 1min </p>
            </div>
          )}
        </div>
      </div>
    </MuiModal>
  )
}

export default ModalShowNew
