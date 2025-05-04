export interface IHeader{
    "left": ILeft,
    "center": ICenter,
    "right": IRight,
    "profileDialog": IProDig
}

export interface ILeft{
    "name": string
}
export interface ICenter{
    "profile": string,
    "greet": string,
    "skill": string,
    "job": string,
}
export interface IRight{
    "contact": string
}
export interface IProDig{
    "welcomePAGE": string,
    "name": string,
    "githubMOKUMOKU": string,
    "webdev4yrs": string,
    "compulsion2BUILD": string,
    "yearsHOST1half": string,
    "cleanINTERFACE": string,
}