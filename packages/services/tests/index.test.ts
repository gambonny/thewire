import { describe, it, expect } from 'vitest'
import { createServices } from '../src'

describe('createServices', () => {
  it('returns an object with logger', () => {
    const services = createServices()
    expect(services.logger).toBeDefined()
    expect(typeof services.logger.info).toBe('function')
  })
})
