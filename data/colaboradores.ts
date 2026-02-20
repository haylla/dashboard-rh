export interface Colaborador {
  id: number;
  nome: string;
  departamento: string;
  salario: number;
  dataAdmissao: string;
  dataDemissao: string | null;
  status: "Ativo" | "Inativo";
  faltasMes: number;
}
export const colaboradores: Colaborador[] = [
  {
    id: 1,
    nome: "Ana Clara Silva",
    departamento: "Financeiro",
    salario: 4500,
    dataAdmissao: "2023-03-10",
    dataDemissao: null,
    status: "Ativo",
    faltasMes: 2
  },
  {
    id: 2,
    nome: "Haila Laranjeira",
    departamento: "TI",
    salario: 6500,
    dataAdmissao: "2022-08-08",
    dataDemissao: "2025-10-17",
    status: "Inativo",
    faltasMes: 2
  },
  {
    id: 3,
    nome: "Helen de Souza",
    departamento: "TI",
    salario: 4500,
    dataAdmissao: "2023-06-20",
    dataDemissao: null,
    status: "Ativo",
    faltasMes: 0
  },
    {
    id: 4,
    nome: "Soraya da Silva",
    departamento: "Financeiro",
    salario: 5500,
    dataAdmissao: "2025-01-08",
    dataDemissao: null,
    status: "Ativo",
    faltasMes: 5
  },
    {
    id: 5,
    nome: "Mario Xavier",
    departamento: "Fiscal",
    salario: 8500,
    dataAdmissao: "2024-10-08",
    dataDemissao: null,
    status: "Ativo",
    faltasMes: 8
  },
    {
    id: 6,
    nome: "Dairiane Laranjeira",
    departamento: "Contabilidade",
    salario: 3500,
    dataAdmissao: "2023-06-08",
    dataDemissao: null,
    status: "Ativo",
    faltasMes: 1
  },
    {
    id: 7,
    nome: "Andreney Santos",
    departamento: "TI",
    salario: 5500,
    dataAdmissao: "2023-10-08",
    dataDemissao: "2025-11-17",
    status: "Inativo",
    faltasMes: 10
  },
    {
    id: 8,
    nome: "Eloisa Mota",
    departamento: "Financeiro",
    salario: 1600,
    dataAdmissao: "2026-01-08",
    dataDemissao: null,
    status: "Ativo",
    faltasMes: 0
  },
    {
    id: 9,
    nome: "Claudia Cardozo",
    departamento: "Comercial",
    salario: 2700,
    dataAdmissao: "2025-03-08",
    dataDemissao: null,
    status: "Ativo",
    faltasMes: 3
  },
    {
    id: 10,
    nome: "Eduardo Lima",
    departamento: "TI",
    salario: 6500,
    dataAdmissao: "2023-08-21",
    dataDemissao: null,
    status: "Ativo",
    faltasMes: 9
  },
    {
    id: 11,
    nome: "Junior Callegari",
    departamento: "TI",
    salario: 5500,
    dataAdmissao: "2025-04-14",
    dataDemissao: null,
    status: "Ativo",
    faltasMes: 10
  }
];