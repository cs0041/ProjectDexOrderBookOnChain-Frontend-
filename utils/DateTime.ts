import { timeStamp } from "console"

export function ConvertFullDateTime(timestamp : number):string {
    const date = new Date(timestamp * 1000)
    const day =  date.getDate()
    const month =  date.getMonth() + 1
    const year = date.getFullYear()
    const hours = date.getHours()
    // Minutes part from the timestamp
    const minutes = '0' + date.getMinutes()
    // Seconds part from the timestamp
    const seconds = '0' + date.getSeconds()

    // Will display time in 10:30:23 format
    const formattedTime =
      year +
      '-' +
      month +
      '-' +
      day +
      ' ' +
      hours +
      ':' +
      minutes.substr(-2) +
      ':' +
      seconds.substr(-2)
    return formattedTime
}
export function ConvertSmallDateTime(timestamp : number):string {
    const date = new Date(timestamp * 1000)
    const hours = date.getHours()
    // Minutes part from the timestamp
    const minutes = '0' + date.getMinutes()
    // Seconds part from the timestamp
    const seconds = '0' + date.getSeconds()

    // Will display time in 10:30:23 format
    const formattedTime =
      hours +
      ':' +
      minutes.substr(-2) +
      ':' +
      seconds.substr(-2)
    return formattedTime
}
