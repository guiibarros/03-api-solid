import { FastifyReply, FastifyRequest } from 'fastify'

import { makeGetUserProfileUseCase } from '@/use-cases/factories/make-get-user-profile-use-case'

export async function profile(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<FastifyReply> {
  await request.jwtVerify()

  console.log(request.user.sub)

  return reply.status(204).send()

  // const getUserProfileUseCase = makeGetUserProfileUseCase()

  // const { user } = await getUserProfileUseCase.execute({
  //   userId: sub,
  // })

  // return reply.send(user)
}
