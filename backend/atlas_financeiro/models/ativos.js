const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AtivosSchema = new Schema({
    id: {
        type: number,
        required: false
    },
    informacoes_gerais: {
        empresa: {
            type: String
        },
        ticker: {
            type: String
        },
        tipo: {
            type: String
        },
        max_52: {
            type: number
        },
        min_52: {
            type: number
        },
        setor: {
            type: String
        },
        subsetor: {
            type: String
        },
        vol_medio_2m: {
            type: number
        },
        valor_mercado: {
            type: number
        },
        valor_firma: {
            type: number
        },
        ult_balanco_proc: {
            type: String
        },
        numero_acoes: {
            type: number
        }
    },
    cotacoes: [{
        data: String,
        valor: number
    }],
    indicadores_fundamentalistas: {
        oscilacao_dia: number,
        oscilacao_mes: number,
        oscilacao_30_dias: number,
        oscilacao_12_meses: number,
        oscilacao_2022: number,
        oscilacao_2021: number,
        oscilacao_2020: number,
        oscilacao_2019: number,
        oscilacao_2018: number,
        oscilacao_2017: number,
        pl: number,
        lpa: number,
        p_vp: number,
        vpa: number,
        p_ebit: number,
        margem_bruta: number,
        psr: number,
        margem_ebit: number,
        p_ativos: number,
        margem_liquida: number,
        p_cap_giro: number,
        ebit_ativo: number,
        p_ativo_circ_liq: number,
        roic: number,
        dividend_yield: number,
        roe: number,
        ev_ebitda: number,
        liquidez_corrente: number,
        ev_ebit: number,
        divbr_patrimonio: number,
        cresc_receita_5_anos: number,
        giro_ativos: number,
        ativo: number,
        divida_bruta: number,
        disponibilidades: number,
        divida_liquida: number,
        ativo_circulante: number,
        patrimonio_liquido: number,
        receita_liquida_3_meses: number,
        receita_liquida_12_meses: number,
        ebit_3_meses: number,
        ebit_12_meses: number,
        lucro_liquido_3_meses: number,
        lucro_liquido_12_meses: number
    }
})

// module.exports = AtivosSchema;
module.exports.Ativos = mongoose.model('Ativos', AtivosSchema);
