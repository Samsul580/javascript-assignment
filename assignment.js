


// kilometerToMeter problem solving start
function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
        var meter = kilometer * 1000;
        return meter;
    }
    else {
        return "distance cannot be negative or 0";
    }
}
var result = kilometerToMeter(10);
console.log(result);
// kilometerToMeter problem solving end

// budgetCalculator problem solving start
function budgetCalculator(amountOfProducts) {
    var totalPrice = 0;
    for (i = 0; i < 3; i++) {
        var watchesPrice = amountOfProducts[0] * 50;
        var phonesPrice = amountOfProducts[1] * 100;
        var laptopsPrice = amountOfProducts[2] * 500;
        totalPrice = watchesPrice + phonesPrice + laptopsPrice;
    }
    return totalPrice;
}
var result = [1, 3, 4];
console.log(budgetCalculator(result));
// budgetCalculator problem solving end

// hotelCost to meter problem solving start
function hotelCost(day) {
    if (day > 0) {
        var cost = 0;
        if (day <= 10) {
            cost = day * 100;
        }
        else if (day <= 20) {
            var firstSpendDays = 10 * 100;
            var remainingDays = day - 10;
            var secondSpendDays = remainingDays * 80;
            cost = firstSpendDays + secondSpendDays;
        }
        else {
            var firstSpendDays = 10 * 100;
            var secondSpendDays = 10 * 80;
            var remainingDays = day - 20;
            var thirdSpendDays = remainingDays * 50;
            cost = firstSpendDays + secondSpendDays + thirdSpendDays;
        }
        return cost;
    }
    else {
        return "Please, give your spending days";
    }
}
var result = hotelCost(11);
console.log(result);
// hotelCost to meter problem solving end

// megaFriend to meter problem solving start
function megaFriend(friendsName) {
    var length = 0;
    var index = 0;
    var longestName = 0;
    for (i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > length) {
            length = friendsName[i].length;
            index = i;
            longestName = friendsName[i];
        }
    }
    return longestName;
}
var friendsName = ["kamal", "jamal", "", "selim", "shoyaib", "samsul shekh"];
console.log(megaFriend(friendsName));
// megaFriend to meter problem solving end