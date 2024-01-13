var originDropdown = document.getElementById("origin");

for (var i = 0; i < countryList.length; i++) {
  var selectedCountry = document.createElement("option");
  selectedCountry.text = countryList[i];
  originDropdown.add(selectedCountry);

  if (countryList[i] === "Singapore") {
    selectedCountry.selected = true;
  }
}
