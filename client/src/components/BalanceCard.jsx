import React from "react";

function BalanceCard({title,amount,currency}) {
  return (
    <div className="bg-white p-8 md:p-4 shadow-lg shadow-blue-100 rounded-md md:my-5 my-2 overflow-x-clip w-auto">
      <p className="md:font-semibold text-xl pb-5 text-slate-400">
        {title}
      </p>
      <p className="lg:text-3xl md:text-xl text-3xl md:font-semibold text-[#0153fb]">{currency} {amount?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
      <small className="hidden lg:block">Updates approximately 15 minutes</small>
    </div>
  );
}

export default BalanceCard;
