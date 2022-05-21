import React from 'react';

const InfoGeral = {
    empresa: 'Vale',
    ticker: 'VALE3',
    tipo: 'ON NM',
    max_52: 102.32,
    min_52: 60.02,
    setor: 'Mineração',
    subsetor: 'Minerais Metálicos',
    vol_medio_2m: 2968530000
}

const InfoGeralPlus = {
    valor_mercado: 416370000000,
    valor_firma: 439638000000,
    ult_balanco_proc: '31/03/22',
    numero_acoes: 4999040000
}

const Cotacoes = [
    {data: '11/05/2022', valor: 78.6},
    {data: '10/05/2022', valor: 75.7},
    {data: '09/05/2022', valor: 76.51},
    {data: '08/05/2022', valor: 79.94},
    {data: '07/05/2022', valor: 80.41},
    {data: '06/05/2022', valor: 81.9},
    {data: '05/05/2022', valor: 82.7},
    {data: '04/05/2022', valor: 83.09},
    {data: '03/05/2022', valor: 82.95},
    {data: '02/05/2022', valor: 84.14},
    {data: '01/05/2022', valor: 82.28},
]

const Indicadores = {
    oscilacao_dia: -1.08,
    oscilacao_mes: -12.88,
    oscilacao_30_dias: -11.88,
    oscilacao_12_meses: -13.03,
    oscilacao_2022: 10.95,
    oscilacao_2021: 4.73,
    oscilacao_2020: 70.47,
    oscilacao_2019: 6.85,
    oscilacao_2018: 31.11,
    oscilacao_2017: 66.67,
    pl: 3.66,
    lpa: 22.75,
    p_vp: 2.34,
    vpa: 35.67,
    p_ebit: 2.57,
    margem_bruta: 58.7,
    psr: 1.48,
    margem_ebit: 57.8,
    p_ativos: 0.94,
    margem_liquida: 40.7,
    p_cap_giro: 18.32,
    ebit_ativo: 36.8,
    p_ativo_circ_liq: -2.50,
    roic: 42.5,
    dividend_yield: 17.7,
    roe: 63.8,
    ev_ebitda: 2.47,
    liquidez_corrente: 1.33,
    ev_ebit: 2.71,
    divbr_patrimonio: 0.37,
    cresc_receita_5_anos: 27.9,
    giro_ativos: 0.64,
    ativo: 441316000000,
    divida_bruta: 66403000000,
    disponibilidades: 43135000000,
    divida_liquida: 23268000000,
    ativo_circulante: 92219000000,
    patrimonio_liquido: 178314000000,
    receita_liquida_3_meses: 56719000000,
    receita_liquida_12_meses: 280942000000,
    ebit_3_meses: 31916000000,
    ebit_12_meses: 162245000000,
    lucro_liquido_3_meses: 23046000000,
    lucro_liquido_12_meses: 113710000000,
}

const Ativo = {
    InfoGeral,
    InfoGeralPlus,
    Cotacoes, 
    Indicadores
}

export { Ativo };