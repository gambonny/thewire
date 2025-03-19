import type { IServices } from './types'
import { consoleLogger } from './logger'

export function createServices(): IServices {
  return {
    logger: consoleLogger,
  }
}

export const services: IServices = createServices()
