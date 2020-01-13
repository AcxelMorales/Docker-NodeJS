const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Ok Docker - Node JS'
    });
});

module.exports = router;