import bcrypt from "bcrypt";

export const hashText = async (text: string) => {
  const hashedPass = await bcrypt.hash(text, 10);
  return hashedPass;
};

export const validateHash = async (text: string, hash: string) => {
  const isCorrect = await bcrypt.compare(text, hash);
  return isCorrect;
};
