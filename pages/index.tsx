import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
type Props = {}

function index({}: Props) {
  const router = useRouter()
  useEffect(() => {
    router.push('/markets')
  }, )
  
}

export default index