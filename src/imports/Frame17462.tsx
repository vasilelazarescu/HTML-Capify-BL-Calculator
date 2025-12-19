function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[56px] not-italic top-[40px] w-[464px]">
      <p className="font-['Poppins:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[#0b3558] text-[28px] w-full">Business Loan Calculator</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.65] relative shrink-0 text-[#333] text-[16px] w-full">Get an estimate of how much you might be able to borrow in under a minute.</p>
    </div>
  );
}

function Bt() {
  return <div className="absolute bg-[#f5f7f8] h-[8px] right-[56px] rounded-[32px] top-[247px] w-[464px]" data-name="bt" />;
}

function Frame() {
  return (
    <div className="bg-[#a6ce39] relative rounded-[32px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 size-[28px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[39px] py-[16px] relative size-full">
          <div className="bg-white rounded-[12px] shrink-0 size-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Bt1() {
  return (
    <div className="absolute bg-[#a6ce39] h-[8px] right-[358.44px] rounded-[32px] top-[247px] w-[161.558px]" data-name="bt">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[147px] py-[4px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents right-[56px] top-[247px]">
      <Bt />
      <Bt1 />
    </div>
  );
}

function Bt2() {
  return <div className="absolute bg-[#f5f7f8] h-[8px] right-[56px] rounded-[32px] top-[368px] w-[464px]" data-name="bt" />;
}

function Frame2() {
  return (
    <div className="bg-[#a6ce39] relative rounded-[32px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 size-[28px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[47px] py-[16px] relative size-full">
          <div className="bg-white rounded-[9px] shrink-0 size-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Bt3() {
  return (
    <div className="absolute bg-[#a6ce39] h-[8px] right-[401px] rounded-[32px] top-[368px] w-[119px]" data-name="bt">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[99px] py-[4px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents right-[56px] top-[368px]">
      <Bt2 />
      <Bt3 />
    </div>
  );
}

function Bt4() {
  return (
    <div className="absolute bg-[#a6ce39] content-stretch flex h-[56px] items-center justify-end px-[5px] py-[4px] right-[339px] rounded-[32px] top-[426px] w-[181px]" data-name="bt">
      <div className="basis-0 flex flex-col font-['Poppins:SemiBold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#0b3558] text-[16px] text-center tracking-[-0.08px]">
        <p className="leading-[1.1]">Calculate</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white border-[#edf1f2] border-[0px_0px_1px] border-solid h-[526px] left-[64px] rounded-[24px] top-[32px] w-[576px]">
      <Frame1 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[1.65] left-[56px] not-italic text-[#333] text-[16px] top-[174px] w-[496px]">How long do you want to lend over?</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[1.65] left-[56px] not-italic text-[#0b3558] text-[20px] text-nowrap top-[200px]">6 months</p>
      <Group />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[1.65] left-[56px] not-italic text-[#333] text-[16px] top-[295px] w-[496px]">What is your monthly average turnover?</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[1.65] left-[56px] not-italic text-[#0b3558] text-[20px] text-nowrap top-[321px]">£ 110,000</p>
      <Group1 />
      <Bt4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center not-italic pb-[15px] pt-0 px-0 relative shrink-0 text-center w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[1.65] min-w-full relative shrink-0 text-[#0b3558] text-[20px] w-[min-content]">Congratulations!</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.65] min-w-full relative shrink-0 text-[#333] text-[16px] w-[min-content]">You may be eligible for a loan amount up to:</p>
      <p className="font-['Poppins:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[#0b3558] text-[28px] w-[464px]">£68,095</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] min-w-full relative shrink-0 text-[#626d7c] text-[13px] w-[min-content]">{`* Subject to Capify’s standard credit assessment criterial terms & conditions`}</p>
    </div>
  );
}

function Bt5() {
  return (
    <div className="bg-[#edf1f2] h-px relative shrink-0 w-full" data-name="bt">
      <div className="flex flex-row items-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] min-w-full relative shrink-0 text-[#626d7c] text-[13px] text-center w-[min-content]">Daily repayments:</p>
      <p className="font-['Poppins:Bold',sans-serif] leading-[1.65] relative shrink-0 text-[#0b3558] text-[20px] text-nowrap">£715</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] min-w-full relative shrink-0 text-[#626d7c] text-[13px] text-center w-[min-content]">Monthly repayments:</p>
      <p className="font-['Poppins:Bold',sans-serif] leading-[1.65] relative shrink-0 text-[#0b3558] text-[20px] text-nowrap">£14,300</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] min-w-full relative shrink-0 text-[#626d7c] text-[13px] text-center w-[min-content]">Total Cost of Loan:</p>
      <p className="font-['Poppins:Bold',sans-serif] leading-[1.65] relative shrink-0 text-[#0b3558] text-[20px] text-nowrap">£17,705</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[16px] h-[49px] items-start relative shrink-0 w-full">
      <Frame6 />
      <div className="bg-[#edf1f2] h-full shrink-0 w-px" />
      <Frame7 />
      <div className="bg-[#edf1f2] h-full shrink-0 w-px" />
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center leading-[1.65] not-italic relative shrink-0 text-center w-full">
      <p className="font-['Poppins:SemiBold',sans-serif] min-w-full relative shrink-0 text-[#333] text-[16px] w-[min-content]">Total Repayment:</p>
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#0b3558] text-[20px] w-[464px]">£85,800</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[23px] h-[526px] items-center left-[688px] p-[40px] rounded-[24px] top-[32px] w-[576px]">
      <div aria-hidden="true" className="absolute border-[#edf1f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Frame3 />
      <Bt5 />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.65] not-italic relative shrink-0 text-[#333] text-[16px] text-center w-full">Your Repayment:</p>
      <Frame9 />
      <Bt5 />
      <Frame10 />
    </div>
  );
}

export default function Frame11() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[590px] items-center justify-center left-1/2 top-0 translate-x-[-50%] w-[1328px]">
        <div className="flex-none rotate-[180deg]">
          <div className="bg-[#f5f7f8] h-[590px] w-[1328px]" />
        </div>
      </div>
      <Frame4 />
      <Frame5 />
    </div>
  );
}