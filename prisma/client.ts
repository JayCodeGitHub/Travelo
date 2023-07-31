import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

export default client