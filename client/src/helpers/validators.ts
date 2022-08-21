export function isValidName(value: string): boolean {
  return (
    value.length > 1 && value.length < 50 && /^[a-zA-Zа-яА-Я]+$/.test(value)
  );
}

export function isValidEmail(value: string): boolean {
  return /\S+@\S+\.\S+/.test(value);
}
