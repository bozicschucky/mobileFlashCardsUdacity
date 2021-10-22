export const computePercentage = (value, total) => {
  if (value === 0 || total === 0) {
    return 0;
  }
  console.log('value , total', value, total);
  return (value / total) * 100;
};
