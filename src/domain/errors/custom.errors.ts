export class CustomError extends Error {
  constructor(
    public readonly message: string,
    public readonly httpCode: number
  ) {
    super(message)
  }

  static badRequest(message = 'BadRequest') {
    return new CustomError(message, 400)
  }
}
