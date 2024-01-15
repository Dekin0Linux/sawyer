import React from "react";

function BalanceCard({title,amount,currency,bkg,txt}) {
  return (
    <div className={`${bkg} bg-${bkg} p-8 md:p-4 shadow-xl shadow-blue-100 rounded-3xl md:my-5 my-2 overflow-x-clip w-auto text-${txt}`}>
      <p className="md:font-semibold text-xl pb-5">
        {title}
      </p>
      <p className="lg:text-3xl md:text-xl text-3xl md:font-semibold">{currency} {amount?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
      <small className="hidden lg:block ">Updates approximately 15 minutes</small>
    </div>
  );
}
// [#0153fb]

export default BalanceCard;
