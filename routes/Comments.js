const { Router } = require('express')
const router = Router()

router.get('/', (req, res) =>{
    res.send('Get from server')
})


module.exports = router