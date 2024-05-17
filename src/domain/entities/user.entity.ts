class UserEntity {
  constructor(
    public id: string,
    public name: string,
    public birthday: Date,
    public createdAt: Date,
    public userTimeZone: string,
    public email: string,
    public password: string,
    public role?: string[],
    public photo?: string
  ) {}
}
