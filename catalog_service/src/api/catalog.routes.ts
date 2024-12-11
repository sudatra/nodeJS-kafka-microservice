import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.post('/product', async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    return res.status(201).json({});
});

export default router;