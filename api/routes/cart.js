import express from 'express'

const router = express.Router()

router.get('/', (req, res)=> {
    res.send('Cart Route')
})

export default router;
