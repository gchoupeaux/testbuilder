// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// function used to build an array with all the prefixes
function range(start,end){
	const arr = [];
	for (let i=start; i<end+1; i++){
		arr.push(i);
	}
	return arr;
}

// function used to build a card number knowing the prefix and the length
function bluidCardNum(prefix, len){
	let cardNum = '';
	cardNum += prefix;
	while (cardNum.length < len){
		cardNum += '0';
	}
	return cardNum;
}

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
	// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
	// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
	// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  // Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.

  let prefix = 0;
  const len = cardNumber.length;

  const networks = [
    {name: 'Diner\'s Club', prefixes: [38,39], lenNum: [14]},
    {name: 'American Express', prefixes: [34,37], lenNum: [15]},
    {name: 'MasterCard', prefixes: range(51,55), lenNum: [16]},
    {name: 'Discover', prefixes: [6011,644,645,646,647,648,649,65], lenNum: [16,19]},
    {name: 'Maestro', prefixes: [5018,5020,5038,6304], lenNum: range(12,19)},
    {name: 'China UnionPay', prefixes: range(622126,622925).concat(range(624,626)).concat(range(6282,6288)), lenNum: [16,17,18,19]},
    {name: 'Switch', prefixes: [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759], lenNum: [16,18,19]},
    {name: 'Visa', prefixes: [4], lenNum: [13,16,19]} // Switch and Visa have some overlapping card numbers => we choose the network with the longer prefix => so we start by testing Switch
  ];

  for (let network of networks){
    // 6 digits prefix
    prefix = Number(cardNumber.slice(0,6));
    if (network.prefixes.indexOf(prefix) !== -1 && network.lenNum.indexOf(len) !== -1){
        return network.name;
    }
    // 5 digits prefix
    prefix = Number(cardNumber.slice(0,5));
    if (network.prefixes.indexOf(prefix) !== -1 && network.lenNum.indexOf(len) !== -1){
        return network.name;
    }
    // 4 digits prefix
    prefix = Number(cardNumber.slice(0,4));
    if (network.prefixes.indexOf(prefix) !== -1 && network.lenNum.indexOf(len) !== -1){
        return network.name;
    }
    // 3 digits prefix
    prefix = Number(cardNumber.slice(0,3));
    if (network.prefixes.indexOf(prefix) !== -1 && network.lenNum.indexOf(len) !== -1){
        return network.name;
    }
    // 2 digits prefix
    prefix = Number(cardNumber.slice(0,2));
    if (network.prefixes.indexOf(prefix) !== -1 && network.lenNum.indexOf(len) !== -1){
        return network.name;
    }
    // 1 digit prefix
    prefix = Number(cardNumber.slice(0,1));
    if (network.prefixes.indexOf(prefix) !== -1 && network.lenNum.indexOf(len) !== -1){
        return network.name;
    }
  }
};
