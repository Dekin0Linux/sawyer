import React from "react";

function Atm({detail}) {
  return (
    <div className="shadow-lg shadow-blue-100 p-5 md:py-6 rounded-2xl card-bg  mb-5">
      <div className="md:my-5">
        <p className="text-xl">{detail?.cardNumber}</p>
        <small>Card number</small>
      </div>

      <div className="flex justify-between ">
        <div className="my-5">
          <p className="text-xl">$ {detail?.cardLimit?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
          <small>Card balance</small>
        </div>
        <div className="my-5">
          <p className="text-xl">{detail?.expiryDate}</p>
          <small>Expiry Date</small>
        </div>

        <div className="my-5">
          <p className="text-xl">{detail?.cvv}</p>
          <small>CVV</small>
        </div>
      </div>
      <div className="">
          <p className="text-xl">{detail?.cardHolderName}</p>
          <small>Card Holder Name</small>
        </div>
    </div>
  );
}

export default Atm;
