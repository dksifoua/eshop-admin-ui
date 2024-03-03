import React from "react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

const Header: React.FC = () =>
    <div className="flex flex-row p-2 space-x-3">
        <Input type="search" placeholder="Search..."/>
        <HoverCard>
            <HoverCardTrigger>
                <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
            </HoverCardTrigger>
            <HoverCardContent>
                John Doe
            </HoverCardContent>
        </HoverCard>
    </div>

export default Header