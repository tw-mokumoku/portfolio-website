import { IHeader } from "./header";
import { IRootDict } from "./rootDict";
import { IFooter } from "./footer";

export interface IPageDict{
    "root": IRootDict
    "header": IHeader,
    "footer": IFooter
}