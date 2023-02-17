import { useAccount, useSigner } from 'wagmi'
import useIsMounted from '../hooks/useIsMounted'
import { polygonMumbai } from 'wagmi/chains'
// import { contractFaucetABI, contractFaucetAddress } from '../utils/FaucetABI'

import { useContext, useEffect, useState } from 'react'
import {ContractContext} from '../context/ContratContext'
import UpdateModal from '../components/Modal'
import HeaderData from '../components/HeaderData'
import OrderBook from '../components/OrderBook'
import PanelCommand from '../components/PanelCommand'
import TradingviewGraph from '../components/TradingviewGraph'
import History from '../components/History'
import HistoryMarket from '../components/HistoryMarket'
import NotificationModal from '../components/NotificationModal'
  
    
// interface Props {
//    MarketOrder:EventMarketOrder[]
// }

// const wagmigotchiContract = {
//   address: contractFaucetAddress,
//   abi: contractFaucetABI,
// }

const Home = () => {


  // for update modal
  const [sideBuyOrSell, setSideBuyOrSell] = useState<number>(-1)
  const [idUpdate, setIdUpdate] = useState<number>(-1)

  const mounted = useIsMounted()

  const [showUpdateModal, setShowUpdateModal] = useState(false)

  const { address, isConnected } = useAccount()
  const { data: signer } = useSigner({
    chainId: polygonMumbai.id,
  })
    const { notification, txNotification, setNotification } =useContext(ContractContext)

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('notification close')
      setNotification(false)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [notification])


  return (
    mounted && (
      <div className=" relative">
        <div className="border-b-[1px] border-gray-600 ">
          <HeaderData />
        </div>
        <section className="  h-[82vh] ">
          <div className="flex flex-row ">
            <div className=" w-2/12 h-[82vh]  min-w-fit ">
              <OrderBook />
            </div>
            <div className="w-10/12 border-x-[1px] border-gray-600 ">
              <div className=" h-[50vh] border-b-[1px] border-gray-600 ">
                <TradingviewGraph />
              </div>
              <div className=" h-[30vh]  ">
                <PanelCommand />
              </div>
            </div>
            <div className="w-2/12  min-w-fit ">
              <HistoryMarket />
            </div>
          </div>
        </section>
        <div className="h-[30vh]  border-gray-600 border-t-[1px]">
          <History />
        </div>
        <div  className="h-[5vh] " >

        </div>
        {/* {address && <p>My address is {address}</p>} */}

        {showUpdateModal && (
          <UpdateModal
            id={idUpdate}
            side={sideBuyOrSell}
            onClose={() => setShowUpdateModal(false)}
          />
        )}

          {notification && (
            <NotificationModal
              onClose={() => setNotification(false)}
              txNotification={txNotification}
            />
          )}

      </div>
    )
  )
}

export default Home

// Backend Code
// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const [
//     MarketOrder,
//   ] = await Promise.all([
//     GetMarketOrder()
//   ])

//   return {
//     props: {
//       MarketOrder
//     },
//   }
// }
