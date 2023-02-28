const plans = [
    {
        id: 1,
        holdingTime: 1,
        profit: 1,
        min: 60,
        max: 100000
    },
    {
        id: 2,
        holdingTime: 7,
        profit: 9,
        min: 30,
        max: 100000
    },
    {
        id: 3,
        holdingTime: 30,
        profit: 45,
        min: 30,
        max: 100000
    },
    {
        id: 4,
        holdingTime: 180,
        profit: 360,
        min: 30,
        max: 100000
    },
]
const activePlans = [
    {
        id: 101,
        planId: 3,
        activationDate: 1672605000000,
        completionOfPlan: 1675283400000,
        amountOfInvestment: 100,
        autoBuy: false,
        status: "active"
    },
    {
        id: 151,
        planId: 2,
        activationDate: 1672605000000,
        completionOfPlan: 1675283400000,
        amountOfInvestment: 100,
        autoBuy: false,
        status: "active"
    },
    {
        id: 145,
        planId: 4,
        activationDate: 1672605000000,
        completionOfPlan: 1675283400000,
        amountOfInvestment: 100,
        autoBuy: false,
        status: "active"
    },
    {
        id: 28,
        planId: 4,
        activationDate: 1672605000000,
        completionOfPlan: 1675283400000,
        amountOfInvestment: 200,
        autoBuy: false,
        status: "active"
    },
    {
        id: 30,
        planId: 4,
        activationDate: 1672605000000,
        completionOfPlan: 1675283400000,
        amountOfInvestment: 100,
        autoBuy: false,
        status: "active"
    },
    {
        id: 10,
        planId: 4,
        activationDate: 1672605000000,
        completionOfPlan: 1675283400000,
        amountOfInvestment: 100,
        autoBuy: false,
        status: "active"
    },
    {
        id: 5,
        planId: 4,
        activationDate: 1672605000000,
        completionOfPlan: 1675283400000,
        amountOfInvestment: 100,
        autoBuy: false,
        status: "active"
    },
    {
        id: 17,
        planId: 4,
        activationDate: 1672605000000,
        completionOfPlan: 1675283400000,
        amountOfInvestment: 100,
        autoBuy: false,
        status: "active"
    },
    {
        id: 19,
        planId: 4,
        activationDate: 1672605000000,
        completionOfPlan: 1675283400000,
        amountOfInvestment: 100,
        autoBuy: false,
        status: "active"
    },
    {
        id: 22,
        planId: 4,
        activationDate: 1672605000000,
        completionOfPlan: 1675283400000,
        amountOfInvestment: 100,
        autoBuy: false,
        status: "active"
    },
    {
        id: 25,
        planId: 4,
        activationDate: 1672605000000,
        completionOfPlan: 1675283400000,
        amountOfInvestment: 100,
        autoBuy: false,
        status: "active"
    },
    {
        id: 26,
        planId: 4,
        activationDate: 1672605000000,
        completionOfPlan: 1675283400000,
        amountOfInvestment: 100,
        autoBuy: false,
        status: "active"
    },
]

export function getPlans() {
    return plans
}

export function getActivePlans() {
    return activePlans
}

export function getPlan(id) {
    return plans.find(plan => plan.id === id)
}