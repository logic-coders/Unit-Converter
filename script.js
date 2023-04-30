function convert() {
	var input = parseFloat(document.getElementById("input").value);
	var from = document.getElementById("from").value;
	var to = document.getElementById("to").value;
	var output = document.getElementById("output");

	if (isNaN(input)) {
		alert("Please enter a valid number.");
		return;
	}

	var conversionFactors = {
		inches: 1,
		feet: 12,
		yards: 36,
		miles: 63360,
		centimeters: 0.393701,
		meters: 39.3701,
		kilometers: 39370.1
	};

	var result = input * conversionFactors[from] / conversionFactors[to];

	output.value = result.toFixed(2) + " " + to;
}
