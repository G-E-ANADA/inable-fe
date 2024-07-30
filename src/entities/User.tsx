class User {
  id: number;
  uid: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;

  constructor(
    id: number,
    uid: string,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    lastLogin?: Date
  ) {
    this.id = id;
    this.uid = uid;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.lastLogin = lastLogin;
  }

  static craeteUser(data: {
    id: number;
    uid: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    lastLogin?: Date;
  }) {
    return new User(
      data.id,
      data.uid,
      data.name,
      data.createdAt,
      data.updatedAt,
      data.lastLogin
    );
  }

  // 필요한 메소드 추가 가능
  //   updateLastLogin(date: Date) {
  //     this.lastLogin = date;
  //   }
}

export default User;
