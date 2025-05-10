import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import News from "@/components/News";
import Slider from "@/components/Slider";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="">
        <Slider />
      </section>

      <div className="relative">
        <div className="absolute top-[-120%] left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl p-6 text-center flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
              />
            </svg>
            <span>ANNOUNCEMENTS</span>
          </div>
          <p className="text-lg font-medium text-gray-800">
            Learn more about Bhutan’s parliamentary system and civic
            participation.
          </p>
        </div>

        <div style={{ width: "min(100%, 1200px)" }} className="mx-auto mt-16">
          <div className="bg-[#f0f4f8] p-6 rounded-lg shadow-md mp-wrap min-container mx-auto px-4">
            <div className="mp-search">
              <h2 className="text-xl font-semibold text-[#025e95] mb-4 mp-title">
                FIND MP(s) IN MY CONSTITUENCY
              </h2>
              <div className="flex flex-col gap-4">
                <form className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                  <input
                    id="streetpc"
                    name="Postal Code"
                    type="text"
                    placeholder="Enter Street Name/Postal Code"
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="button"
                    id="findmympbtn"
                    value="Search"
                    className="px-4 py-2 bg-[#025e95] text-white rounded-md cursor-pointer hover:bg-blue-700 transition"
                  />
                </form>
                <label className="text-sm text-red-600 hidden" id="SpecialChar">
                  Please do not key in special characters
                </label>
                <label className="text-sm text-red-600 hidden" id="LackingChar">
                  Please input the street name or postal code
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section />
      <News />
      <Footer />
    </main>
  );
}
