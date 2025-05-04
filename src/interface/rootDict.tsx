import { IIntroSection, IOpeningSection, ISkillSection, IWorkSection } from "./sectionDict"

export interface IRootDict{
    "openingSection": IOpeningSection
    "introSection": IIntroSection,
    "skillSection": ISkillSection,
    "workSection": IWorkSection
}