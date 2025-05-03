import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";

export function DialogWrapper({
    title, open, onOpenChange, children
}:{
    title:string,
    open: boolean,
    onOpenChange: Dispatch<SetStateAction<boolean>>,
    children: React.ReactNode
}){
    return (
        <Dialog
        open={open} 
        onOpenChange={onOpenChange}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription className="text-white">
                        {children}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}