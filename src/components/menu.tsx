import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarDemo() {
    return (
        <Menubar className="w-full mx-auto max-w-xs flex items-center justify-center">
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}
