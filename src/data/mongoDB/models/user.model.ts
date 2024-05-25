import { Document, Model, Schema, model } from 'mongoose'

export const userRoles = ['USER', 'SUPER_ADMIN'] as const

export type UserRole = (typeof userRoles)[number]

export interface IUserSchema extends Document {
  birthdate: number
  email: string
  name: string
  password: string | number
  photo?: string
  role?: UserRole
}

const userSchema = new Schema<IUserSchema>(
  {
    birthdate: { type: Number },
    email: { type: String, required: [true, 'Email is required'] },
    name: { type: String, required: [true, 'Name is required'] },
    password: { type: Schema.Types.Mixed, required: [true, 'password is required'] },
    photo: { type: String },
    role: { type: Schema.Types.Mixed, default: userRoles[0], enum: userRoles, required: true },
  },
  { timestamps: true }
)

export const UserModel: Model<IUserSchema> = model<IUserSchema>('User', userSchema)
