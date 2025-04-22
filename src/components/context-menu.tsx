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

export function JobContextMenu(){
    return (
        <>
        <div className="hidden sm:block">
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
                    <ContextMenuSub>
                        <ContextMenuSubTrigger inset>正社員</ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-134">
                            <ContextMenuItem>
                            2025-04 コンピュータ・ユニオン ― 電算労コンピュータ関連労働組合　現在所属中
                            <ContextMenuShortcut>⌘D</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem>
                            2025-03 株式会社STAIR　退社
                            <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem>
                                2025-03 株式会社STAIR　入社
                            </ContextMenuItem>
                            <ContextMenuItem>
                            2023-05 株式会社プライオリティーコンサルティング　退社
                            </ContextMenuItem>
                            <ContextMenuItem>
                            2022-01 株式会社プライオリティーコンサルティング　入社
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
                    <ContextMenuSub>
                        <ContextMenuSubTrigger inset>アルバイト</ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-72">
                            <ContextMenuItem>
                            2021-10 株式会社エディオン　退社
                            <ContextMenuShortcut>⇩⌘Z</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem>
                            2021-05 株式会社エディオン　入社
                            </ContextMenuItem>
                            <ContextMenuItem>
                            2020-03 株式会社フォーシーズ　退社
                            </ContextMenuItem>
                            <ContextMenuItem>
                            2019-08 株式会社フォーシーズ　入社
                            </ContextMenuItem>
                            <ContextMenuItem>
                            2019-03 株式会社プレナス　退社
                            <ContextMenuShortcut>⌘A</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem>
                            2018-04 株式会社プレナス　入社
                            <ContextMenuShortcut>⌘Q</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuSeparator />
                            <ContextMenuLabel>↑ クリックして確認</ContextMenuLabel>
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
                        Make changes to your profile here. Click save when you're done.
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