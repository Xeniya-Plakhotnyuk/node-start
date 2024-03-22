const { Router } = require('express')
const router = Router()

router.get('/', (req,res)=>{
    res.send('Stories are here!')
})



module.exports = router