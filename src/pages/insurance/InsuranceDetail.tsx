import React from "react";
import { useParams } from "react-router-dom";

const InsuranceDetail = () => {
  const { insuranceId } = useParams();
  return <div>InsuranceDetail</div>;
};

export default InsuranceDetail;
