"use client"

import React, { useEffect, useState } from 'react'

const Page = () => {

  const [startups, setStartups] = useState<any>([])

  const fetchData = async () => {
    const res = await fetch('http://localhost:9080/startups')
    const data = await res.json()
    return data
  }

  useEffect(() => {
    (async () => {
      let data = await fetchData()
      setStartups(data);
    })()
  }, [])

  useEffect(() => {
    console.log(startups);
  }, [startups])

  return (
    <div>exeplore</div>
  )
}

export default Page