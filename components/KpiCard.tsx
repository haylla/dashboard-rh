interface KpiCardProps {
  titulo: string;
  valor: string | number;
}

export default function KpiCard({ titulo, valor }: KpiCardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h3 className="text-gray-500 text-sm">{titulo}</h3>
      <p className="text-2xl font-bold mt-2">{valor}</p>
    </div>
  );
}
