"use client";

import { colaboradores } from "@/data/colaboradores";
import { calcularTotalAtivos, calcularMediaSalarial, calcularTurnover} from "@/lib/indicadores";
import KpiCard from "@/components/KpiCard";
import { agruparPorDepartamento } from "@/lib/indicadores";
import DepartmentChart from "@/components/DepartmentChart";
import { agruparAdmissoesPorMes } from "@/lib/indicadores";
import HiringChart from "@/components/HiringChart";
import { useState } from "react";



export default function Home() {

//Estado
  const [departamentoSelecionado, setDepartamentoSelecionado] =
    useState<string>("Todos");

 // Lista única de departamentos
  const departamentos = [ "Todos", ...new Set(colaboradores.map((c) => c.departamento)), ];

 //Aplicar filtro
  const colaboradoresFiltrados =
    departamentoSelecionado === "Todos"
      ? colaboradores
      : colaboradores.filter(
          (c) => c.departamento === departamentoSelecionado
        );

 //dados filtrados
  const totalAtivos = calcularTotalAtivos(colaboradoresFiltrados);
  const mediaSalarial = calcularMediaSalarial(colaboradoresFiltrados);
  const turnover = calcularTurnover(colaboradoresFiltrados);
  const dadosDepartamento =
    agruparPorDepartamento(colaboradoresFiltrados);
  const dadosAdmissoes =
    agruparAdmissoesPorMes(colaboradoresFiltrados);

  
  return (
    <main className="min-h-screen bg-gray-100 p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">
        Dashboard de RH
      </h1>
      <p className="text-gray-500 mb-8">
    Indicadores estratégicos de Recursos Humanos
    </p>
<div className="mb-6">
  <label className="mr-4 font-medium">Filtrar por Departamento:</label>
  <select
    className="border rounded-lg p-2"
    value={departamentoSelecionado}
    onChange={(e) => setDepartamentoSelecionado(e.target.value)}
  >
    {departamentos.map((dep) => (
      <option key={dep} value={dep}>
        {dep}
      </option>
    ))}
  </select>
</div>


      <div className="grid grid-cols-3 gap-6">
    <KpiCard titulo="Total de Ativos" valor={totalAtivos} />
    <KpiCard titulo="Média Salarial" valor={`R$ ${mediaSalarial.toFixed(2)}`} />
    <KpiCard titulo="Turnover" valor={`${turnover.toFixed(1)}%`} />
      </div>
      <div className="mt-10">
  <DepartmentChart data={dadosDepartamento} />
      </div>
  <div className="mt-10">
  <HiringChart data={dadosAdmissoes} />
  </div>


    </main>
  );
}

