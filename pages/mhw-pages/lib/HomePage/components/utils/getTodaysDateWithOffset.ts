export const getTodaysDateWithOffset = (): string => {
  const GMTOffset = new Date().getTimezoneOffset() * 60 * 1000;
  const todaysDate = new Date(Date.now() - GMTOffset)
    .toISOString()
    .split("T")[0];
  return todaysDate;
};
