import React from "react";
import "./page.css";

interface Props {
  time: string;
  plan: string;
  onClick: () => void;
}

export default function Td({ time, plan, onClick }: Props) {
  return (
    <tr onClick={onClick}>
      <td className="text-left tl">{time}</td>
      <td className="text-left">{plan}</td>
    </tr>
  );
}
