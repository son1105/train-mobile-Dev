// Coding Challenge #1
console.log('Coding Challenge #1');
// 1. Store Mark's and John's mass and height in variables
var infoMark = {
    mass: 78,
    height: 1.69
    // mass: 95,
    // height: 1.88
}
var infoJohn = {
    mass: 92,
    height: 1.95
    // mass: 85,
    // height: 1.76
}

// 2. Calculate both their BMIs using the formula (you can even implement both versions) 
var calBMI = function() {
    return (this.mass / this.height ** 2).toFixed(2);
}
var bmiMark = calBMI.call(infoMark);
var bmiJohn = calBMI.call(infoJohn);
console.log(`BMI of Mark ${bmiMark}`, `\nBMI of John ${bmiJohn}`);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
var markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

//  Coding Challenge #2
console.log('Coding Challenge #2');
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
var bmiHigher = (markHigherBMI) => {
    return markHigherBMI ? 'Mark\'s BMI is higher than John\'s!' : 'John\'s BMI is higher than Mark\'s!'
}
console.log(bmiHigher(markHigherBMI));

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
var bmiHigher2 = () => {
    return markHigherBMI ? `Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!` : `John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`
}
console.log(bmiHigher2());

// Coding Challenge #3
console.log('Coding Challenge #3');
var calAvgScore = (arrScore) => {
    return arrScore.reduce((acc, num) => {
        return acc + num
    }) / arrScore.length;
}
var dolphinScore = [96, 108, 89]
var koalaScore = [88, 91, 110]
// var dolphinScore = [97, 112, 101]
// var koalaScore = [109, 95, 123]
// var dolphinScore = [97, 112, 101]
// var koalaScore = [109, 95, 106]
var dolphinAVGScore = calAvgScore(dolphinScore);
var koalaAVGScore = calAvgScore(koalaScore);
console.log('Dolphin\'s score ' + dolphinAVGScore);
console.log('Koala\'s score ' + koalaAVGScore);

var checkTheWinner = () => {
    if(dolphinAVGScore == koalaAVGScore)
        return 'Draw!'
    if (dolphinAVGScore > koalaAVGScore)
        return 'Dolphin!'
    return 'Koala!'
}
console.log('If has no bonus, the winner is: ' + checkTheWinner());
// Check the score >= 100
var checkScore = function() {
    return this >= 100
}
var checkTheWinnerWithBonus = () => {
    if(checkTheWinner() == 'Draw!' && checkScore.call(dolphinAVGScore))
        return 'Draw!'
    if(checkTheWinner() == 'Dolphin!' && checkScore.call(dolphinAVGScore))
        return 'Dolphin!'
    if(checkTheWinner() == 'Koala!' && checkScore.call(koalaAVGScore))
        return 'Koala!'
    return 'No one wins...'
}
console.log('If has bonus, the winner is: ' + checkTheWinnerWithBonus());
// Coding Challenge #4
console.log('Coding Challenge #4');
// 1. Calculate the tip, depending on the bill value
var tip = function(billValue) {
    return billValue >= 50 && billValue <= 300? billValue * 0.15 : billValue * 0.2;
}
var billValue = 275;
// var billValue = 40;
// var billValue = 430;
console.log('Bill value is 100, the tip is: ' + tip(billValue));
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
console.log('The bill value was: ' + billValue + '\nThe tip was: ' + tip(billValue) + '\nThe final value is: ' + (billValue + tip(billValue)));

// Coding Challenge #5
console.log('Coding Challenge #5');
var calcAverage = (arrScore) => {
    return arrScore.reduce((acc, num) => {
        return acc + num
    }) / arrScore.length;
}
var dolphinScore = [44, 23, 71]
var koalaScore = [65, 54, 49]
// var dolphinScore = [85, 54, 41]
// var koalaScore = [23, 34, 27]
var dolphinAVGScore = calcAverage(dolphinScore);
var koalaAVGScore = calcAverage(koalaScore);
console.log('Dolphin\'s score ' + dolphinAVGScore);
console.log('Koala\'s score ' + koalaAVGScore);
var checkWinner = (avgDolphins, avgKoalas) => {
    if(avgDolphins >= 2 * avgKoalas)
        return `Dolphins win (${dolphinAVGScore} vs. ${avgKoalas})`
    if(avgDolphins >= 2 * avgDolphins)
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
    return 'No team wins...';
}
console.log(checkWinner(dolphinAVGScore, koalaAVGScore));

// Coding Challenge #6
console.log('Coding Challenge #6');
var billValue = 100
console.log('Bill value is 100, the tip is: ' + tip(billValue));
var bills = [125, 555, 44]
var tips = bills.map(tip);
console.log('Tips: ' + tips);
var total = bills.map((bill, index) => {
    return bill + tips[index]
})
console.log('Total: ' + total);

// Coding Challenge #7
console.log('Coding Challenge #7');
var infoMark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = (this.mass / this.height ** 2).toFixed(2);
        return this.bmi;
    }
}
var infoJohn = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = (this.mass / this.height ** 2).toFixed(2);
        return this.bmi;
    }
}
var bmiMark = infoMark.calcBMI();
var bmiJohn = infoJohn.calcBMI();
console.log(bmiHigher2(bmiMark > bmiJohn))

// Coding Challenge #8
console.log('Coding Challenge #8');
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
var tips = []
var totals = []
for(var i = 0; i < bills.length; i++) {
    tips.push(tip(bills[i]))
    totals.push(bills[i] + tips[i])
}
var calcAverage = (arr) => {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}
console.log('Avarage totals: ' + calcAverage(totals));

// Coding Challenge #9
console.log('Coding Challenge #9');
var printForecast = (arr) => {
    for(var i = 0; i < arr.length; i++) {
        console.log(`... ${arr[i]}oC in ${i + 1} days`);
    }
}
var data1 = [17, 21, 23];
var data2 = [12, 5, -5, 0, 4];
printForecast(data1);
