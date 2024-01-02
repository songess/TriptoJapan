import React from "react";
import "./page.css";

interface Props {
  time: string;
  plan: string;
}

export default function Td({ time, plan }: Props) {
  return (
    <tr>
      <td className="text-left tl">{time}</td>
      <td className="text-left">{plan}</td>
    </tr>
  );
}
