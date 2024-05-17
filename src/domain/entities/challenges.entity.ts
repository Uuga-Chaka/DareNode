export class ChallengeEntity {
  constructor(
    public id: string,
    public content: string,
    public createdAt: Date,
    public createdBy: string,
    public type: string,
    public likes: number,
    public dislikes: number
  ) {}
}
