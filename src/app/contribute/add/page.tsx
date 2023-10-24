"use client"

import { useState } from "react"
import ContributeForm from "@/components/contributeForms/contributeForm"
import { FiUserCheck } from "react-icons/fi"
import { BsBuildings } from "react-icons/bs"
import { MdArrowForwardIos } from "react-icons/md"

const page = () => {
  const [stepNumber, setStepNumber] = useState(1)

  return (
    <div className="container py-6">
      <span className="font-semibold text-headingText">step {stepNumber} of 2</span>
      <h2 className="pt-3 text-4xl font-semibold text-headingText">What kind of startup you want to add</h2>
      <p className="pt-1 text-sm text-text">When you provide us with who is the contributer, it help us give a better information</p>
      <div className="flex flex-col gap-3 py-5">
        <div className="flex items-center justify-between px-4 py-5 border rounded-md cursor-pointer">
          <div>
            <FiUserCheck size={30} className="text-emerald-400" />
            <div className="pt-3">
              <h3 className="text-3xl font-semibold text-headingText">My startup</h3>
              <p className="text-sm text-text">help us provide better data by adding your startup to the platform</p>
            </div>
          </div>
          <div>
            <MdArrowForwardIos size={23} className="text-gray-400"/>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-5 border rounded-md cursor-pointer">
          <div>
            <BsBuildings size={30} className="text-emerald-400" />
            <div className="pt-3">
              <h3 className="text-3xl font-semibold text-headingText">Startup of someone</h3>
              <p className="text-sm text-text">adding the startup you know or you woked with will help the platform to give the best data</p>
            </div>
          </div>
          <div>
            <MdArrowForwardIos size={23} className="text-gray-400"/>
          </div>
        </div>
      </div>

      {/* <ContributeForm /> */}
    </div>
  )
}

export default page