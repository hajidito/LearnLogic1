// ARKAFOOD5
// MIN 50RB, DISKON 50 % MAX - 50RB
// DITRAKTIRDEMY
// MIN 25RB, DISKON 60 % MAX - 30RB

// 1, 5KM PERTAMA 5RB
// ++1KM++3RB

// PAJAK 5 %

function arkaFood(priceFood, voucherCode, distance, tax) {
    if (tax == true) {
        let priceFoodTax = (priceFood * 0.05)
        if (priceFood >= 50000 && voucherCode == 'ARKAFOOD5') {
            if ((priceFood * 0.5) > 50000) {
                priceFood = priceFood - 50000
                if ((distance - 1.5) <= 0) {
                    priceFood = priceFood + 5000
                }
                else if ((distance - 1.5) > 0) {
                    priceFood = priceFood + (5000 + (Math.ceil(distance - 1.5) * 3000))
                }
            }
            else if ((priceFood * 0.5) <= 50000) {
                priceFood = priceFood - (priceFood * 0.5)
                if ((distance - 1.5) <= 0) {
                    priceFood = priceFood + 5000
                }
                else if ((distance - 1.5) > 0) {
                    priceFood = priceFood + (5000 + (Math.ceil(distance - 1.5) * 3000))
                }
            }
        }
        else if (priceFood >= 25000 && voucherCode == 'DITRAKTIRDEMY') {
            if ((priceFood * 0.6) > 30000) {
                priceFood = priceFood - 30000
                if ((distance - 1.5) <= 0) {
                    priceFood = priceFood + 5000
                }
                else if ((distance - 1.5) > 0) {
                    priceFood = priceFood + (5000 + (Math.ceil(distance - 1.5) * 3000))
                }
            }
            else if ((priceFood * 0.6) <= 30000) {
                priceFood = priceFood - (priceFood * 0.6)
                if ((distance - 1.5) <= 0) {
                    priceFood = priceFood + 5000
                }
                else if ((distance - 1.5) > 0) {
                    priceFood = priceFood + (5000 + (Math.ceil(distance - 1.5) * 3000))
                }
            }
        }
        else {
            if ((distance - 1.5) <= 0) {
                priceFood = priceFood + 5000
            }
            else if ((distance - 1.5) > 0) {
                priceFood = priceFood + (5000 + (Math.ceil(distance - 1.5) * 3000))
            }
        }
        priceFood = priceFood + priceFoodTax
    }
    else if (tax == false) {
        if (priceFood >= 50000 && voucherCode == 'ARKAFOOD5') {
            if ((priceFood * 0.5) > 50000) {
                priceFood = priceFood - 50000
                if ((distance - 1.5) <= 0) {
                    priceFood = priceFood + 5000
                }
                else if ((distance - 1.5) > 0) {
                    priceFood = priceFood + (5000 + (Math.ceil(distance - 1.5) * 3000))
                }
            }
            else if ((priceFood * 0.5) <= 50000) {
                priceFood = priceFood - (priceFood * 0.5)
                if ((distance - 1.5) <= 0) {
                    priceFood = priceFood + 5000
                }
                else if ((distance - 1.5) > 0) {
                    priceFood = priceFood + (5000 + (Math.ceil(distance - 1.5) * 3000))
                }
            }
        }
        else if (priceFood >= 25000 && voucherCode == 'DITRAKTIRDEMY') {
            if ((priceFood * 0.6) > 30000) {
                priceFood = priceFood - 30000
                if ((distance - 1.5) <= 0) {
                    priceFood = priceFood + 5000
                }
                else if ((distance - 1.5) > 0) {
                    priceFood = priceFood + (5000 + (Math.ceil(distance - 1.5) * 3000))
                }
            }
            else if ((priceFood * 0.6) <= 30000) {
                priceFood = priceFood - (priceFood * 0.6)
                if ((distance - 1.5) <= 0) {
                    priceFood = priceFood + 5000
                }
                else if ((distance - 1.5) > 0) {
                    priceFood = priceFood + (5000 + (Math.ceil(distance - 1.5) * 3000))
                }
            }
        }
        else {
            if ((distance - 1.5) <= 0) {
                priceFood = priceFood + 5000
            }
            else if ((distance - 1.5) > 0) {
                priceFood = priceFood + (5000 + (Math.ceil(distance - 1.5) * 3000))
            }
        }
    }
    console.log (priceFormating(priceFood))
}

priceFormating = (idrFormat) => {
    let numberString = idrFormat.toString()
    let remains = numberString.length % 3
    let idr = 'Rp.' + numberString.substr(0, remains)
    let thousands = numberString.substr(remains).match(/\d{3}/g);

    if (thousands) {
        separator = remains ? '.' : '';
        idr += separator + thousands.join('.');
    }
    return idr;
};

arkaFood(75000,'ARKAFOOD5',5,false)
arkaFood(25000,'DITRAKTIRDEMY',7,true)
