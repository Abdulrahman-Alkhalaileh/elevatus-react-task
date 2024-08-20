export const titleIdSplit = (pathname: string) => {
  const lastIndex = pathname.lastIndexOf("-");

  const result = [
    pathname.substring(0, lastIndex),
    pathname.substring(lastIndex + 1),
  ];
  return result;
};
