const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AtivosSchema = new Schema({
    id: {
        type: Number,
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
            type: Number
        },
        min_52: {
            type: Number
        },
        setor: {
            type: String
        },
        subsetor: {
            type: String
        },
        vol_medio_2m: {
            type: Number
        },
        valor_mercado: {
            type: Number
        },
        valor_firma: {
            type: Number
        },
        ult_balanco_proc: {
            type: String
        },
        numero_acoes: {
            type: Number
        }
    },
    cotacoes: [{
        data: String,
        valor: Number
    }],
    indicadores_fundamentalistas: {
        oscilacao_dia: Number,
        oscilacao_mes: Number,
        oscilacao_30_dias: Number,
        oscilacao_12_meses: Number,
        oscilacao_2022: Number,
        oscilacao_2021: Number,
        oscilacao_2020: Number,
        oscilacao_2019: Number,
        oscilacao_2018: Number,
        oscilacao_2017: Number,
        pl: Number,
        lpa: Number,
        p_vp: Number,
        vpa: Number,
        p_ebit: Number,
        margem_bruta: Number,
        psr: Number,
        margem_ebit: Number,
        p_ativos: Number,
        margem_liquida: Number,
        p_cap_giro: Number,
        ebit_ativo: Number,
        p_ativo_circ_liq: Number,
        roic: Number,
        dividend_yield: Number,
        roe: Number,
        ev_ebitda: Number,
        liquidez_corrente: Number,
        ev_ebit: Number,
        divbr_patrimonio: Number,
        cresc_receita_5_anos: Number,
        giro_ativos: Number,
        ativo: Number,
        divida_bruta: Number,
        disponibilidades: Number,
        divida_liquida: Number,
        ativo_circulante: Number,
        patrimonio_liquido: Number,
        receita_liquida_3_meses: Number,
        receita_liquida_12_meses: Number,
        ebit_3_meses: Number,
        ebit_12_meses: Number,
        lucro_liquido_3_meses: Number,
        lucro_liquido_12_meses: Number
    }
})

var Ativos = mongoose.model('Ativos', AtivosSchema);
module.exports = Ativos;
