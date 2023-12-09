"use client"
import { toast } from 'sonner';


import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsCopy } from "react-icons/bs";
export default function TextWithCopyButton({ text }: { text: string }) {

    const onCopy = () => {
        navigator.clipboard.writeText(text)
        toast.success("Email copied")
    }

    return (
        <>
            <div className="flex items-center gap-4 border-2 border-cyan-300 p-4 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200"> {text}</h2>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" onClick={onCopy}>
                                <BsCopy className="w-4 h-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Copy</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>

        </>
    )
}