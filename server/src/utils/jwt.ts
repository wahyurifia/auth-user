import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || "jasndlandnq32eh8932qh8dawdiiq3odj90awjdioq389dhqdnwefn";

export const generateToken = (userId: string): string => {
    return jwt.sign({ userId }, SECRET_KEY, {
        expiresIn: '30s',
    });
};

export const verifyToken = (token: string): any => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        throw new Error('Invalid token');
    }
};
