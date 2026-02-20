import { Colaborador } from "@/data/colaboradores";

export function calcularTotalAtivos(colaboradores: Colaborador[]) {
  return colaboradores.filter(c => c.status === "Ativo").length;
}

export function calcularMediaSalarial(colaboradores: Colaborador[]) {
  const ativos = colaboradores.filter(c => c.status === "Ativo");
  const total = ativos.reduce((acc, curr) => acc + curr.salario, 0);

  return ativos.length > 0 ? total / ativos.length : 0;
}

export function calcularTurnover(colaboradores: Colaborador[]) {
  const total = colaboradores.length;
  const inativos = colaboradores.filter(c => c.status === "Inativo").length;

  return total > 0 ? (inativos / total) * 100 : 0;
}
export function agruparPorDepartamento(colaboradores: Colaborador[]) {
  const mapa: Record<string, number> = {};

  colaboradores.forEach((c) => {
    if (c.status === "Ativo") {
      mapa[c.departamento] = (mapa[c.departamento] || 0) + 1;
    }
  });

  return Object.entries(mapa).map(([departamento, total]) => ({
    departamento,
    total,
  }));
}
export function agruparAdmissoesPorMes(colaboradores: Colaborador[]) {
  const mapa: Record<string, number> = {};

  colaboradores.forEach((c) => {
    const data = new Date(c.dataAdmissao);
    const chave = `${data.getFullYear()}-${data.getMonth() + 1}`;

    mapa[chave] = (mapa[chave] || 0) + 1;
  });

  return Object.entries(mapa)
    .map(([chave, total]) => {
      const [ano, mes] = chave.split("-").map(Number);
      const data = new Date(ano, mes - 1);

      return {
        dataReal: data,
        mesFormatado: data.toLocaleString("pt-BR", {
          month: "short",
          year: "numeric",
        }),
        total,
      };
    })
    .sort((a, b) => a.dataReal.getTime() - b.dataReal.getTime())
    .map((item) => ({
      mes: item.mesFormatado,
      total: item.total,
    }));
}


