import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'

import { authenticate } from '../controllers/users/authenticate'
import { profile } from '../controllers/users/profile'
import { refresh } from '../controllers/users/refresh'
import { register } from '../controllers/users/register'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)
  app.patch('/token/refresh', refresh)

  // Authenticated routes
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
