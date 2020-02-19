const customMediaQuery = (minWidth: string): string => `
  @media (min-width: ${minWidth})
`;

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery('960px'),
};

export default media;
