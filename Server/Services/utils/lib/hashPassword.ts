import * as bcrypt from "bcrypt";

export async function hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10; // Nombre de tours pour le hachage
    return bcrypt.hash(password, saltOrRounds);
}