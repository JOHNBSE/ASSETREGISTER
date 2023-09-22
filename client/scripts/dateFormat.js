function formatDate(date) {
  const dateRequested = new Date(date);
  const formattedDate = `${dateRequested.getFullYear()}-${(
    dateRequested.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${dateRequested
    .getDate()
    .toString()
    .padStart(2, "0")} ${dateRequested
    .getHours()
    .toString()
    .padStart(2, "0")}:${dateRequested
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${dateRequested
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  return formattedDate;
}

export default formatDate;
