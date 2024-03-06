"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ChevronsLeft, User } from "lucide-react"

const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = React.useState(true);

    return (
        <aside className={`flex flex-col items-center w-[${collapsed ? "56" : "256"}px] h-full transition-[width] border-r-2`}>
            <div className={`flex content-center items-center ${collapsed ? '' : "gap-2"} w-full h-auto p-2 border-b-2`}>
                <User className={`${!collapsed ? "w-8 h-8" : "w-full h-auto"} transition-[ease-out]]`}/>
                <div className={`flex flex-col ${collapsed ? "w-0 hidden" : "w-auto"}`}>
                    <span className={`font-medium`}>Dimitri Sifoua</span>
                    <span className={`text-xs`}>dimitri.sifoua@gmail.com</span>
                </div>
            </div>

            <Button
                size="icon"
                variant="outline"
                onClick={() => setCollapsed(prevCollapsed => !prevCollapsed)}
                className={`absolute top-1/2 left-[${collapsed ? "38" : "208"}px] rounded-full transition-[linear]`}
            >
                <ChevronsLeft className={`${collapsed ? "rotate-180" : ''}`}/>
            </Button>
        </aside>
    )
}

export default Sidebar