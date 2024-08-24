type memberType = "personal"|"corp";

class User {
  id: number;
  uid: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  type: memberType;
  lastLogin?: Date;

  constructor(
    id: number,
    uid: string,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    type: memberType,
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
    type: memberType,
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

  // 필요한 메소드 추가 가능
  //   updateLastLogin(date: Date) {
  //     this.lastLogin = date;
  //   }
}

export default User;
