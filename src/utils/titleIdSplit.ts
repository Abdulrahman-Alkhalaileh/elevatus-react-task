// this function takes the pathname which consist of the job title and the first section of the id and split them
// then it returns array of 2 elements, the title string, and the id string.

export const titleIdSplit = (pathname: string) => {
  const lastIndex = pathname.lastIndexOf("-");

  const result = [
    pathname.substring(0, lastIndex),
    pathname.substring(lastIndex + 1),
  ];
  return result;
};
