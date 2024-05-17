export class ReportEntity {
  constructor(
    public id: string,
    public reportingUserId: string,
    public reportedChallengeId: string,
    public reasonId: string,
    public createdAt: Date
  ) {}
}
