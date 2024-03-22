const { Router } = require('express')
const router = Router()

router.get('/', (req,res) =>{
    res.send("Likes are here!")
})

module.exports = router