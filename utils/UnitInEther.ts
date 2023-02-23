// helper

import { ethers } from "ethers"

// const toString = (bytes32) => ethers.utils.parseBytes32String(bytes32)
 export const toWei = (ether: string | number) => ethers.utils.parseEther(String(ether))
export const toEther = (wei: string | number | ethers.BigNumber) =>
  ethers.utils.formatEther(wei)
export const toFixUnits = (amount: number, decimal: string) =>
  ethers.utils.formatUnits(amount, decimal)
 export const toEtherandFixFloatingPoint = (amount: ethers.BigNumber) =>
  Number(ethers.utils.formatEther(amount)).toFixed(4)
 export const toEtherFloatingPoint = (amount: ethers.BigNumber, point: number) =>
   Number(ethers.utils.formatEther(amount)).toFixed(point)

  export const FloatingPoint = 4