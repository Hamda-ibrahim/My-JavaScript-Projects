/* Write your code below. Good luck! 🙂 */

function calcTip(tip){
    if (tip >= 50 && tip <= 300) {
        return tip * 0.15;
    } else {
        return tip * 0.20;
    }
}

const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
calcTip(100);

console.log(tips);