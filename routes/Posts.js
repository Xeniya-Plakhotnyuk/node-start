const { Router } = require('express')
const router = Router()

router.get('/', (req, res) =>{
    res.send("Posts are here!")
})


module.exports = router
