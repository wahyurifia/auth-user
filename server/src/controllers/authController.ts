import { Request, Response } from 'express';
import * as authService from '../services/authService';

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const token = await authService.login(email, password);
        res.json({ token });
    } catch (error: any) {
        res.status(500).json({ message: error.message })

    }
};

const register = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;
    try {
        const user = await authService.register(name, email, password, role);
        res.status(201).json({ user });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export default { login, register }