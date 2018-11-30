const express = require('express');
const router = express.Router();
const mellatBank = require('../controllers/BankMellat');

router.get('/', (req, res) => {
    res.render('index.ejs');
});

//payment
router.get('/pay/mellat/:credit', mellatBank.pay);
router.get('/pay/test/:credit',(req, res) => {
    res.render('index.ejs');
});
router.post('/pay/mellatBankCallback', mellatBank.callBack);



module.exports = router;

