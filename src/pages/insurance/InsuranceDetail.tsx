import React from "react";
import { useParams } from "react-router-dom";

const InsuranceDetail = () => {
  const { insuranceId } = useParams();
  return <div className="text-gray-0">{insuranceId}</div>;
};

export default InsuranceDetail;
