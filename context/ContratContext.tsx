import React, {createContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import artifactPairNewOrder from '../artifacts/contracts/FactoryPair.sol/PairNewOrder.json'
import artifactToken from '../artifacts/contracts/Token0.sol/Token0.json'
import artifactFaucet from '../artifacts/contracts/Faucet.sol/Faucet.json'
import artifactoryPairt from '../artifacts/contracts/FactoryPair.sol/FactoryPair.json'
import {PairNewOrder,PairNewOrder__factory,Token0,Token0__factory,Token1,Token1__factory,Faucet,Faucet__factory,FactoryPair,FactoryPair__factory} from '../typechain-types'
const initBlockTime = 31949670


import { ContractFaucet, ContractFactoryPair } from '../utils/Address'
import { convertToOHLC } from '../utils/CovertCandle'
import { toEtherandFixFloatingPoint, toWei,toEther ,toEtherFloatingPoint} from '../utils/UnitInEther'
interface IContract {
  loadingOrderSell: boolean
  loadingOrderBuy: boolean
  loadOrderBook: () => Promise<void>
  orderBookSell: Order[]
  orderBookBuy: Order[]
  priceToken: string
  sendTxMarketOrder: (
    side: number,
    amount: number | string
  ) => Promise<string | void>
  balancesSpotToken0: string
  balancesTradeToken0: string
  balancesSpotToken1: string
  balancesTradeToken1: string
  balancesERC20Token0: string
  balancesERC20Token1: string
  sendTxLimitOrder: (
    side: number,
    amount: number | string,
    price: number | string
  ) => Promise<string | void>
  isLoadingOrderBookByAddress: boolean
  orderBookByAddress: Order[]
  loadOrderBookByAddress: () => Promise<void>
  sendTxCancelOrder: (
    side: number,
    id: number | string
  ) => Promise<string | void>
  sendTxUpdateOrder: (
    side: number,
    id: number,
    newAmount: number | string,
    newPriceOrder: number | string
  ) => Promise<string | void>
  marketEvent: PairNewOrder.OrderMarketStructOutput[]
  historyOrderEvent: PairNewOrder.OrderHistoryStructOutput[]
  // sumMarketEvent:EventMarketOrder[]
  sendTxDeposit: (
    amount: number | string,
    addressToken: string
  ) => Promise<string | void>
  sendTxWithdraw: (
    amount: number | string,
    addressToken: string
  ) => Promise<string | void>
  tradingViewList: TypesTradingViewOriginal[]
  loadHistoryByAddress: () => Promise<void>
  timeUnLockFaucet: number
  sendTxFaucet: () => Promise<string | void>
  isLoadingTx: boolean
  txNotification: string
  isLoadingTxNavBar: boolean
  setContractPairOrderAddress: (address: string) => void
  setContractToken0Address: (address: string) => void
  setContractToken1Address: (address: string) => void
  symbolToken0: string
  symbolToken1: string
  checkFactoryPair: (
    addressToken0: string,
    addressToken1: string
  ) => Promise<string | void>
  sendTxCreatePair: (
    addressToken0: string,
    addressToken1: string
  ) => Promise<string | void>
  listPairOrder: TypeListPairOrder[]
  isLoadingListFactoryPairAddress: boolean
  ContractPairOrderAddress: string
  ContractToken0Address: string
  ContractToken1Address: string
  loadListFactoryPairAddress: () => Promise<void>
}

export const ContractContext = createContext<IContract>({
  loadingOrderSell: false,
  loadingOrderBuy: false,
  loadOrderBook: async () => {},
  orderBookSell: [],
  orderBookBuy: [],
  priceToken: '',
  sendTxMarketOrder: async () => {},
  balancesSpotToken0: '',
  balancesTradeToken0: '',
  balancesSpotToken1: '',
  balancesTradeToken1: '',
  balancesERC20Token0: '',
  balancesERC20Token1: '',
  sendTxLimitOrder: async () => {},
  isLoadingOrderBookByAddress: false,
  orderBookByAddress: [],
  loadOrderBookByAddress: async () => {},
  sendTxCancelOrder: async () => {},
  sendTxUpdateOrder: async () => {},
  marketEvent: [],
  historyOrderEvent: [],
  // sumMarketEvent: [],
  sendTxDeposit: async () => {},
  sendTxWithdraw: async () => {},
  tradingViewList: [],
  loadHistoryByAddress: async () => {},
  timeUnLockFaucet: 0,
  sendTxFaucet: async () => {},
  isLoadingTx: false,
  txNotification: '',
  isLoadingTxNavBar: false,
  setContractPairOrderAddress: () => {},
  setContractToken0Address: () => {},
  setContractToken1Address: () => {},
  symbolToken0: '',
  symbolToken1: '',
  checkFactoryPair: async () => {},
  sendTxCreatePair: async () => {},
  listPairOrder: [],
  isLoadingListFactoryPairAddress: true,
  ContractPairOrderAddress: '',
  ContractToken0Address: '',
  ContractToken1Address: '',
  loadListFactoryPairAddress: async () => {},
})









interface ChildrenProps {
  children: React.ReactNode
}


export const ContractProvider = ({ children }: ChildrenProps) => {
  const [initialLoading, setInitialLoading] = useState(true)

  // contract address
  const [ContractPairOrderAddress, setContractPairOrderAddress] = useState('')
  const [ContractToken0Address, setContractToken0Address] = useState('')
  const [ContractToken1Address, setContractToken1Address] = useState('')

  const getPairOrderContractDynamic = (address: string) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum as any)
    const signer = provider.getSigner()
    const pairordercontract = new ethers.Contract(
      address,
      artifactPairNewOrder.abi,
      signer
    ) as PairNewOrder

    return pairordercontract
  }
  const getPairOrderContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum as any)
    const signer = provider.getSigner()
    const pairordercontract = new ethers.Contract(
      ContractPairOrderAddress,
      artifactPairNewOrder.abi,
      signer
    ) as PairNewOrder

    return pairordercontract
  }
  const getTokenContract = (tokenAddress: string) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum as any)
    const signer = provider.getSigner()
    const tokenContract = new ethers.Contract(
      tokenAddress,
      artifactToken.abi,
      signer
    ) as Token0

    return tokenContract
  }

  const getFaucetContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum as any)
    const signer = provider.getSigner()
    const faucetContract = new ethers.Contract(
      ContractFaucet,
      artifactFaucet.abi,
      signer
    ) as Faucet

    return faucetContract
  }
  const getFactoryPairContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum as any)
    const signer = provider.getSigner()
    const factoryPairContract = new ethers.Contract(
      ContractFactoryPair,
      artifactoryPairt.abi,
      signer
    ) as FactoryPair

    return factoryPairContract
  }

  // order sell
  const [orderBookSell, setOrderBookSell] = useState<Order[]>([])
  const [loadingOrderSell, setLoadingOrderSell] = useState(false)

  // order buy
  const [orderBookBuy, setOrderBookBuy] = useState<Order[]>([])
  const [loadingOrderBuy, setLoadingOrderBuy] = useState(false)

  // price
  const [priceToken, setPriceToken] = useState<string>('')

  // balances
  const [balancesSpotToken0, setBalancesSpotToken0] = useState<string>('')
  const [balancesTradeToken0, setBalancesTradeToken0] = useState<string>('')
  const [balancesSpotToken1, setBalancesSpotToken1] = useState<string>('')
  const [balancesTradeToken1, setBalancesTradeToken1] = useState<string>('')

  const [balancesERC20Token0, setBalancesERC20Token0] = useState<string>('')
  const [balancesERC20Token1, setBalancesERC20Token1] = useState<string>('')

  // order by address
  const [orderBookByAddress, setOrderBookByAddress] = useState<Order[]>([])
  const [isLoadingOrderBookByAddress, setIsLoadingOrderBookByAddress] =
    useState(true)

  // Market order
  const [marketEvent, setMarketEvent] = useState<
    PairNewOrder.OrderMarketStructOutput[]
  >([])

  // Sum Market order
  const [sumMarketEvent, setSumMarketEvent] = useState<EventMarketOrder[]>([])

  // History order
  const [historyOrderEvent, setHistoryOrderEvent] = useState<
    PairNewOrder.OrderHistoryStructOutput[]
  >([])

  // tradingView
  const [tradingViewList, setTradingViewList] = useState<TypesTradingViewOriginal[]>([])

  // Time Faucet
  const [timeUnLockFaucet, setTimeUnLockFaucet] = useState<number>(0)

  // Loading Tx
  const [isLoadingTx, setIsLoadingTx] = useState(false)

  //Notification
  const [txNotification, setTxNotification] = useState('')

  //Navbar loading
  const [isLoadingTxNavBar, setIsLoadingTxNavBar] = useState(false)

  //Metadata token
  const [symbolToken0, setSymbolToken0] = useState('')
  const [symbolToken1, setSymbolToken1] = useState('')

  // Data List PairOrder
  const [listPairOrder, setListPairOrder] = useState<TypeListPairOrder[]>([])

  // Loading  List PairOrder 
  const [isLoadingListFactoryPairAddress, setIsLoadingListFactoryPairAddress] = useState(false)

  useEffect(() => {
    if (!window.ethereum) return console.log('Please install metamask')
    loadOrderBook()
    loadPriceToken()
    loadBalances()
    loadOrderBookByAddress()
    loadMetaDataToken()

    loadHistoryByAddress()
    loadHistoryMarketOrder()

    addlistenerMarketEvents()
    // MarketQueryEvents()
    // QueryHisoryEvents()
    loadTimeFaucet()

    setInitialLoading(false)
  }, [ContractPairOrderAddress])

  const sendTxDeposit = async (
    _amount: number | string,
    addressToken: string
  ) => {
    if (!window.ethereum) return console.log('Please install metamask')
    try {
      setIsLoadingTx(true)
      const amount = toWei(_amount)
      const contract = getPairOrderContract()
      const token = getTokenContract(addressToken)
      const address = (
        await window.ethereum.request({ method: 'eth_accounts' })
      )[0]
      const amountApprove = Number(
        toEther(await token.allowance(address, ContractPairOrderAddress))
      )
      if (amountApprove < Number(_amount)) {
        const transactionHashApprove = await token.approve(
          ContractPairOrderAddress,
          ethers.constants.MaxUint256
        )
        await transactionHashApprove.wait()
      }
      const transactionHash = await contract.deposit(amount, addressToken)
      console.log(transactionHash.hash)
      setTxNotification(transactionHash.hash)
      setIsLoadingTxNavBar(true)
      await transactionHash.wait()
      setIsLoadingTxNavBar(false)
      loadBalances()
      setIsLoadingTx(false)
      return transactionHash.hash
    } catch (error: any) {
      setIsLoadingTx(false)
      setIsLoadingTxNavBar(false)
      throw new Error((error))
      // throw new Error(error.error.data.message)
        
  

    }
  }
  const sendTxWithdraw = async (
    _amount: number | string,
    addressToken: string
  ) => {
    if (!window.ethereum) return console.log('Please install metamask')
    try {
      setIsLoadingTx(true)
      const amount = toWei(_amount)
      const contract = getPairOrderContract()
      const transactionHash = await contract.withdraw(amount, addressToken)
      console.log(transactionHash.hash)
      setTxNotification(transactionHash.hash)
      setIsLoadingTxNavBar(true)
      await transactionHash.wait()
      setIsLoadingTxNavBar(false)

      loadBalances()

      setIsLoadingTx(false)
      return transactionHash.hash
    } catch (error: any) {
      setIsLoadingTx(false)
      setIsLoadingTxNavBar(false)
      throw new Error(error.reason)
    }
  }

  const sendTxFaucet = async () => {
    if (!window.ethereum) return console.log('Please install metamask')
    try {
      setIsLoadingTx(true)
      const contract = getFaucetContract()
      const transactionHash = await contract.getFaucet()
      console.log(transactionHash.hash)
      setTxNotification(transactionHash.hash)
      setIsLoadingTxNavBar(true)
      await transactionHash.wait()
      setIsLoadingTxNavBar(false)

      loadBalances()

      setIsLoadingTx(false)
      return transactionHash.hash
    } catch (error: any) {
      setIsLoadingTx(false)
      setIsLoadingTxNavBar(false)
      throw new Error(error.reason)
    }
  }

  const sendTxMarketOrder = async (side: number, _amount: number | string) => {
    if (!window.ethereum) return console.log('Please install metamask')
    try {
      setIsLoadingTx(true)
      const contract = getPairOrderContract()
      const amount = toWei(_amount)
      const transactionHash = await contract.createMarketOrder(side, amount, 0)
      console.log(transactionHash.hash)
      setTxNotification(transactionHash.hash)
      setIsLoadingTxNavBar(true)
      await transactionHash.wait()
      setIsLoadingTxNavBar(false)
 
      loadHistoryByAddress()

      setIsLoadingTx(false)
      return transactionHash.hash
    } catch (error: any) {
      setIsLoadingTx(false)
      setIsLoadingTxNavBar(false)
      throw new Error(error.reason)
    }
  }

  const sendTxLimitOrder = async (
    side: number,
    _amount: number | string,
    _price: number | string
  ) => {
    if (!window.ethereum) return console.log('Please install metamask')
    try {
      setIsLoadingTx(true)
      const amount = toWei(_amount)
      const price = toWei(_price)
      const contract = getPairOrderContract()
      const prevNodeID = await contract._findIndex(price, side)
      const transactionHash = await contract.createLimitOrder(
        side,
        amount,
        price,
        prevNodeID
      )
      setTxNotification(transactionHash.hash)
      setIsLoadingTxNavBar(true)
      await transactionHash.wait()
      setIsLoadingTxNavBar(false)
 
      loadBalances()
      loadOrderBookByAddress()
      loadHistoryByAddress()

      setIsLoadingTx(false)
      return transactionHash.hash
    } catch (error: any) {
      setIsLoadingTx(false)
      setIsLoadingTxNavBar(false)
      throw new Error(error.reason)
      
    }
  }

  const sendTxUpdateOrder = async (
    side: number,
    id: number,
    _newAmount: number | string,
    _newPriceOrder: number | string
  ) => {
    // updateOrder(Side _side,uint256 index, uint256 newPriceOrder, uint256 newAmount,uint256 prevIndexAdd,uint256 prevIndexRemove)

    if (!window.ethereum) return console.log('Please install metamask')
    try {
      setIsLoadingTx(true)
      const newAmount = toWei(_newAmount)
      const newPriceOrder = toWei(_newPriceOrder)
      const contract = getPairOrderContract()
      const prevIndexAdd = await contract._findIndex(newPriceOrder, side)
      const prevIndexRemove = await contract._findPrevOrder(side, id)
      const transactionHash = await contract.updateOrder(
        side,
        id,
        newPriceOrder,
        newAmount,
        prevIndexAdd,
        prevIndexRemove
      )

      //       prevIndexAdd = await pairorderbook._findIndex(newPrice, isBuy)
      // prevIndexRemove = await pairorderbook._findPrevOrder(isBuy, index)
      // await pairorderbook.connect(owner).updateOrder(isBuy, index, newPrice,newAmount,prevIndexAdd,prevIndexRemove)

      console.log(transactionHash.hash)
      setTxNotification(transactionHash.hash)
      setIsLoadingTxNavBar(true)
      await transactionHash.wait()
      setIsLoadingTxNavBar(false)

      loadBalances()
      loadOrderBookByAddress()
      loadHistoryByAddress()

      setIsLoadingTx(false)
      return transactionHash.hash
    } catch (error: any) {
      setIsLoadingTx(false)
      setIsLoadingTxNavBar(false)
      throw new Error(error.reason)
    }
  }

  const sendTxCancelOrder = async (side: number, id: number | string) => {
    if (!window.ethereum) return console.log('Please install metamask')
    try {
      setIsLoadingTx(true)
      const contract = getPairOrderContract()
      const prevNodeID = await contract._findPrevOrder(side, id)
      const transactionHash = await contract.removeOrder(side, id, prevNodeID)
      console.log(transactionHash.hash)
      setTxNotification(transactionHash.hash)
      setIsLoadingTxNavBar(true)
      await transactionHash.wait()
      setIsLoadingTxNavBar(false)

      loadOrderBookByAddress()
      loadBalances()
      loadHistoryByAddress()

      setIsLoadingTx(false)
      return transactionHash.hash
    } catch (error: any) {
      setIsLoadingTx(false)
      setIsLoadingTxNavBar(false)
      throw new Error(error.reason)
    }
  }

  const sendTxCreatePair = async (
    addressToken0: string,
    addressToken1: string
  ) => {
    if (!window.ethereum) return console.log('Please install metamask')
    try {
      const contract = getFactoryPairContract()
      const transactionHash = await contract.createPair(
        addressToken0,
        addressToken1
      )
      console.log(transactionHash.hash)
      setIsLoadingTxNavBar(true)
      await transactionHash.wait()

      loadListFactoryPairAddress()

      setIsLoadingTxNavBar(false)
      return transactionHash.hash
    } catch (error: any) {
      setIsLoadingTxNavBar(false)
      throw new Error(error.reason)
    }
  }

  const checkFactoryPair = async (
    addressToken0: string,
    addressToken1: string
  ) => {
    try {
      if (!window.ethereum) return console.log('Please install metamask')
      const contract = getFactoryPairContract()
      const result = await contract.getPair(addressToken0, addressToken1)
      return result

    } catch (error) {
      console.log(error)
    }
  }

  const loadListFactoryPairAddress = async () => {
    try {
      if (!window.ethereum) return console.log('Please install metamask')
      setIsLoadingListFactoryPairAddress(true)
      setListPairOrder([])
      const contractFactoryPair = getFactoryPairContract()
      const length = (await contractFactoryPair.allPairsLength()).toNumber()
      const Fixlength = 10
      let listFactoryPairAddress = []
      for (let i = 0; i < length && i < Fixlength; i++) {
        listFactoryPairAddress.push(await contractFactoryPair.allPairs(i))
      }

      let dataListPairOrderTemp: TypeListPairOrder[] = []
      listFactoryPairAddress.map(async (address,index) => {
       const contractPairOrder = getPairOrderContractDynamic(address)
       const [dataAddressToken0, dataAddressToken1, dataPrice] =
         await Promise.all([
           await contractPairOrder.token0(),
           await contractPairOrder.token1(),
           await contractPairOrder.price(),
         ])

       const token0 = getTokenContract(dataAddressToken0)
       const token1 = getTokenContract(dataAddressToken1)
       const [dataMetaDataToken0, dataMetaDataToken1, dataToTalSupplyToken0] =
         await Promise.all([
           await token0.symbol(),
           await token1.symbol(),
           await token0.totalSupply(),
         ])

       const struct: TypeListPairOrder = {
         addressContractPair: address,
         addressToken0: dataAddressToken0,
         addressToken1: dataAddressToken1,
         symbolToken0: dataMetaDataToken0.toUpperCase(),
         symbolToken1: dataMetaDataToken1.toUpperCase(),
         price: toEtherandFixFloatingPoint(dataPrice),
         totalSuplly: toEtherandFixFloatingPoint(dataToTalSupplyToken0),
       }
       dataListPairOrderTemp.push(struct)
       setListPairOrder((prev) => [...prev, struct])

       if(index == listFactoryPairAddress.length-1){
        setIsLoadingListFactoryPairAddress(false)
       }
     })

    } catch (error) {
      setIsLoadingListFactoryPairAddress(false)
      console.log(error)
    }
  }

  const loadTimeFaucet = async () => {
    try {
      if (!window.ethereum) return console.log('Please install metamask')
      const accounts = await window.ethereum.request({ method: 'eth_accounts' })
      const contract = getFaucetContract()
      const time = await contract.timeFaucet(accounts[0])
      setTimeUnLockFaucet(time.toNumber())
    } catch (error) {
      console.log(error)
    }
  }

  const loadMetaDataToken = async () => {
    if (!window.ethereum) return console.log('Please install metamask')
    try {
      setSymbolToken0('')
      setSymbolToken1('')
      const token0 = getTokenContract(ContractToken0Address)
      const token1 = getTokenContract(ContractToken1Address)
      const [dataMetaDataToken0, dataMetaDataToken1] = await Promise.all([
        await token0.symbol(),
        await token1.symbol(),
      ])

      setSymbolToken0(dataMetaDataToken0.toUpperCase())
      setSymbolToken1(dataMetaDataToken1.toUpperCase())
    } catch (error) {
      console.log(error)
    }
  }

  const loadPriceToken = async () => {
    if (!window.ethereum) return console.log('Please install metamask')
    try {
      const contract = getPairOrderContract()

      const dataPriceToken = await contract.price()

      setPriceToken(toEtherandFixFloatingPoint(dataPriceToken))
    } catch (error) {
      console.log(error)
    }
  }

  const loadBalances = async () => {
    if (!window.ethereum) return console.log('Please install metamask')
    try {
      const contract = getPairOrderContract()
      const token0 = getTokenContract(ContractToken0Address)
      const token1 = getTokenContract(ContractToken1Address)

      const accounts = await window.ethereum.request({ method: 'eth_accounts' })

      const [
        dataBalancesSpotToken0,
        dataBalancesTradeToken0,
        dataBalancesSpotToken1,
        dataBalancesTradeToken1,
        dataBalancesERC20Token0,
        dataBalancesERC20Token1,
      ] = await Promise.all([
        await contract.balancesSpot(accounts[0], ContractToken0Address),
        await contract.balancesTrade(accounts[0], ContractToken0Address),
        await contract.balancesSpot(accounts[0], ContractToken1Address),
        await contract.balancesTrade(accounts[0], ContractToken1Address),
        await token0.balanceOf(accounts[0]),
        await token1.balanceOf(accounts[0]),
      ])
      setBalancesSpotToken0(toEtherFloatingPoint(dataBalancesSpotToken0, 8))
      setBalancesTradeToken0(toEtherFloatingPoint(dataBalancesTradeToken0, 8))
      setBalancesSpotToken1(toEtherFloatingPoint(dataBalancesSpotToken1, 8))
      setBalancesTradeToken1(toEtherFloatingPoint(dataBalancesTradeToken1, 8))
      setBalancesERC20Token0(toEtherFloatingPoint(dataBalancesERC20Token0, 8))
      setBalancesERC20Token1(toEtherFloatingPoint(dataBalancesERC20Token1, 8))
    } catch (error) {
      console.log(error)
    }
  }

  const loadOrderBook = async () => {
    if (!window.ethereum) return console.log('Please install metamask')

    setLoadingOrderBuy(true)
    setLoadingOrderSell(true)
    try {
      // setOrderBookBuy([])
      // setOrderBookSell([])

      const contract = getPairOrderContract()

      const [dataOrderSell, dataOrderBuy] = await Promise.all([
        await contract.getOrderBook(1),
        await contract.getOrderBook(0),
      ])

      let tempDataOrderBuy: Order[] = []
      dataOrderBuy.map((order) => {
        const structOrder: Order = {
          id: order.id.toNumber(),
          addressTrader: order.trader,
          BuyOrSell: order.isBuy,
          createdDate: order.createdDate.toString(),
          addressToken: order.token.toString(),
          amount: toEtherandFixFloatingPoint(order.amount),
          price: toEtherandFixFloatingPoint(order.price),
          filled: toEtherandFixFloatingPoint(order.filled),
        }
        tempDataOrderBuy.push(structOrder)
      })
      setOrderBookBuy(tempDataOrderBuy)

      let tempDataOrderSell: Order[] = []
      dataOrderSell.map((order) => {
        const structOrder: Order = {
          id: order.id.toNumber(),
          addressTrader: order.trader.toString(),
          BuyOrSell: order.isBuy,
          createdDate: order.createdDate.toString(),
          addressToken: order.token.toString(),
          amount: toEtherandFixFloatingPoint(order.amount),
          price: toEtherandFixFloatingPoint(order.price),
          filled: toEtherandFixFloatingPoint(order.filled),
        }
        tempDataOrderSell.push(structOrder)
      })
      setOrderBookSell(tempDataOrderSell?.reverse())

      setLoadingOrderBuy(false)
      setLoadingOrderSell(false)
    } catch (error) {
      setLoadingOrderBuy(false)
      setLoadingOrderSell(false)
      // setOrderBookBuy([])
      // setOrderBookSell([])
      console.log(error)
    }
  }

  const loadOrderBookByAddress = async () => {
    if (!window.ethereum) return console.log('Please install metamask')

    try {
      setIsLoadingOrderBookByAddress(true)
      // setOrderBookByAddress([])

      const contract = getPairOrderContract()

      const address = (
        await window.ethereum.request({ method: 'eth_accounts' })
      )[0]
      const [dataOrderSell, dataOrderBuy] = await Promise.all([
        await contract.getOrderBook(1),
        await contract.getOrderBook(0),
      ])

      let tempDataOrder: Order[] = []
      dataOrderBuy.map((order) => {
        if (order.trader.toLocaleLowerCase() === address) {
          const structOrder: Order = {
            id: order.id.toNumber(),
            addressTrader: order.trader,
            BuyOrSell: order.isBuy,
            createdDate: order.createdDate.toString(),
            addressToken: order.token.toString(),
            amount: toEtherandFixFloatingPoint(order.amount),
            price: toEtherandFixFloatingPoint(order.price),
            filled: toEtherandFixFloatingPoint(order.filled),
          }
          tempDataOrder.push(structOrder)
        }
      
      })

      dataOrderSell.map((order) => {
        if (order.trader.toLocaleLowerCase() == address) {
          const structOrder: Order = {
            id: order.id.toNumber(),
            addressTrader: order.trader,
            BuyOrSell: order.isBuy,
            createdDate: order.createdDate.toString(),
            addressToken: order.token.toString(),
            amount: toEtherandFixFloatingPoint(order.amount),
            price: toEtherandFixFloatingPoint(order.price),
            filled: toEtherandFixFloatingPoint(order.filled),
          }
           tempDataOrder.push(structOrder)
          }
        })
        setOrderBookByAddress(tempDataOrder)

      setIsLoadingOrderBookByAddress(false)
    } catch (error) {
      setIsLoadingOrderBookByAddress(false)
      // setOrderBookByAddress([])
      console.log(error)
    }
  }

  const loadHistoryByAddress = async () => {
    if (!window.ethereum) return console.log('Please install metamask')
    try {
      const contract = getPairOrderContract()

      const accounts = await window.ethereum.request({ method: 'eth_accounts' })

      const data = await contract.getOrderHisotyByAddress(accounts[0])
      const covertData = Object.keys(data).map((key) => data[key as any])

      setHistoryOrderEvent(covertData.reverse())
    } catch (error) {
      console.log(error)
    }
  }
  const loadHistoryMarketOrder = async () => {
    if (!window.ethereum) return console.log('Please install metamask')
    try {
      // setTradingViewList([])
      const contract = getPairOrderContract()
      const data = await contract.getMarketOrder()
      const covertData = Object.keys(data).map((key) => data[key as any])
      setMarketEvent(covertData.reverse())

      let temp: TypesTradingViewOriginal[] = []
      data.map((item) => {
        const data: TypesTradingViewOriginal = {
          price: Number(ethers.utils.formatEther(item.price)),
          time: item.date.toNumber(),
        }
        temp.push(data)
      })
      console.log('temp', temp)
      setTradingViewList(temp)

    } catch (error) {
      console.log(error)
    }
  }

  const addlistenerMarketEvents = async () => {
    if (!window.ethereum) return console.log('Please install metamask')
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum as any)
      const contract = new ethers.Contract(
        ContractPairOrderAddress,
        artifactPairNewOrder.abi,
        provider
      ) as PairNewOrder

      contract.on('SumMarketOrder', async () => {
        loadHistoryMarketOrder()
        loadOrderBookByAddress()
        loadPriceToken()
        loadBalances()
        loadOrderBook()
      })
      contract.on('CreateLimitOrder', async () => {
        loadOrderBook()
      })
      contract.on('UpdateOrder', async () => {
        loadOrderBook()
      })
      contract.on('RemoveOrder', async () => {
        loadOrderBook()
      })

      if (window.ethereum != undefined) {
        //@ts-ignore
        window.ethereum.on('accountsChanged', () => {
          window.location.reload()
        })
        interface ConnectInfo {
          chainId: string
        }

        //@ts-ignore
        window.ethereum.on('chainChanged', (_chainId) =>
          window.location.reload()
        )
      }
    } catch (error) {}
  }

  /////////////////////////////////////////////////////////////////////
  // QueryEvents for the backend But now use another method instead  //
  /////////////////////////////////////////////////////////////////////
  // const MarketQueryEvents = async() => {
  //   if (!window.ethereum) return console.log('Please install metamask')
  //    try {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum as any )
  //       const blockNumber = await provider.getBlockNumber()
  //       const contract = new ethers.Contract(ContractPairOrderAddress, artifactPairNewOrder.abi, provider) as PairNewOrder
  //       //const filter = contract.filters.CreateLimitOrder()
  //       const filterMarketOrder = contract.filters.MarketOrder()
  //       const filterSumMarketOrder = contract.filters.SumMarketOrder()

  //         const [
  //           dataMarketOrder,
  //           dataSumMarketOrder,
  //         ] = await Promise.all([
  //           await contract.queryFilter(filterMarketOrder, initBlockTime, blockNumber),
  //           await contract.queryFilter(filterSumMarketOrder, initBlockTime, blockNumber)
  //         ])

  //       dataMarketOrder.map(async (item) => {
  //         const timeDate = (await provider.getBlock(item.blockNumber)).timestamp
  //         const structEvent: EventMarketOrder = {
  //           Date: timeDate,
  //           Side: item.args._isBuy,
  //           amount: toEtherandFixFloatingPoint(item.args._amount),
  //           price: toEtherandFixFloatingPoint(item.args._price),
  //         }
  //         // console.log(structEvent)
  //         setMarketEvent((prev) => [structEvent, ...prev])
  //       })

  //       dataSumMarketOrder.map(async (item) => {
  //         const timeDate = (await provider.getBlock(item.blockNumber)).timestamp
  //         const structEvent: EventMarketOrder = {
  //           Date: timeDate,
  //           Side: item.args._isBuy,
  //           amount: toEtherandFixFloatingPoint(item.args._amount),
  //           price: toEtherandFixFloatingPoint(item.args._lastPrice),
  //         }
  //         // console.log(structEvent)
  //         setSumMarketEvent((prev) => [structEvent, ...prev])
  //       })

  //       contract.on('MarketOrder', async (_isBuy,_amount,_price,event) => {
  //          const timeDate = (await provider.getBlock(event.blockNumber)).timestamp
  //          const structEvent: EventMarketOrder = {
  //            Date: timeDate,
  //            Side: _isBuy,
  //            amount: toEtherandFixFloatingPoint(_amount),
  //            price: toEtherandFixFloatingPoint(_price),
  //          }
  //          console.log("MarketOrder tigger",structEvent)
  //         setMarketEvent((prev) => [structEvent,...prev])
  //         // loadOrderBook()
  //       })

  //       contract.on('SumMarketOrder', async (_isBuy,_amount,_price,event) => {
  //          const timeDate = (await provider.getBlock(event.blockNumber)).timestamp
  //          const structEvent: EventMarketOrder = {
  //            Date: timeDate,
  //            Side: _isBuy,
  //            amount: toEtherandFixFloatingPoint(_amount),
  //            price: toEtherandFixFloatingPoint(_price),
  //          }
  //            console.log('SumMarketOrder tigger', structEvent)
  //         setSumMarketEvent((prev) => [structEvent, ...prev])
  //         // loadOrderBook()
  //       })
  //     } catch (error) {

  //     }
  // }

  /////////////////////////////////////////////////////////////////////
  // QueryEvents for the backend But now use another method instead  //
  /////////////////////////////////////////////////////////////////////
  // const QueryHisoryEvents = async() => {
  //   if (!window.ethereum) return console.log('Please install metamask')
  //    try {
  //       setHistoryOrderEvent([])
  //       const provider = new ethers.providers.Web3Provider(window.ethereum as any )
  //       const blockNumber = await provider.getBlockNumber()
  //       const contract = new ethers.Contract(ContractPairOrderAddress, artifactPairNewOrder.abi, provider) as PairNewOrder
  //       const address = ( await window.ethereum.request({ method: 'eth_accounts' }))[0]
  //       const filterLimitOrder = contract.filters.CreateLimitOrder(null,null,null,address)
  //       const filterUpdateOrder = contract.filters.UpdateOrder(null,null,null,address)
  //       const filterRemoveOrder = contract.filters.RemoveOrder(null, null,null,address)
  //       const filterMarketOrder = contract.filters.SumMarketOrder(null,null,null,address)
  //       const [
  //         dataLimitOrder,
  //         dataUpdateOrder,
  //         dataRemoveOrder,
  //         dataMarketOrder,
  //       ] = await Promise.all([
  //         await contract.queryFilter(filterLimitOrder, initBlockTime, blockNumber),
  //         await contract.queryFilter(filterUpdateOrder, initBlockTime, blockNumber),
  //         await contract.queryFilter(filterRemoveOrder, initBlockTime, blockNumber),
  //         await contract.queryFilter(filterMarketOrder, initBlockTime, blockNumber),
  //       ])

  //       dataLimitOrder.map(async (item) => {
  //         const timeDate = (await provider.getBlock(item.blockNumber)).timestamp
  //         const structEvent: EventAllOrder = {
  //           Date: timeDate,
  //           Side: item.args._isBuy,
  //           amount: toEtherandFixFloatingPoint(item.args._amount),
  //           price: toEtherandFixFloatingPoint(item.args._price),
  //           Type: 'Limit',
  //         }
  //         console.log('dataLimitOrder',structEvent)
  //         setHistoryOrderEvent((prev) => [...prev, structEvent])
  //       })
  //       dataUpdateOrder.map(async (item) => {
  //         const timeDate = (await provider.getBlock(item.blockNumber)).timestamp
  //         const structEvent: EventAllOrder = {
  //           Date: timeDate,
  //           Side: item.args._isBuy,
  //           amount: toEtherandFixFloatingPoint(item.args.newAmount),
  //           price: toEtherandFixFloatingPoint(item.args.newPriceOrder),
  //           Type: 'Update',
  //         }
  //          console.log('dataUpdateOrder', structEvent)
  //         setHistoryOrderEvent((prev) => [...prev, structEvent])
  //       })
  //       dataRemoveOrder.map(async (item) => {
  //         const timeDate = (await provider.getBlock(item.blockNumber)).timestamp
  //         const structEvent: EventAllOrder = {
  //           Date: timeDate,
  //           Side: item.args._isBuy,
  //           amount: toEtherandFixFloatingPoint(item.args._amount),
  //           price: toEtherandFixFloatingPoint(item.args._price),
  //           Type: 'Remove',
  //         }
  //            console.log('dataRemoveOrder', structEvent)
  //         setHistoryOrderEvent((prev) => [...prev, structEvent])
  //       })
  //       dataMarketOrder.map(async (item) => {
  //         const timeDate = (await provider.getBlock(item.blockNumber)).timestamp
  //         const structEvent: EventAllOrder = {
  //           Date: timeDate,
  //           Side: item.args._isBuy,
  //           amount: toEtherandFixFloatingPoint(item.args._amount),
  //           price: '0',
  //           Type: 'Market',
  //         }
  //            console.log('dataMarketOrder', structEvent)
  //         setHistoryOrderEvent((prev) => [...prev, structEvent])
  //       })

  //         contract.on('CreateLimitOrder', async () => {
  //            loadOrderBook()
  //         })
  //         contract.on('UpdateOrder', async () => {
  //            loadOrderBook()
  //         })
  //         contract.on('RemoveOrder', async () => {
  //            loadOrderBook()
  //         })

  //     } catch (error) {

  //     }
  // }

  return (
    <ContractContext.Provider
      value={{
        loadingOrderSell,
        loadingOrderBuy,
        loadOrderBook,
        orderBookSell,
        orderBookBuy,
        priceToken,
        sendTxMarketOrder,
        balancesSpotToken0,
        balancesTradeToken0,
        balancesSpotToken1,
        balancesTradeToken1,
        balancesERC20Token0,
        balancesERC20Token1,
        sendTxLimitOrder,
        isLoadingOrderBookByAddress,
        orderBookByAddress,
        loadOrderBookByAddress,
        sendTxCancelOrder,
        sendTxUpdateOrder,
        marketEvent,
        historyOrderEvent,
        // sumMarketEvent,
        sendTxDeposit,
        sendTxWithdraw,
        tradingViewList,
        loadHistoryByAddress,
        timeUnLockFaucet,
        sendTxFaucet,
        isLoadingTx,


        txNotification,
        isLoadingTxNavBar,

        setContractPairOrderAddress,
        setContractToken0Address,
        setContractToken1Address,

        symbolToken0,
        symbolToken1,

        checkFactoryPair,
        loadListFactoryPairAddress,
        sendTxCreatePair,
        listPairOrder,
        isLoadingListFactoryPairAddress,

        ContractPairOrderAddress,
        ContractToken0Address,
        ContractToken1Address,
      }}
    >
      {!initialLoading && children}
    </ContractContext.Provider>
  )
}
