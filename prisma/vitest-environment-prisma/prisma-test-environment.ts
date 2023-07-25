import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  async setup() {
    console.log('Setup.')

    return {
      async teardown() {
        await Promise.resolve(console.log('Teardown.'))
      },
    }
  },
}
