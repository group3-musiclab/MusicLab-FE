import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { LayoutSec } from "../../components/Layout";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  useEffect(() => {
    handleFinishPayment();
  }, []);

  const handleFinishPayment = () => {
    window.location.replace("/payment/success");
  };

  return (
    <LayoutSec>
      <div className="container mx-auto bg-white">
        {isPaymentSuccess ? (
          <p className="font-poppins text-black text-4xl">
            Payment successful! Thank you for your purchase.
          </p>
        ) : (
          <p className="font-poppins text-black text-4xl">
            Payment in progress...
          </p>
        )}
        <p
          className="btn bg-[#3A2BE8] w-3/6"
          onClick={() => navigate("/ProfilStudent")}
        >
          Back
        </p>
      </div>
    </LayoutSec>
  );
};

export default PaymentSuccess;
