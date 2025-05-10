import React from "react";

export const ParliamentSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <img
            src="/16818179094594.png"
            alt="HM's Crown Image"
            className="mx-auto w-auto h-auto max-w-[200px]"
          />
          <h3 className="mt-3 text-xl font-semibold">Druk Gyalpo</h3>
          <p className="text-gray-700">
            The Druk Gyalpo, together with the two chambers, make up the
            Parliament of Bhutan.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* National Council */}
          <div className="border-r-2 border-gray-300 pr-4">
            <div className="text-center">
              <img
                src="/nc-logo.png"
                alt="National Council Logo"
                className="inline-block w-36 h-36"
              />
              <h3 className="mt-4 text-lg font-semibold">
                National Council of Bhutan
              </h3>
            </div>
            <div className="text-center mt-4 px-4">
              <p className="text-sm text-gray-800">
                The National Council is the second chamber of Bhutan’s bicameral
                legislature. Its main task is to monitor and review the
                functions of the government and to render advice to the Druk
                Gyalpo, the Prime Minister and the National Assembly on matters
                of national importance.
              </p>
            </div>
            <div className="flex justify-center gap-8 mt-4 text-center">
              <div>
                <h1 className="text-2xl font-bold">25</h1>
                <p>Members</p>
              </div>
              <div>
                <h1 className="text-2xl font-bold">5</h1>
                <p>year term</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <a
                href="https://web.archive.org/web/20250301020717/https://nationalcouncil.bt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  style={{
                    backgroundColor: "#025e95",
                    color: "#fff",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    border: "none",
                  }}
                >
                  Visit Website
                </button>
              </a>
            </div>
          </div>

          {/* National Assembly */}
          <div>
            <div className="text-center">
              <img
                src="/na-logo.png"
                alt="National Assembly Logo"
                className="inline-block w-36 h-36"
              />
              <h3 className="mt-4 text-lg font-semibold">
                National Assembly of Bhutan
              </h3>
            </div>
            <div className="text-center mt-4 px-4">
              <p className="text-sm text-gray-800">
                The National Assembly is the main legislative body of Bhutan’s
                Parliament. Its main functions are to ensure that the government
                safeguards the interest of the nation and fulfils the
                aspirations of the people through public review of policies,
                bills, and approving the annual national budget.
              </p>
            </div>
            <div className="flex justify-center gap-8 mt-4 text-center">
              <div>
                <h1 className="text-2xl font-bold">47</h1>
                <p>Members</p>
              </div>
              <div>
                <h1 className="text-2xl font-bold">5</h1>
                <p>year term</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <a
                href="https://web.archive.org/web/20250301020717/https://nab.gov.bt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  style={{
                    backgroundColor: "#025e95",
                    color: "#fff",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    border: "none",
                  }}
                >
                  Visit Website
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Visiting Parliament */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold">Visiting Parliament?</h3>
          <p className="text-gray-700 mt-2">
            Click the link below to register and plan your visit for a guided
            tour or to attend a session.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="/web/20250301020717/https://parliament.bt/council-visitors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                style={{
                  backgroundColor: "#025e95",
                  color: "#fff",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  border: "none",
                }}
              >
                Click here to Visit National Council
              </button>
            </a>
            <a
              href="/web/20250301020717/https://parliament.bt/assembly-visitors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                style={{
                  backgroundColor: "#025e95",
                  color: "#fff",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  border: "none",
                }}
              >
                Click here to Visit National Assembly
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParliamentSection;
