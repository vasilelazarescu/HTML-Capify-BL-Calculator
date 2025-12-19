export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f7f8] py-10 px-5 flex items-center justify-center">
      <div className="w-full max-w-[1200px]">
        <div className="bg-white rounded-3xl border-b border-[#edf1f2] p-10 lg:px-14 relative min-h-[526px]">
          {/* Header Section */}
          <div className="mb-15 max-w-[464px]">
            <h1 className="font-bold text-[28px] leading-[1.5] text-[#0b3558] mb-3">
              Business Loan Calculator
            </h1>
            <p className="font-normal text-base leading-[1.65] text-[#333]">
              Get an estimate of how much you might be able to borrow in under a minute.
            </p>
          </div>

          {/* Loan Duration Section */}
          <div className="mb-10 max-w-[496px]">
            <label className="block font-semibold text-base leading-[1.65] text-[#333] mb-1">
              How long do you want to lend over?
            </label>
            <p className="font-bold text-xl leading-[1.65] text-[#0b3558] mb-5">
              6 months
            </p>
            <div className="relative h-7 max-w-[464px]">
              <div className="absolute top-[10px] left-0 right-0 h-2 bg-[#f5f7f8] rounded-[32px]"></div>
              <div className="absolute top-[10px] left-0 h-2 bg-[#a6ce39] rounded-[32px] z-[1]" style={{ width: '34.8%' }}></div>
              <div 
                className="absolute top-0 w-7 h-7 bg-[#a6ce39] rounded-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer z-[2] flex items-center justify-center"
                style={{ left: 'calc(34.8% - 14px)' }}
              >
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Monthly Turnover Section */}
          <div className="mb-10 max-w-[496px]">
            <label className="block font-semibold text-base leading-[1.65] text-[#333] mb-1">
              What is your monthly average turnover?
            </label>
            <p className="font-bold text-xl leading-[1.65] text-[#0b3558] mb-5">
              £ 110,000
            </p>
            <div className="relative h-7 max-w-[464px]">
              <div className="absolute top-[10px] left-0 right-0 h-2 bg-[#f5f7f8] rounded-[32px]"></div>
              <div className="absolute top-[10px] left-0 h-2 bg-[#a6ce39] rounded-[32px] z-[1]" style={{ width: '25.6%' }}></div>
              <div 
                className="absolute top-0 w-7 h-7 bg-[#a6ce39] rounded-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer z-[2] flex items-center justify-center"
                style={{ left: 'calc(25.6% - 14px)' }}
              >
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <button className="bg-[#a6ce39] text-[#0b3558] font-semibold text-base tracking-[-0.08px] px-8 py-4 border-none rounded-[32px] cursor-pointer min-w-[181px] h-14 mt-2 hover:bg-[#95ba2f] transition-colors">
            Calculate
          </button>

          {/* Results Panel */}
          <div className="lg:absolute lg:right-14 lg:top-6 lg:w-[560px] mt-10 lg:mt-0 bg-[#f5f7f8] border border-[#edf1f2] rounded-xl p-10 lg:px-8 flex flex-col gap-3">
            <div className="text-center pb-[15px]">
              <h2 className="font-bold text-xl leading-[1.65] text-[#0b3558] mb-[7px]">
                Congratulations!
              </h2>
              <p className="font-normal text-base leading-[1.65] text-[#333] mb-[7px]">
                You may be eligible for a loan amount up to:
              </p>
              <p className="font-bold text-[28px] leading-[1.5] text-[#0b3558] mb-[7px]">
                £68,095
              </p>
              <p className="font-normal text-[13px] leading-4 text-[#626d7c]">
                * Subject to Capify's standard credit assessment criterial terms & conditions
              </p>
            </div>

            <div className="h-px bg-[#edf1f2]"></div>

            <p className="font-semibold text-base leading-[1.65] text-[#333] text-center">
              Your Repayment:
            </p>

            <div className="flex items-start gap-4 h-[49px]">
              <div className="flex-1 flex flex-col items-center text-center">
                <p className="font-normal text-[13px] leading-4 text-[#626d7c] mb-1">
                  Daily repayments:
                </p>
                <p className="font-bold text-xl leading-[1.65] text-[#0b3558] whitespace-nowrap">
                  £715
                </p>
              </div>
              <div className="w-px h-full bg-[#edf1f2]"></div>
              <div className="flex-1 flex flex-col items-center text-center">
                <p className="font-normal text-[13px] leading-4 text-[#626d7c] mb-1">
                  Monthly repayments:
                </p>
                <p className="font-bold text-xl leading-[1.65] text-[#0b3558] whitespace-nowrap">
                  £14,300
                </p>
              </div>
              <div className="w-px h-full bg-[#edf1f2]"></div>
              <div className="flex-1 flex flex-col items-center text-center">
                <p className="font-normal text-[13px] leading-4 text-[#626d7c] mb-1">
                  Total Cost of Loan:
                </p>
                <p className="font-bold text-xl leading-[1.65] text-[#0b3558] whitespace-nowrap">
                  £17,705
                </p>
              </div>
            </div>

            <div className="h-px bg-[#edf1f2]"></div>

            <div className="text-center">
              <p className="font-semibold text-base leading-[1.65] text-[#333] mb-[5px]">
                Total Repayment:
              </p>
              <p className="font-bold text-xl leading-[1.65] text-[#0b3558]">
                £85,800
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
