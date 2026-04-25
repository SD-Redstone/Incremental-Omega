let alpha = new Decimal(10);
let alphaGen = new Decimal(0);

function cost(add,mult,n,modifier,type,power) {
    let modifierPowered = Decimal.mul(modifier, n.pow(power))
    if (type == "exponential") {
        modifierPowered = modifier.pow(n.pow(power))
    };
    
    //the method plus is of the Decimal namespace (idk ig cuz add isnt specified to be a Decimal type??? idk)
    return Decimal.plus(add, (Decimal.mul(mult,(modifierPowered))));
};

function updateUI() {
    if (alphaGen != AlphaGen.textContent) {
        AlphaGen.textContent = alphaGen;
    };
    
}; //updateUI function to be added

//make sure the website is loaded first
document.addEventListener('DOMContentLoaded', () => {
    const BuyAlphaGen = document.getElementById('BuyAlphaGen');
    const AlphaGen = document.getElementById('AlphaGen');
    BuyAlphaGen.addEventListener('click', () => {
        if (cost(10,1,alphaGen,2,"multiplicative",2)>alpha) {
            alphaGen++;
            alpha = alpha.sub(cost(10,1,alphaGen,2,"multiplicative",2));
        };
    });
});