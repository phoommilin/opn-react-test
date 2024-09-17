export const summaryDonations = (donations: Array<number>) =>
  donations.reduce((accumulator, value) => accumulator + value);
