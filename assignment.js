// Problem 1


function feetToMile(feet) {
    return (Math.abs(feet) * 0.000189394).toFixed(8);
}

var result = feetToMile(10);
console.log(result);


// Problem 2


function woodCalculator(chair, table, bed) {

    chair = Math.ceil((Math.abs(chair)));
    table = Math.ceil((Math.abs(table)));
    bed = Math.ceil((Math.abs(bed)));

    return chair + (table * 3) + (bed * 5);
}

var total = woodCalculator(5, 3, 2);
console.log(total);


// Problem 3 


var total = 0;
var i = 1;

function brickCalculator(floor) {

    floor = Math.round(Math.abs(floor))

    if (floor <= 10) {
        while (i <= floor) {
            total = total + 15000;
            i++;
        }
        return total;
    }

    if (floor > 10 && floor <= 20) {
        while (i <= 10) {
            total = total + 15000;
            i++;
        }
        while (i <= floor) {
            total = total + 12000;
            i++;
        }
        return total;
    }

    if (floor > 20) {
        while (i <= 10) {
            total = total + 15000;
            i++;
        }
        while (i <= 20) {
            total = total + 12000;
            i++;
        }
        while (i <= floor) {
            total = total + 10000;
            i++;
        }
        return total;
    }
}

brickCalculator(30);
console.log(total);


// Problem 4


function tinyFriend(friendsName) {

    var tinyName = [friendsName[0]];

    for (i = 1; i < friendsName.length; i++) {

        if (friendsName[i].length < tinyName[tinyName.length - 1].length) {
            tinyName.pop();
            tinyName.push(friendsName[i]);
        } else if (friendsName[i].length == tinyName[tinyName.length - 1].length) {
            tinyName.push(friendsName[i]);
        }
    }

    return tinyName;
}

var nameArray = ["zia", "salman", "arik", "shuvo", "ria", "tuhin", "atique", 'tia', "alom", "mim"];

console.log(tinyFriend(nameArray));