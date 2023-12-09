"use client"

import React from 'react'
import { motion } from "framer-motion"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import ContributeForm from '@/components/contributeForms/contributeForm'

const page = () => {
  return (
    <div className="container w-full flex items-center justify-center min-h-[80vh] py-6">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, x: "20%" }}
          animate={{ opacity: 1, x: "00%" }}
          transition={{ duration: 0.5 }} >
          <div>
            <button className="flex items-center gap-2">
              <AiOutlineArrowLeft />
              <span>
                back
              </span>
            </button>
            <h2 className="pt-2 text-4xl font-semibold text-headingText">Please, Give us the information we need</h2>
            <p className="pt-1 text-sm text-text">Our team will review the information you provide us to insure that it's correct, we will notify you via email when we accept your proposal.</p>
          </div>
          <ContributeForm />
        </motion.div>
      </div>
    </div>
  )
}

export default page