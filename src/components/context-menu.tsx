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
                        <DialogDescription className="text-white">
                            <br />
                            所属期間：現在所属中<br />
                            雇用形態：契約社員・派遣社員(案件に準ずる)<br />
                            <br />
                            〇詳細<br />
                            この度、エンジニア主体で運営されているコンピュータ・ユニオンという組合に所属するに至りました。<br />
                            組合経由で案件を受注し、労働者供給契約、又は労働者派遣契約にて供給先・派遣先にて労働を行います。<br />
                            現在、組合の営業担当者と相談し案件受注に向けて動いている次第です。
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
                        <DialogDescription className="text-white">
                            <br />
                            所属期間：1か月未満（2025年03月 - 2025年03月）<br />
                            雇用形態：正社員<br />
                            <br />
                            〇業務内容<br />
                            ・街頭営業<br />
                            ・テレアポ業務<br />
                            ・既存顧客連絡業務<br />
                            <br />
                            〇詳細<br />
                            投資用不動産の営業マンとして駅チカの一人世帯向けワンルームマンションの営業を行っておりました。
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
                        <DialogDescription className="text-white">
                            <br />
                            所属期間：1年半（2022年01月 - 2023年05月）<br />
                            客先常駐先：防衛省内部部局整備計画局情報推進課<br />
                            雇用形態：正社員<br />
                            <br />
                            〇業務内容<br />
                            ・システム運用管理<br />
                            ・サービスデスク<br />
                            ・障害管理<br />
                            ・セキュリティ監視業務<br />
                            <br />
                            〇詳細<br />
                            防衛省職員からのIT関連のお問い合わせの二次受けエンジニアとして、マニュアル化されていない未解決な問題を解決する業務を行っておりました。<br/>
                            所属期間中のインシデント対応数累計は1000件以上です。<br/>
                            システムとサーバー構成の理解に勤め、障害やセキュリティリスク等インシデントの根本的な解決に尽力しました。
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
                        <DialogDescription className="text-white">
                            <br />
                            所属期間：5か月（2021年05月 - 2021年10月）<br />
                            雇用形態：アルバイト<br />
                            <br />
                            〇業務内容<br />
                            ・家電量販店「エディオン」の店舗スタッフ<br />
                            ・レジ業務<br />
                            ・商品説明業務<br />
                            ・清掃業務<br />
                            ・品出し業務<br />
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
                        <DialogDescription className="text-white">
                            <br />
                            所属期間：7か月（2019年08月 - 2020年03月）<br />
                            雇用形態：アルバイト<br />
                            <br />
                            〇業務内容<br />
                            ・宅配ピザチェーン「ピザーラ」のキッチンスタッフ<br />
                            ・ピザ作成業務<br />
                            ・清掃業務<br />
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
                        <DialogDescription className="text-white">
                            <br />
                            所属期間：11か月（2018年04月 - 2019年03月）<br />
                            雇用形態：アルバイト<br />
                            <br />
                            〇業務内容<br />
                            ・持ち帰り弁当チェーン「ほっともっと」の厨房・レジスタッフ<br />
                            ・レジ業務<br />
                            ・商品説明業務<br />
                            ・清掃業務<br />
                            ・品出し業務<br />
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
                            所属期間：現在所属中<br />
                            雇用形態：契約社員・派遣社員(案件に準ずる)<br />
                            <br />
                            〇詳細<br />
                            この度、エンジニア主体で運営されているコンピュータ・ユニオンという組合に所属するに至りました。<br />
                            組合経由で案件を受注し、労働者供給契約、又は労働者派遣契約にて供給先・派遣先にて労働を行います。<br />
                            現在、組合の営業担当者と相談し案件受注に向けて動いている次第です。
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>株式会社STAIR</AccordionTrigger>
                            <AccordionContent>
                            所属期間：1か月未満（2025年03月 - 2025年03月）<br />
                            雇用形態：正社員<br />
                            <br />
                            〇業務内容<br />
                            ・街頭営業<br />
                            ・テレアポ業務<br />
                            ・既存顧客連絡業務<br />
                            <br />
                            〇詳細<br />
                            投資用不動産の営業マンとして駅チカの一人世帯向けワンルームマンションの営業を行っておりました。
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>株式会社プライオリティーコンサルティング</AccordionTrigger>
                            <AccordionContent>
                            所属期間：1年半（2022年01月 - 2023年05月）<br />
                            客先常駐先：防衛省内部部局整備計画局情報推進課<br />
                            雇用形態：正社員<br />
                            <br />
                            〇業務内容<br />
                            ・システム運用管理<br />
                            ・サービスデスク<br />
                            ・障害管理<br />
                            ・セキュリティ監視業務<br />
                            <br />
                            〇詳細<br />
                            防衛省職員からのIT関連のお問い合わせの二次受けエンジニアとして、マニュアル化されていない未解決な問題を解決する業務を行っておりました。<br/>
                            所属期間中のインシデント対応数累計は1000件以上です。<br/>
                            システムとサーバー構成の理解に勤め、障害やセキュリティリスク等インシデントの根本的な解決に尽力しました。
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>株式会社エディオン</AccordionTrigger>
                            <AccordionContent>
                            所属期間：5か月（2021年05月 - 2021年10月）<br />
                            雇用形態：アルバイト<br />
                            <br />
                            〇業務内容<br />
                            ・家電量販店「エディオン」の店舗スタッフ<br />
                            ・レジ業務<br />
                            ・商品説明業務<br />
                            ・清掃業務<br />
                            ・品出し業務<br />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>株式会社フォーシーズ</AccordionTrigger>
                            <AccordionContent>
                            所属期間：7か月（2019年08月 - 2020年03月）<br />
                            雇用形態：アルバイト<br />
                            <br />
                            〇業務内容<br />
                            ・宅配ピザチェーン「ピザーラ」のキッチンスタッフ<br />
                            ・ピザ作成業務<br />
                            ・清掃業務<br />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>株式会社プレナス</AccordionTrigger>
                            <AccordionContent>
                            所属期間：11か月（2018年04月 - 2019年03月）<br />
                            雇用形態：アルバイト<br />
                            <br />
                            〇業務内容<br />
                            ・持ち帰り弁当チェーン「ほっともっと」の厨房・レジスタッフ<br />
                            ・レジ業務<br />
                            ・商品説明業務<br />
                            ・清掃業務<br />
                            ・品出し業務<br />
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