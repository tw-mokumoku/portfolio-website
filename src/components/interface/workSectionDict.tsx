export interface IFormat{
    "affiliationTIME": string,
    "clientSITE": string,
    "employmentTYPE": string,
    "fullTIME": string,
    "partTIME": string,
    "jobDETAILS": string,
    "moreINFO": string
}
export interface IContextMenu{
    "rightCLICKhere": string,
    "goBACK": string,
    "goFORWARD": string,
    "reloadPAGE": string,
    "clickCHECK": string,
    "showBOOKMARK": string,
    "openREADER": string,
    "viewSOURCE": string,
    "inspectELEM": string
}
export interface IDialog{
    "tapHERE": string,
    "jobHISTORY": string,
    "thanksINTEREST": string
}
export interface IFullTime{
    "unionINFO":{
        "name": string,
        "period": string,
        "employmentTYPE": string,
        "moreINFO1": string,
        "moreINFO2": string,
        "moreINFO3": string
    },
    "stairINC":{
        "name": string,
        "period": string,
        "jobDETAILS1": string,
        "jobDETAILS2": string,
        "jobDETAILS3": string,
        "moreINFO1": string
    },
    "priorityCONSULT":{
        "name": string,
        "period": string,
        "clientSITE": string,
        "jobDETAILS1": string,
        "jobDETAILS2": string,
        "jobDETAILS3": string,
        "jobDETAILS4": string,
        "moreINFO1": string,
        "moreINFO2": string,
        "moreINFO3": string
    }
}

export interface IPartTime{
    "edionCORP":{
        "name": string,
        "period": string,
        "jobDETAILS1": string,
        "jobDETAILS2": string,
        "jobDETAILS3": string,
        "jobDETAILS4": string,
        "jobDETAILS5": string
    },
    "fourseesCO":{
        "name": string,
        "period": string,
        "jobDETAILS1": string,
        "jobDETAILS2": string,
        "jobDETAILS3": string
    },
    "plenusCORP":{
        "name": string,
        "period": string,
        "jobDETAILS1": string,
        "jobDETAILS2": string,
        "jobDETAILS3": string,
        "jobDETAILS4": string,
        "jobDETAILS5": string
    }
}