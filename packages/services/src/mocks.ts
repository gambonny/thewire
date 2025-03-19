import type { IServices } from './types'
import { createMockLogger } from './logger/mocks'

export function createMockServices(): IServices {
  return {
    logger: createMockLogger(),
  }
}
