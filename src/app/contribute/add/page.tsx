"use client"

import { useState } from "react"
import { FiUserCheck } from "react-icons/fi"
import { BsBuildings } from "react-icons/bs"
import { MdArrowForwardIos } from "react-icons/md"
import { AiOutlineArrowLeft } from "react-icons/ai"
import ContributeForm from "@/components/contributeForms/contributeForm"

const page = () => {
  const [stepNumber, setStepNumber] = useState(1)
  const [typeOfSubmit, setTypeOfSubmit] = useState<string>()

  const nextStep = (type: string) => {
    setTypeOfSubmit(type)
    setStepNumber(stepNumber + 1)
  }

  return (
    <div className="container w-full flex items-center justify-center min-h-[80vh] py-6">
      <div className="w-full">
        <p className="pb-8 font-semibold text-headingText">step <span className="text-main">{stepNumber}</span> of 2</p>

        <div>
          {stepNumber === 1 ?
            <>
              <div>
                <h2 className="pt-3 text-4xl font-semibold text-headingText">What kind of startup you want to add?</h2>
                <p className="pt-1 text-sm text-text">When you provide us with who is the contributer, it help us give a better information</p>
              </div>
              <div className="grid gap-3 py-5 md:grid-cols-2">
                <div onClick={() => nextStep("Mine")} className="flex items-center justify-between gap-3 px-4 py-5 duration-200 border rounded-md cursor-pointer hover:bg-gray-100">
                  <div className="h-full">
                    <FiUserCheck size={30} className="text-main" />
                    <div className="flex flex-col justify-between pt-3">
                      <h3 className="text-3xl font-semibold text-headingText">My startup</h3>
                      <p className="pt-3 text-sm text-text">help us provide better data by adding your startup to the platform</p>
                    </div>
                  </div>
                  <div>
                    <MdArrowForwardIos size={23} className="text-gray-400" />
                  </div>
                </div>

                <div onClick={() => nextStep("someoneElse")} className="flex items-center justify-between gap-3 px-4 py-5 duration-200 border rounded-md cursor-pointer hover:bg-gray-100">
                  <div className="h-full">
                    <BsBuildings size={30} className="text-main" />
                    <div className="flex flex-col justify-between pt-3">
                      <h3 className="text-3xl font-semibold text-headingText">Startup of someone</h3>
                      <p className="pt-3 text-sm text-text">adding the startup you know or you woked with will help the platform to give the best data</p>
                    </div>
                  </div>
                  <div>
                    <MdArrowForwardIos size={23} className="text-gray-400" />
                  </div>
                </div>
              </div>
            </>
            :
            stepNumber === 2 &&
            <>
              <div>
                <button className="flex items-center gap-2" onClick={() => setStepNumber(1)}>
                  <AiOutlineArrowLeft />
                  <span>
                    back
                  </span>
                </button>
                <h2 className="pt-2 text-4xl font-semibold text-headingText">Please, Give us the information we need</h2>
                <p className="pt-1 text-sm text-text">Our team will review the information you provide us to insure that it's correct, we will notify you via email when we accept your proposal.</p>
              </div>
              <ContributeForm />
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default page