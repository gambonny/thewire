import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { consoleLogger } from '../../src/logger'
import { createMockLogger } from '../../src/logger/mocks'

describe('consoleLogger', () => {
  // Spy on the real console methods
  const originalDebug = console.debug
  const originalInfo = console.info
  const originalWarn = console.warn
  const originalError = console.error

  beforeEach(() => {
    console.debug = vi.fn()
    console.info = vi.fn()
    console.warn = vi.fn()
    console.error = vi.fn()
  })

  afterEach(() => {
    console.debug = originalDebug
    console.info = originalInfo
    console.warn = originalWarn
    console.error = originalError
    vi.restoreAllMocks()
  })

  it('calls console.debug with a formatted debug message', () => {
    consoleLogger.debug('Debug message', { extra: true })

    expect(console.debug).toHaveBeenCalledWith('[DEBUG] Debug message', {
      extra: true,
    })
  })

  it('calls console.info with a formatted info message', () => {
    consoleLogger.info('Info message')
    expect(console.info).toHaveBeenCalledWith('[INFO] Info message')
  })

  it('calls console.warn with a formatted warning message', () => {
    consoleLogger.warn('Warning message', 123)
    expect(console.warn).toHaveBeenCalledWith('[WARN] Warning message', 123)
  })

  it('calls console.error correctly when given a string', () => {
    consoleLogger.error('Error message', { details: 'some details' })
    expect(console.error).toHaveBeenCalledWith('[ERROR] Error message', {
      details: 'some details',
    })
  })

  it('calls console.error correctly when given an Error object', () => {
    const err = new Error('Something bad')
    consoleLogger.error(err, 'context')
    // Expect the error’s message plus the error object itself
    expect(console.error).toHaveBeenCalledWith(
      '[ERROR] Something bad',
      err,
      'context',
    )
  })
})

describe('createMockLogger', () => {
  it('returns a logger with spy functions for all log levels', () => {
    const mockLogger = createMockLogger()

    expect(typeof mockLogger.debug).toBe('function')
    expect(typeof mockLogger.info).toBe('function')
    expect(typeof mockLogger.warn).toBe('function')
    expect(typeof mockLogger.error).toBe('function')
  })

  it('spies can be called and inspected', () => {
    const mockLogger = createMockLogger()

    mockLogger.info('Hello', 123)
    expect(mockLogger.info).toHaveBeenCalledWith('Hello', 123)
  })
})
