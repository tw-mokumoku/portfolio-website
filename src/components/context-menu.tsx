'use client'
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
  } from "@/components/ui/context-menu";


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DialogWrapper } from "./dialogWrapper";
import { IWorkSection } from "../interface/sectionDict";
import { IContextMenu, IDialog, IFormat } from "../interface/workSectionDict";

export function JobContextMenu({workSection}:{workSection: IWorkSection}){
    const [isJob1Open, setIsJob1Open] = useState(false);
    const [isJob2Open, setIsJob2Open] = useState(false);
    const [isJob3Open, setIsJob3Open] = useState(false);
    const [isJob4Open, setIsJob4Open] = useState(false);
    const [isJob5Open, setIsJob5Open] = useState(false);
    const [isJob6Open, setIsJob6Open] = useState(false);

    const DFormat:IFormat = workSection.format;
    // 正社員
    const DUnionINFO = workSection.fullTime.unionINFO;
    const DStairINC = workSection.fullTime.stairINC;
    const DPriorityCONSULT = workSection.fullTime.priorityCONSULT;
    // アルバイト
    const DEdionCORP = workSection.partTime.edionCORP;
    const DFourseesCO = workSection.partTime.fourseesCO;
    const DPlenusCORP = workSection.partTime.plenusCORP;

    const DContextMenu:IContextMenu = workSection.contextMenu;
    const DDialog:IDialog = workSection.dialog;

    return (
        <>
        <div className="hidden sm:block">
            {/*****     ダイアログ     *****/}
            <DialogWrapper
            title={DUnionINFO.name}
            open={isJob1Open}
            onOpenChange={setIsJob1Open}
            >
                <br />
                {DFormat.affiliationTIME}：{DUnionINFO.period}<br />
                {DFormat.employmentTYPE}：{DUnionINFO.employmentTYPE}<br />
                <br />
                〇{DFormat.moreINFO}<br />
                {DUnionINFO.moreINFO1}<br />
                {DUnionINFO.moreINFO2}<br />
                {DUnionINFO.moreINFO3}
            </DialogWrapper>
            <DialogWrapper
            title={DStairINC.name}
            open={isJob2Open} 
            onOpenChange={setIsJob2Open}
            >
                <br />
                {DFormat.affiliationTIME}：{DStairINC.period}<br />
                {DFormat.employmentTYPE}：{DFormat.fullTIME}<br />
                <br />
                〇{DFormat.jobDETAILS}<br />
                ・{DStairINC.jobDETAILS1}<br />
                ・{DStairINC.jobDETAILS2}<br />
                ・{DStairINC.jobDETAILS3}<br />
                <br />
                〇{DFormat.moreINFO}<br />
                {DStairINC.moreINFO1}
            </DialogWrapper>
            <DialogWrapper
            title={DPriorityCONSULT.name}
            open={isJob3Open} 
            onOpenChange={setIsJob3Open}
            >
                <br />
                {DFormat.affiliationTIME}：{DPriorityCONSULT.period}<br />
                {DFormat.clientSITE}：{DPriorityCONSULT.clientSITE}<br />
                {DFormat.employmentTYPE}：{DFormat.fullTIME}<br />
                <br />
                〇{DFormat.jobDETAILS}<br />
                ・{DPriorityCONSULT.jobDETAILS1}<br />
                ・{DPriorityCONSULT.jobDETAILS2}<br />
                ・{DPriorityCONSULT.jobDETAILS3}<br />
                ・{DPriorityCONSULT.jobDETAILS4}<br />
                <br />
                〇{DFormat.moreINFO}<br />
                {DPriorityCONSULT.moreINFO1}<br />
                {DPriorityCONSULT.moreINFO2}<br />
                {DPriorityCONSULT.moreINFO3}
            </DialogWrapper>
            <DialogWrapper
            title={DEdionCORP.name}
            open={isJob4Open} 
            onOpenChange={setIsJob4Open}
            >
                <br />
                {DFormat.affiliationTIME}：{DEdionCORP.period}<br />
                {DFormat.employmentTYPE}：{DFormat.partTIME}<br />
                <br />
                〇{DFormat.jobDETAILS}<br />
                ・{DEdionCORP.jobDETAILS1}<br />
                ・{DEdionCORP.jobDETAILS2}<br />
                ・{DEdionCORP.jobDETAILS3}<br />
                ・{DEdionCORP.jobDETAILS4}<br />
                ・{DEdionCORP.jobDETAILS5}<br />
            </DialogWrapper>
            <DialogWrapper
            title={DFourseesCO.name}
            open={isJob5Open} 
            onOpenChange={setIsJob5Open}
            >
                <br />
                {DFormat.affiliationTIME}：{DFourseesCO.period}<br />
                {DFormat.employmentTYPE}：{DFormat.partTIME}<br />
                <br />
                〇{DFormat.jobDETAILS}<br />
                ・{DFourseesCO.jobDETAILS1}<br />
                ・{DFourseesCO.jobDETAILS2}<br />
                ・{DFourseesCO.jobDETAILS3}<br />
            </DialogWrapper>
            <DialogWrapper
            title={DPlenusCORP.name}
            open={isJob6Open} 
            onOpenChange={setIsJob6Open}
            >
                <br />
                {DFormat.affiliationTIME}：{DPlenusCORP.period}<br />
                {DFormat.employmentTYPE}：{DFormat.partTIME}<br />
                <br />
                〇{DFormat.jobDETAILS}<br />
                ・{DPlenusCORP.jobDETAILS1}<br />
                ・{DPlenusCORP.jobDETAILS2}<br />
                ・{DPlenusCORP.jobDETAILS3}<br />
                ・{DPlenusCORP.jobDETAILS4}<br />
                ・{DPlenusCORP.jobDETAILS5}<br />
            </DialogWrapper>

            {/*****     コンテキストメニュー     *****/}
            <ContextMenu>
                <ContextMenuTrigger className="flex h-[150px] w-[300px] md:h-[300px] md:w-[600px] items-center justify-center rounded-md border border-dashed text-md border-2">
                    {DContextMenu.rightCLICKhere}
                </ContextMenuTrigger>
                <ContextMenuContent className="w-64">
                    <ContextMenuItem inset disabled>
                    {DContextMenu.goBACK}
                    <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem inset disabled>
                    {DContextMenu.goFORWARD}
                    <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem inset disabled>
                    {DContextMenu.reloadPAGE}
                    <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                    </ContextMenuItem>
                    {/*****     サブ・コンテキストメニュー（正社員）     *****/}
                    <ContextMenuSub>
                        <ContextMenuSubTrigger inset>{DFormat.fullTIME}</ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-94">
                            <ContextMenuItem className="h-full w-full" onClick={()=>setIsJob1Open(true)}>
                                {DUnionINFO.name}
                                <ContextMenuShortcut>⌘D</ContextMenuShortcut>
                            </ContextMenuItem>

                            <ContextMenuItem className="h-full w-full" onClick={()=>setIsJob2Open(true)}>
                                {DStairINC.name}
                                <ContextMenuShortcut>⇧⌘A</ContextMenuShortcut>
                            </ContextMenuItem>

                            <ContextMenuItem className="h-full w-full" onClick={()=>setIsJob3Open(true)}>
                                {DPriorityCONSULT.name}
                                <ContextMenuShortcut>⌘Q</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuSeparator />
                            <ContextMenuLabel>↑ {DContextMenu.clickCHECK}</ContextMenuLabel>
                        </ContextMenuSubContent>
                    </ContextMenuSub>            
                    <ContextMenuSeparator />
                    <ContextMenuCheckboxItem checked disabled>
                        {DContextMenu.showBOOKMARK}
                        <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                    </ContextMenuCheckboxItem>
                    {/*****     サブ・コンテキストメニュー（アルバイト）     *****/}
                    <ContextMenuSub>
                        <ContextMenuSubTrigger inset>{DFormat.partTIME}</ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-72">
                            <ContextMenuItem className="h-full w-full" onClick={()=>setIsJob4Open(true)}>
                                {DEdionCORP.name}
                                <ContextMenuShortcut>⇩⌘Z</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem className="h-full w-full" onClick={()=>setIsJob5Open(true)}>
                                {DFourseesCO.name}
                                <ContextMenuShortcut>⌘D</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem className="h-full w-full" onClick={()=>setIsJob6Open(true)}>
                                {DPlenusCORP.name}
                                <ContextMenuShortcut>⌘M</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuSeparator />
                            <ContextMenuLabel>↑ {DContextMenu.clickCHECK}</ContextMenuLabel>
                        </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuRadioGroup value="pedro">
                    <ContextMenuSeparator />
                    <ContextMenuRadioItem value="pedro" disabled>
                        {DContextMenu.openREADER}
                    </ContextMenuRadioItem>
                    <ContextMenuRadioItem value="colm" disabled>{DContextMenu.viewSOURCE}</ContextMenuRadioItem>
                    <ContextMenuRadioItem value="colm" disabled>{DContextMenu.inspectELEM}</ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                </ContextMenuContent>
            </ContextMenu>
        </div>

        <div className="block sm:hidden">
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                    variant="outline"
                    className="flex h-[150px] w-[300px] md:h-[300px] md:w-[600px] items-center justify-center rounded-md border border-dashed text-md border-2"
                    >
                        {DDialog.tapHERE}
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{DDialog.jobHISTORY}</DialogTitle>
                        <DialogDescription>
                            {DDialog.thanksINTEREST}
                        </DialogDescription>
                    </DialogHeader>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{DUnionINFO.name}</AccordionTrigger>
                            <AccordionContent>
                                {DFormat.affiliationTIME}：{DUnionINFO.period}<br />
                                {DFormat.employmentTYPE}：{DUnionINFO.employmentTYPE}<br />
                                <br />
                                〇{DFormat.moreINFO}<br />
                                {DUnionINFO.moreINFO1}<br />
                                {DUnionINFO.moreINFO2}<br />
                                {DUnionINFO.moreINFO3}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>{DStairINC.name}</AccordionTrigger>
                            <AccordionContent>
                                {DFormat.affiliationTIME}：{DStairINC.period}<br />
                                {DFormat.employmentTYPE}：{DFormat.fullTIME}<br />
                                <br />
                                〇{DFormat.jobDETAILS}<br />
                                ・{DStairINC.jobDETAILS1}<br />
                                ・{DStairINC.jobDETAILS2}<br />
                                ・{DStairINC.jobDETAILS3}<br />
                                <br />
                                〇{DFormat.moreINFO}<br />
                                {DStairINC.moreINFO1}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>{DPriorityCONSULT.name}</AccordionTrigger>
                            <AccordionContent>
                                {DFormat.affiliationTIME}：{DPriorityCONSULT.period}<br />
                                {DFormat.clientSITE}：{DPriorityCONSULT.clientSITE}<br />
                                {DFormat.employmentTYPE}：{DFormat.fullTIME}<br />
                                <br />
                                〇{DFormat.jobDETAILS}<br />
                                ・{DPriorityCONSULT.jobDETAILS1}<br />
                                ・{DPriorityCONSULT.jobDETAILS2}<br />
                                ・{DPriorityCONSULT.jobDETAILS3}<br />
                                ・{DPriorityCONSULT.jobDETAILS4}<br />
                                <br />
                                〇{DFormat.moreINFO}<br />
                                {DPriorityCONSULT.moreINFO1}<br />
                                {DPriorityCONSULT.moreINFO2}<br />
                                {DPriorityCONSULT.moreINFO3}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>{DEdionCORP.name}</AccordionTrigger>
                            <AccordionContent>
                                {DFormat.affiliationTIME}：{DEdionCORP.period}<br />
                                {DFormat.employmentTYPE}：{DFormat.partTIME}<br />
                                <br />
                                〇{DFormat.jobDETAILS}<br />
                                ・{DEdionCORP.jobDETAILS1}<br />
                                ・{DEdionCORP.jobDETAILS2}<br />
                                ・{DEdionCORP.jobDETAILS3}<br />
                                ・{DEdionCORP.jobDETAILS4}<br />
                                ・{DEdionCORP.jobDETAILS5}<br />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>{DFourseesCO.name}</AccordionTrigger>
                            <AccordionContent>
                                {DFormat.affiliationTIME}：{DFourseesCO.period}<br />
                                {DFormat.employmentTYPE}：{DFormat.partTIME}<br />
                                <br />
                                〇{DFormat.jobDETAILS}<br />
                                ・{DFourseesCO.jobDETAILS1}<br />
                                ・{DFourseesCO.jobDETAILS2}<br />
                                ・{DFourseesCO.jobDETAILS3}<br />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>{DPlenusCORP.name}</AccordionTrigger>
                            <AccordionContent>
                                {DFormat.affiliationTIME}：{DPlenusCORP.period}<br />
                                {DFormat.employmentTYPE}：{DFormat.partTIME}<br />
                                <br />
                                〇{DFormat.jobDETAILS}<br />
                                ・{DPlenusCORP.jobDETAILS1}<br />
                                ・{DPlenusCORP.jobDETAILS2}<br />
                                ・{DPlenusCORP.jobDETAILS3}<br />
                                ・{DPlenusCORP.jobDETAILS4}<br />
                                ・{DPlenusCORP.jobDETAILS5}<br />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </DialogContent>
            </Dialog>
        </div>        
        </>
    );
}