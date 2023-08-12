export const isValidNumber = (value: any) =>
  typeof value === "number" && !isNaN(value);

export const isValidString = (value: any) =>
  typeof value === "string" && value.trim().length > 0;
