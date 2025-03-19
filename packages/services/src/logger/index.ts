import type { ILogger } from './types'

export const consoleLogger: ILogger = {
  debug: (message, ...args) => {
    console.debug(`[DEBUG] ${message}`, ...args)
  },
  info: (message, ...args) => {
    console.info(`[INFO] ${message}`, ...args)
  },
  warn: (message, ...args) => {
    console.warn(`[WARN] ${message}`, ...args)
  },
  error: (messageOrError, ...args) => {
    if (messageOrError instanceof Error) {
      console.error(
        `[ERROR] ${messageOrError.message}`,
        messageOrError,
        ...args,
      )
    } else {
      console.error(`[ERROR] ${messageOrError}`, ...args)
    }
  },
}
