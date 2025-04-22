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

export function JobContextMenu(){
    return (
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
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked disabled>
              ブックマークバーを表示
              <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>正社員</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-134">
                <ContextMenuItem>
                  2025-04 コンピュータ・ユニオン ― 電算労コンピュータ関連労働組合　現在所属中
                  <ContextMenuShortcut>⌘D</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  2025-03 株式会社STAIR　入社
                  <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>2025-03 株式会社STAIR　入社</ContextMenuItem>
                <ContextMenuItem>
                  2023-05 株式会社プライオリティーコンサルティング　退社
                </ContextMenuItem>
                <ContextMenuItem>
                  2022-01 株式会社プライオリティーコンサルティング　入社
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuLabel>↑ クリックして確認</ContextMenuLabel>
              </ContextMenuSubContent>
            </ContextMenuSub>            <ContextMenuRadioGroup value="pedro">
              <ContextMenuSeparator />
              <ContextMenuRadioItem value="pedro" disabled>
                リーディングモードで開く
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm" disabled>ページのソースを表示</ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm" disabled>検証</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
    );
}