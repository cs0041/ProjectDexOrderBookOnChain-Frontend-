import React, { useContext, useEffect, useState, useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { ContractContext } from '../context/ContratContext'
import { createChart, ColorType, CrosshairMode } from 'lightweight-charts'
import { ethers } from 'ethers'

export const ChartComponent = () => {
  const chartContainerRef = useRef()
  const chart = useRef()
  const resizeObserver = useRef()
  const candleSeriesRef = useRef()

  const { tradingViewList } = useContext(ContractContext)

  useEffect(() => {
    // console.log('tradingViewList', tradingViewList)
    // if (tradingViewList.length >0) setDataTradingView(convertToOHLC(tradingViewList))
    const handleResize = () => {
      // @ts-ignore
      chart.current.applyOptions({
        // @ts-ignore
        width: chartContainerRef.current.clientWidth,
        // @ts-ignore
        // height: chartContainerRef.current.clientHeight,
      })
    }
    // @ts-ignore
    chart.current = createChart(chartContainerRef.current, {
      // @ts-ignore
      width: chartContainerRef.current.clientWidth,
      // @ts-ignore
      height: 654,
      handleScale: {
        axisPressedMouseMove: true,
      },
      layout: {
        background: {
          color: '#101018',
        },
        textColor: 'rgba(255, 255, 255, 0.9)',
      },
      grid: {
        vertLines: {
          color: '#334158',
        },
        horzLines: {
          color: '#334158',
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      priceScale: {
        borderColor: '#485c7b',
      },
      timeScale: {
        timeVisible: true,
        secondVisible: false,
        borderColor: '#485c7b',
      },
    })
    // @ts-ignore
    chart.current.timeScale().fitContent()
    // @ts-ignore
    candleSeriesRef.current = chart.current.addCandlestickSeries()
    // candleSeries.setData(tradingViewList)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      // @ts-ignore
      chart.current.remove()
    }
  }, [])

  useEffect(() => {
    if (chart.current)
      // @ts-ignore
      candleSeriesRef.current.setData(tradingViewList)
  }, [tradingViewList])

  // @ts-ignore
  return <div ref={chartContainerRef} />
}


const TradingviewGraph = () => {


  return (
    <div className="h-full  ">
      

      <ChartComponent/>

    </div>
  )
}

export default TradingviewGraph