// import {formatDate} from './dateFormat';

const tableBody = document.getElementById("consumablesTable");

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


async function fetchDataAndDisplay(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    const data = await response.json();

    // tableBody.innerHTML = "";
    data.results.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.category_name}</td>
                <td>${item.quantity}</td>
                <td>${formatDate(item.purchase_date)}</td>
            `;
      tableBody.appendChild(row);
    });
  } catch (err) {
    console.error(err);
  }
}

fetchDataAndDisplay("http://localhost:5000/api/v1/viewConsumables");
