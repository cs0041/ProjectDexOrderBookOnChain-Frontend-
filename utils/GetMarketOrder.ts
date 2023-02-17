import { ethers } from "ethers"
import { useNetwork } from "wagmi"
import artifactPairNewOrder from '../../artifacts/contracts/PairOrder.sol/PairNewOrder.json'
import artifactToken from '../../artifacts/contracts/Token0.sol/Token0.json'
import {PairNewOrder,PairNewOrder__factory,Token0,Token0__factory,Token1,Token1__factory} from '../../typechain-types'
const ContractPairOrderAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'


export const GetMarketOrder = async () => {
    console.log("Get")
    const provider = new ethers.providers.WebSocketProvider("ws://localhost:8545")
    const blockNumber = await provider.getBlockNumber()
    const contract = new ethers.Contract(ContractPairOrderAddress, artifactPairNewOrder.abi, provider) as PairNewOrder
    const filterMarketOrder = contract.filters.MarketOrder()
    const resultsMarketOrder = await contract.queryFilter(filterMarketOrder, 0, blockNumber)

    let DataMarketOrder: EventMarketOrder[] = [] 

    const newArr = await (resultsMarketOrder.map(async (item) => {
        const timeDate = (await provider.getBlock(item.blockNumber)).timestamp
        const structEvent: EventMarketOrder = {
        Date: timeDate,
        Side: item.args._isBuy,
        amount: item.args._amount.toNumber(),
        price:item.args._price.toNumber(),
        }
        return structEvent
        //setMarketEvent((prev) => [...prev, structEvent])
    }))
    console.log('DataMarket', newArr)

    // const data = await res.json()
    // const categories: Category[] = data.categories

  return DataMarketOrder
}
