import bcrypt from "bcrypt"

const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    console.log(salt)
    const hash=await bcrypt.hash(password, salt)
    return hash
}

const checkHashPassword = async (password: string , hash: string) : Promise<boolean> => {
   return await bcrypt.compare(password, hash)
}

export  {hashPassword, checkHashPassword}