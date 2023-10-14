import { Role } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'

export function verifyUserRole(role: Role) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const userRole = request.user.role

    if (userRole !== role) {
      reply.status(401).send({ message: 'Unauthorized' })
    }
  }
}
