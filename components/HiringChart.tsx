"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: {
    mes: string;
    total: number;
  }[];
}

export default function HiringChart({ data }: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md h-96">
      <h3 className="text-lg font-semibold mb-4">
        Admissões por Mês
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="total" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
