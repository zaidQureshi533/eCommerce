import express from 'express'

const router = express.Router()

router.get('/', (req, res)=> {
    res.send('Order Route')
})

export default router;
