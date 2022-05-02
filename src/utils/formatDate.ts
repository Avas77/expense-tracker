const formatDate = (date: string) => {
  const convertedDate = new Date(date);
  let month = `${convertedDate.getMonth() + 1}`;
  let day = String(convertedDate.getDay());
  const year = convertedDate.getFullYear();

  if (month.length < 2) {
    month = `0${month}`;
  }

  if (day.length < 2) {
    day = `0${day}`;
  }

  return [year, month, day].join("-");
};

export { formatDate };
