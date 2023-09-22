const assetName = document.getElementById("name");
const category = document.getElementById("category");
const model = document.getElementById("model");
const serial_no = document.getElementById("serial_no");
const assetlocation = document.getElementById("location");
const assetStatus = document.getElementById("status");

const submitBtn = document.getElementById("submitBtn");

const addAssets = async (e) => {
  e.preventDefault();
  let url = "http://localhost:5000/api/v1/addAssets";
  try {
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        assetID: "INFO006",
        assetName: assetName.value,
        model: model.value,
        categoryID: category.value,
        serial_no: serial_no.value,
        locationID: assetlocation.value,
        status: assetStatus.value,
      }),
    }).then(() => {
      console.log("success");
      alert("Asset added successfully");
      window.location.href = "../html/dashboard.html";
    });

    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
  } catch (err) {
    alert(err);
  }
};

submitBtn.addEventListener("click", addAssets);
