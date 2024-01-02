import React from "react";

interface Props {
  time: string;
  plan: string;
}

export default function Td({ time, plan }: Props) {
  return (
    <tr>
      <td className="text-left">{time}</td>
      <td className="text-left">{plan}</td>
    </tr>
  );
}
