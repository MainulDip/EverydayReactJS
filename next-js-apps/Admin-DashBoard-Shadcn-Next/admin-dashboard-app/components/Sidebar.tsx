import React from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

import { LayoutDashboard, Newspaper, Folders, CreditCard, Settings, User } from "lucide-react"
import Link from 'next/link'


function Sidebar() {
    return (
        <Command className="bg-secondary rounded-none">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>
                        <LayoutDashboard className="mr-2 w-4 h-4" />
                        <Link href="/">Dashboard</Link>
                    </CommandItem>
                    <CommandItem>
                        <Newspaper className="mr-2 w-4 h-4" />
                        <Link href="/">Posts</Link>
                    </CommandItem>
                    <CommandItem>
                        <Folders className="mr-2 w-4 h-4" />
                        <Link href="/">Categories</Link>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>
                        <User className="mr-2 w-4 h-4" />
                        <span>Profile</span>
                        <CommandShortcut className="mr-2 w-4 h-4">#P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <CreditCard className="mr-2 w-4 h-4" />
                        <span>Biling</span>
                        <CommandShortcut className="mr-2 w-4 h-4">#B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <Settings className="mr-2 w-4 h-4" />
                        <span>Setting</span>
                        <CommandShortcut className="mr-2 w-4 h-4">#S</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>

    )
}

export default Sidebar