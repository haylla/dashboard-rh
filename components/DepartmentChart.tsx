"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: {
    departamento: string;
    total: number;
  }[];
}

export default function DepartmentChart({ data }: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md h-96">
      <h3 className="text-lg font-semibold mb-4">
        Colaboradores por Departamento
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="departamento" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
