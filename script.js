function convert() {
  // Get the input values and selected units
  const fromValue = parseFloat(document.getElementById("from").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  // Define the conversion factors
  const metersInFeet = 0.3048;
  const metersInInches = 0.0254;
  const metersInKilometers = 1000;
  const gramsInKilograms = 1000;
  const metersInMiles = 1609.34;
  let conversionFactor = 1;

  // Set the conversion factor based on the selected units
  switch(fromUnit) {
    case "meters":
      if (toUnit === "feet") {
        conversionFactor = 1 / metersInFeet;
      } else if (toUnit === "inches") {
        conversionFactor = 1 / metersInInches;
      } else if (toUnit === "kilometers") {
        conversionFactor = 1 / metersInKilometers;
      } else if (toUnit === "miles") {
        conversionFactor = 1 / metersInMiles;
      }
      break;
    case "feet":
      conversionFactor = metersInFeet;
      if (toUnit === "inches") {
        conversionFactor /= metersInInches;
      } else if (toUnit === "kilometers") {
        conversionFactor /= metersInKilometers;
      } else if (toUnit === "miles") {
        conversionFactor /= metersInMiles;
      }
      break;
    case "inches":
      conversionFactor = metersInInches;
      if (toUnit === "feet") {
        conversionFactor /= metersInFeet;
      } else if (toUnit === "kilometers") {
        conversionFactor /= metersInKilometers;
      } else if (toUnit === "miles") {
        conversionFactor /= metersInMiles;
      }
      break;
    case "kilometers":
      conversionFactor = metersInKilometers;
      if (toUnit === "feet") {
        conversionFactor *= metersInFeet;
      } else if (toUnit === "inches") {
        conversionFactor *= metersInInches;
      } else if (toUnit === "miles") {
        conversionFactor /= metersInMiles;
      }
      break;
    case "grams":
      conversionFactor = 1 / gramsInKilograms;
      if (toUnit === "kilograms") {
        conversionFactor = gramsInKilograms;
      }
      break;
    case "kilograms":
      conversionFactor = gramsInKilograms;
      if (toUnit === "grams") {
        conversionFactor = 1 / gramsInKilograms;
      }
      break;
    case "miles":
      conversionFactor = metersInMiles;
      if (toUnit === "feet") {
        conversionFactor *= metersInFeet;
      } else if (toUnit === "inches") {
        conversionFactor *= metersInInches;
      } else if (toUnit === "kilometers") {
        conversionFactor *= metersInKilometers;
      }
      break;
    default:
      break;
  }

  // Calculate and display the result
  const result = fromValue * conversionFactor;
  document.getElementById("to").value = result.toFixed(2);
}
