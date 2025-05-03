import { IContextMenu, IDialog, IFormat, IFullTime, IPartTime } from "./workSectionDict"

export interface IOpeningSection{
    "greet": string,
    "scrollCheck": string
}
export interface IIntroSection{
    "indroduce": string,
    "game2WebDev": string,
    "blocks2bytes": string,
    "selfLaunchExp": string,
    "userFRIENDLY": string
}
export interface ISkillSection{
    "skillsEXPERIENCE": string
}
export interface IWorkSection{
    "work": string,
    "format": IFormat,
    "contextMenu": IContextMenu,
    "dialog": IDialog,
    "fullTime": IFullTime,
    "partTime": IPartTime
}