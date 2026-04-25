let alpha = new Decimal(10);
let alphaGen = new Decimal(0);
const BuyAlphaGen = document.getElementById('BuyAlphaGen');
const AlphaGen = document.getElementById('AlphaGen');
function cost(add,mult,n,modifier,type,power) {
    if (type == "exponential") {
        return add.plus(mult.mul(modifier.pow(n.pow(power))))
    };
    if (type == "multiplicative"){
        return add.plus(mult.mul(modifier.mul(n.pow(power))))
    }
};

function updateUI() {
    if (alphaGen != AlphaGen.textContent) {
        AlphaGen.textContent = alphaGen
    }
    
} //updateUI function to be added


BuyAlphaGen.addEventListener('click', () => {
    if (cost(10,1,alphaGen,2,"multiplicative",2)>alpha) {
        alphaGen++;
        alpha = alpha.sub(cost(10,1,alphaGen,2,"multiplicative",2));
    }
});