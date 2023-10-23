"use client"

import React, { useState } from 'react'

type HookReturnType = {
  data: any; // Change 'any' to the specific type of your data
  loading: boolean;
};

const useContribute = (): [(values: any) => void, HookReturnType] => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const submitRequest = async (values: any) => {
    const request = await fetch("http://localhost:9080/contribute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(values),
    })
    const response = await request.json();
    setData(response)
    setLoading(false);
    return response;
  }

  return [submitRequest, { data, loading }] as const

}

export default useContribute