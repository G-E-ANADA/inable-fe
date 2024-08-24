// 상수 정의
export const PERSONAL_TYPE = "PERSONAL" as const;
export const CORP_TYPE = "CORP" as const;

// 타입 정의
export type MemberType = typeof PERSONAL_TYPE | typeof CORP_TYPE;

export class User {
  id: number;
  uid: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  type: MemberType;
  lastLogin?: Date;

  constructor(
    id: number,
    uid: string,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    type: MemberType = PERSONAL_TYPE,
    lastLogin?: Date
  ) {
    this.id = id;
    this.uid = uid;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.lastLogin = lastLogin;
    this.type = type;
  }

  static craeteUser(data: {
    id: number;
    uid: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    type: MemberType;
    lastLogin?: Date;
  }) {
    return new User(
      data.id,
      data.uid,
      data.name,
      data.createdAt,
      data.updatedAt,
      data.type,
      data.lastLogin
    );
  }
}
