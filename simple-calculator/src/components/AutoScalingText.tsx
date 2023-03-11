import React, { createRef } from "react";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}
const AutoScalingText = ({ children }: Props) => {
  return <div className="auto-scaling-text">{children}</div>;
};

export default AutoScalingText;
