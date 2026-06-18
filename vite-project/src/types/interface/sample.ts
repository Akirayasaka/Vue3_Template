// 「不要」使用大寫 I 作為開頭，請寫 interface User，而不是 interface IUser。直接使用名詞本身 (PascalCase) 命名

/** 範例用介面 */
interface Sample {
  id: number;
  name: string;
  description?: string; // Optional property
  createdAt: Date;
  updatedAt: Date;
}
