import { useState } from 'react';
import Frame11 from '../imports/Frame17462';

export default function App() {
  const [loanDuration, setLoanDuration] = useState(6); // months
  const [monthlyTurnover, setMonthlyTurnover] = useState(110000); // £
  const [showResults, setShowResults] = useState(false);

  // Calculation logic
  const calculateLoan = () => {
    setShowResults(true);
  };

  // Calculate loan amount (based on turnover and duration)
  const maxLoanAmount = Math.floor(monthlyTurnover * 0.62);
  
  // Calculate repayments
  const totalCostOfLoan = Math.floor(maxLoanAmount * 0.26);
  const totalRepayment = maxLoanAmount + totalCostOfLoan;
  const monthlyRepayment = Math.floor(totalRepayment / loanDuration);
  const dailyRepayment = Math.floor(monthlyRepayment / 20); // Assuming 20 working days per month

  return (
    <div className="relative min-h-screen bg-[#f5f7f8] flex items-center justify-center p-8">
      <div className="w-full max-w-[1328px] flex gap-[48px] flex-wrap lg:flex-nowrap">
        {/* Left Panel - Calculator Input */}
        <div className="bg-white rounded-[24px] p-[56px] w-full lg:w-[576px] flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[12px]">
            <h1 className="font-['Poppins'] font-bold text-[28px] text-[#0b3558] leading-[1.5]">
              Business Loan Calculator
            </h1>
            <p className="font-['Poppins'] text-[16px] text-[#333] leading-[1.65]">
              Get an estimate of how much you might be able to borrow in under a minute.
            </p>
          </div>

          {/* Loan Duration Slider */}
          <div className="flex flex-col gap-[12px]">
            <label className="font-['Poppins'] font-semibold text-[16px] text-[#333] leading-[1.65]">
              How long do you want to lend over?
            </label>
            <p className="font-['Poppins'] font-bold text-[20px] text-[#0b3558] leading-[1.65]">
              {loanDuration} months
            </p>
            <div className="relative">
              <input
                type="range"
                min="3"
                max="12"
                value={loanDuration}
                onChange={(e) => setLoanDuration(parseInt(e.target.value))}
                className="w-full h-[8px] rounded-[32px] appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #a6ce39 0%, #a6ce39 ${((loanDuration - 3) / 9) * 100}%, #f5f7f8 ${((loanDuration - 3) / 9) * 100}%, #f5f7f8 100%)`
                }}
              />
            </div>
          </div>

          {/* Monthly Turnover Slider */}
          <div className="flex flex-col gap-[12px]">
            <label className="font-['Poppins'] font-semibold text-[16px] text-[#333] leading-[1.65]">
              What is your monthly average turnover?
            </label>
            <p className="font-['Poppins'] font-bold text-[20px] text-[#0b3558] leading-[1.65]">
              £ {monthlyTurnover.toLocaleString()}
            </p>
            <div className="relative">
              <input
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={monthlyTurnover}
                onChange={(e) => setMonthlyTurnover(parseInt(e.target.value))}
                className="w-full h-[8px] rounded-[32px] appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #a6ce39 0%, #a6ce39 ${((monthlyTurnover - 10000) / 490000) * 100}%, #f5f7f8 ${((monthlyTurnover - 10000) / 490000) * 100}%, #f5f7f8 100%)`
                }}
              />
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateLoan}
            className="bg-[#a6ce39] text-[#0b3558] font-['Poppins'] font-semibold text-[16px] h-[56px] rounded-[32px] hover:bg-[#95b932] transition-colors"
          >
            Calculate
          </button>
        </div>

        {/* Right Panel - Results */}
        <div className={`bg-white rounded-[24px] border border-[#edf1f2] p-[40px] w-full lg:w-[576px] flex flex-col gap-[23px] transition-opacity duration-300 ${showResults ? 'opacity-100' : 'opacity-50'}`}>
          <div className="flex flex-col gap-[7px] items-center text-center">
            <p className="font-['Poppins'] font-bold text-[20px] text-[#0b3558] leading-[1.65]">
              Congratulations!
            </p>
            <p className="font-['Poppins'] text-[16px] text-[#333] leading-[1.65]">
              You may be eligible for a loan amount up to:
            </p>
            <p className="font-['Poppins'] font-bold text-[28px] text-[#0b3558] leading-[1.5]">
              £{maxLoanAmount.toLocaleString()}
            </p>
            <p className="font-['Poppins'] text-[13px] text-[#626d7c] leading-[16px]">
              * Subject to Capify's standard credit assessment criterial terms & conditions
            </p>
          </div>

          <div className="h-px bg-[#edf1f2]" />

          <p className="font-['Poppins'] font-semibold text-[16px] text-[#333] leading-[1.65] text-center">
            Your Repayment:
          </p>

          {/* Repayment Details */}
          <div className="flex gap-[16px] items-start">
            <div className="flex-1 flex flex-col items-center gap-[4px]">
              <p className="font-['Poppins'] text-[13px] text-[#626d7c] leading-[16px] text-center">
                Daily repayments:
              </p>
              <p className="font-['Poppins'] font-bold text-[20px] text-[#0b3558] leading-[1.65]">
                £{dailyRepayment.toLocaleString()}
              </p>
            </div>
            <div className="w-px h-[49px] bg-[#edf1f2]" />
            <div className="flex-1 flex flex-col items-center gap-[4px]">
              <p className="font-['Poppins'] text-[13px] text-[#626d7c] leading-[16px] text-center">
                Monthly repayments:
              </p>
              <p className="font-['Poppins'] font-bold text-[20px] text-[#0b3558] leading-[1.65]">
                £{monthlyRepayment.toLocaleString()}
              </p>
            </div>
            <div className="w-px h-[49px] bg-[#edf1f2]" />
            <div className="flex-1 flex flex-col items-center gap-[4px]">
              <p className="font-['Poppins'] text-[13px] text-[#626d7c] leading-[16px] text-center">
                Total Cost of Loan:
              </p>
              <p className="font-['Poppins'] font-bold text-[20px] text-[#0b3558] leading-[1.65]">
                £{totalCostOfLoan.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="h-px bg-[#edf1f2]" />

          <div className="flex flex-col gap-[5px] items-center text-center">
            <p className="font-['Poppins'] font-semibold text-[16px] text-[#333] leading-[1.65]">
              Total Repayment:
            </p>
            <p className="font-['Poppins'] font-bold text-[20px] text-[#0b3558] leading-[1.65]">
              £{totalRepayment.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
