const express = require("express")
const router = express.Router()
const Carteira = require("../models/carteiraModel")

router.route("/watchlist").get((res, req) => {
    Carteira.find({usuario_id: req.params.user_id})
    .then(foundCarteira => res.json(foundCarteira))
})

router.route("/newativo", (req, res) => {
    const newAtivo = new 
})

module.exports = router