import { PrismaClient, Role } from '@prisma/client';
import { hashSync, compareSync } from 'bcrypt';
import { generateToken } from '../utils/jwt';

const prisma = new PrismaClient();

export const login = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await compareSync(password, user.password))) {
        throw new Error('Invalid email or password');
    }
    return generateToken(user.id);
};

export const register = async (name: string, email: string, password: string, role: Role) => {
    const hashPassword = await hashSync(password, 10);
    const user = await prisma.user.create({
        data: { name, email, password: hashPassword, role },
    });
    return user;
};
