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
    DialogFooter,
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

export function JobContextMenu(){
    const [isJob1Open, setIsJob1Open] = useState(false);
    const [isJob2Open, setIsJob2Open] = useState(false);
    const [isJob3Open, setIsJob3Open] = useState(false);
    const [isJob4Open, setIsJob4Open] = useState(false);
    const [isJob5Open, setIsJob5Open] = useState(false);
    const [isJob6Open, setIsJob6Open] = useState(false);

    return (
        <>
        <div className="hidden sm:block">
            {/*****     ダイアログ     *****/}
            <Dialog
            open={isJob1Open} 
            onOpenChange={setIsJob1Open}
            >
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>コンピュータ・ユニオン ― 電算労コンピュータ関連労働組合</DialogTitle>
                        <DialogDescription>
                            所属期間：現在所属中
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Dialog
            open={isJob2Open} 
            onOpenChange={setIsJob2Open}
            >
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>株式会社STAIR</DialogTitle>
                        <DialogDescription>
                            所属期間：2025年03月 - 2025年03月
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Dialog
            open={isJob3Open} 
            onOpenChange={setIsJob3Open}
            >
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>株式会社プライオリティーコンサルティング</DialogTitle>
                        <DialogDescription>
                            所属期間：2022年01月 - 2023年05月
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Dialog
            open={isJob4Open} 
            onOpenChange={setIsJob4Open}
            >
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>株式会社エディオン</DialogTitle>
                        <DialogDescription>
                            所属期間：2021年05月 - 2021年10月
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Dialog
            open={isJob5Open} 
            onOpenChange={setIsJob5Open}
            >
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>株式会社フォーシーズ</DialogTitle>
                        <DialogDescription>
                            所属期間：2019年08月 - 2020年03月
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Dialog
            open={isJob6Open} 
            onOpenChange={setIsJob6Open}
            >
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>株式会社プレナス</DialogTitle>
                        <DialogDescription>
                            所属期間：2018年04月 - 2019年03月
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            {/*****     コンテキストメニュー     *****/}
            <ContextMenu>
                <ContextMenuTrigger className="flex h-[150px] w-[300px] md:h-[300px] md:w-[600px] items-center justify-center rounded-md border border-dashed text-md border-2">
                    ここを右クリック
                </ContextMenuTrigger>
                <ContextMenuContent className="w-64">
                    <ContextMenuItem inset disabled>
                    戻る
                    <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem inset disabled>
                    進む
                    <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem inset disabled>
                    再読み込み
                    <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                    </ContextMenuItem>
                    {/*****     サブ・コンテキストメニュー（正社員）     *****/}
                    <ContextMenuSub>
                        <ContextMenuSubTrigger inset>正社員</ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-94">
                            <ContextMenuItem className="h-full w-full" onClick={()=>setIsJob1Open(true)}>
                                コンピュータ・ユニオン ― 電算労コンピュータ関連労働組合
                                <ContextMenuShortcut>⌘D</ContextMenuShortcut>
                            </ContextMenuItem>

                            <ContextMenuItem className="h-full w-full" onClick={()=>setIsJob2Open(true)}>
                                株式会社STAIR
                                <ContextMenuShortcut>⇧⌘A</ContextMenuShortcut>
                            </ContextMenuItem>

                            <ContextMenuItem className="h-full w-full" onClick={()=>setIsJob3Open(true)}>
                                株式会社プライオリティーコンサルティング
                                <ContextMenuShortcut>⌘Q</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuSeparator />
                            <ContextMenuLabel>↑ クリックして確認</ContextMenuLabel>
                        </ContextMenuSubContent>
                    </ContextMenuSub>            
                    <ContextMenuSeparator />
                    <ContextMenuCheckboxItem checked disabled>
                    ブックマークバーを表示
                    <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                    </ContextMenuCheckboxItem>
                    {/*****     サブ・コンテキストメニュー（アルバイト）     *****/}
                    <ContextMenuSub>
                        <ContextMenuSubTrigger inset>アルバイト</ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-72">
                            <ContextMenuItem className="h-full w-full" onClick={()=>setIsJob4Open(true)}>
                                株式会社エディオン
                                <ContextMenuShortcut>⇩⌘Z</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem className="h-full w-full" onClick={()=>setIsJob5Open(true)}>
                                株式会社フォーシーズ
                                <ContextMenuShortcut>⌘D</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem className="h-full w-full" onClick={()=>setIsJob6Open(true)}>
                                株式会社プレナス
                                <ContextMenuShortcut>⌘M</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuSeparator />
                            <ContextMenuLabel>↑ マウスを当てて確認</ContextMenuLabel>
                        </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuRadioGroup value="pedro">
                    <ContextMenuSeparator />
                    <ContextMenuRadioItem value="pedro" disabled>
                        リーディングモードで開く
                    </ContextMenuRadioItem>
                    <ContextMenuRadioItem value="colm" disabled>ページのソースを表示</ContextMenuRadioItem>
                    <ContextMenuRadioItem value="colm" disabled>検証</ContextMenuRadioItem>
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
                        ここをタップ
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>職務経歴</DialogTitle>
                        <DialogDescription>
                            この度は、私の職務経歴にご関心をお寄せいただき、誠にありがとうございます。最新の職務経験から順に記載しておりますので、ご参照ください。
                        </DialogDescription>
                    </DialogHeader>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>コンピュータ・ユニオン ― 電算労コンピュータ関連労働組合</AccordionTrigger>
                            <AccordionContent>
                            所属期間：現在所属中
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>株式会社STAIR</AccordionTrigger>
                            <AccordionContent>
                            所属期間：2025年03月 - 2025年03月
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>株式会社プライオリティーコンサルティング</AccordionTrigger>
                            <AccordionContent>
                            所属期間：2022年01月 - 2023年05月
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>株式会社エディオン</AccordionTrigger>
                            <AccordionContent>
                            所属期間：2021年05月 - 2021年10月
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>株式会社フォーシーズ</AccordionTrigger>
                            <AccordionContent>
                            所属期間：2019年08月 - 2020年03月
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>株式会社プレナス</AccordionTrigger>
                            <AccordionContent>
                            所属期間：2018年04月 - 2019年03月
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <DialogFooter>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>        
        </>
    );
}