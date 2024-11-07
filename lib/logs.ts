export const formatForLog = (value: Response | string): string => {
  if (value && typeof value === "object") {
    if ("password" in value) {
      delete value.password;
    }

    return JSON.stringify(value);
  }

  return value;
};
