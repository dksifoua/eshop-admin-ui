import React from "react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import DarkModeToggle from "@/components/layout/DarkModeToggle"

const Header: React.FC = () =>
    <div className="flex flex-row p-2 space-x-3">
        <Input type="search" placeholder="Search..."/>
        <HoverCard>
            <HoverCardTrigger>
                <Avatar>
                    <AvatarFallback>DS</AvatarFallback>
                </Avatar>
            </HoverCardTrigger>
            <HoverCardContent>
                Dimitri Sifoua
            </HoverCardContent>
        </HoverCard>
        <DarkModeToggle/>
    </div>

export default Header