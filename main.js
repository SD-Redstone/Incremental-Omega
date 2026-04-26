//Non-specific
let lastTimestamp = performance.now();
let unlockedStage = 1 //Stage 1: Alpha, 2: Beta, 3: Gamma, etc.
//Alpha
let alpha = new Decimal(10);
let alphaGen = new Decimal(0);
let alphaGenProduction = new Decimal(1);


function cost(add,mult,n,modifier,type,power) {
    let modifierPowered = Decimal.mul(modifier, n.pow(power))
    if (type == "exponential") {
        modifierPowered = modifier.pow(n.pow(power))
    };
    
    //the method plus is of the Decimal namespace (idk ig cuz add isnt specified to be a Decimal type??? idk)
    if (type == 'exponential' || type == 'multiplicative') {
        return Decimal.plus(add, (Decimal.mul(mult,(modifierPowered))));
    };
};

function updateUI() {
    const alphaGenTemp = alphaGen.toPrecision(3)
    if (alphaGenTemp !== AlphaGen.textContent) {
        AlphaGen.textContent = alphaGenTemp;
    };
    const roundedAlpha = alpha.toPrecision(3);
    if (roundedAlpha !== Alpha.textContent) {
        Alpha.textContent = roundedAlpha;
    };
    const alphaGenCostTemp = cost(10,1,alphaGen,1,"multiplicative",2).floor()
    const alphaGenCostTemp2 = alphaGenCostTemp.toPrecision(3)
    if (AlphaGenCost.textContent !== alphaGenCostTemp2) {
        AlphaGenCost.textContent = alphaGenCostTemp2
    }
}; //updateUI function to be added

//make sure the website is loaded first
document.addEventListener('DOMContentLoaded', () => {
    const BuyAlphaGen = document.getElementById('BuyAlphaGen');
    const AlphaGen = document.getElementById('AlphaGen');
    const Alpha = document.getElementById('Alpha')
    const AlphaGenCost = document.getElementById('AlphaGenCost')
    BuyAlphaGen.addEventListener('click', () => {
        const costTemp = cost(10,1,alphaGen,1,"multiplicative",2).floor()
        if (costTemp.lte(alpha)) {
            
            alpha = alpha.sub(costTemp);
            alphaGen = alphaGen.plus(1);
        };
        updateUI()
    });
    function gameLoop(now) {
        requestAnimationFrame(gameLoop);
        const delta = Math.min(0.1, (now - lastTimestamp) / 1000);
        lastTimestamp = now;
        alpha = Decimal.add(alpha,alphaGen.times(alphaGenProduction).times(delta));
        updateUI();
    }   
    gameLoop();
});

