import Image from "next/image"
import Yassirlogo from "@/assets/yassir-icon-1.png"
import Sekoirlogo from "@/assets/sekoir-icon-1.png"
import UbexPaylogo from "@/assets/ubexpay-icon-1.png"

export default function Home() {
  return (
    <main className="bg-gray-100">
      <div className="container">
        <section>
          <div className="h-[85vh] flex flex-col justify-center">
            <div className="flex items-center justify-center">
              <h1 className="w-4/6 text-5xl font-bold text-center text-headingText">
                Unlock your financial potential by invest or get funding
              </h1>
            </div>

            <div className="flex items-center justify-center">
              <p className="w-4/6 mt-5 text-center text-text">
                Lorem, ipsum dolor elit. Eius dolores
                esse nam rem aliquid ipsam pariatur,
                Eius dolores esse nam exercitationem,
                labore animi iusto necessitatibus, quis.
              </p>
            </div>

            <div className="flex items-center justify-center mt-5 overflow-hidden">
              <div className="grid w-2/6 grid-cols-6 p-1.5 rounded-lg bg-pink-100">
                <input type="text" className="col-span-4 ml-2 bg-transparent outline-none placeholder:text-gray-400" placeholder="Search..." />
                <button className="col-span-2 p-2 font-semibold text-white rounded-lg bg-main">Search</button>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div>
            <div className="flex items-center justify-center pt-2 pb-12">
              <h1 className="w-3/6 text-4xl font-bold text-center text-headingText">A collective of the best Algerian startups.</h1>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-5">
                <div className="flex gap-4 p-3 bg-white rounded-md">
                  <div>
                    <Image src={Yassirlogo} alt="yassir" className="w-36" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-headingText">Yassir</h3>
                    <p className="pt-3 text-sm text-text">
                      Lorem ipsum dolor sit amet consectetur.
                      quod similique facere odio quidem labore
                      temporibus blanditiis nobis eligendi.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-3 bg-white rounded-md">
                  <div>
                    <Image src={Sekoirlogo} alt="yassir" className="w-36" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-headingText">Sekoir</h3>
                    <p className="pt-3 text-sm text-text">
                      Lorem ipsum dolor sit amet consectetur.
                      quod similique facere odio quidem labore
                      temporibus blanditiis nobis eligendi.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-3 bg-white rounded-md">
                  <div>
                    <Image src={UbexPaylogo} alt="yassir" className="w-36" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-headingText">UbexPay</h3>
                    <p className="pt-3 text-sm text-text">
                      Lorem ipsum dolor sit amet consectetur.
                      quod similique facere odio quidem labore
                      temporibus blanditiis nobis eligendi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
