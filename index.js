// code your solution here

function saturdayFun(study = "roller-skate"){
    return `This Saturday, I want to ${study}!`
}
saturdayFun()

const mondayWork = function(rest="go to the office"){
    return `This Monday, I will ${rest}.`
}

function wrapAdjective(string = "*"){
    return function inner (spec = "special"){
        return `You are ${string}${spec}${string}!`



    }
}
wrapAdjective("%")("a dedicated programmer")