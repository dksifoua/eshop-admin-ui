"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import {
    ChevronsLeft,
    CircleUserRound,
    LayoutDashboard,
    Percent,
    Settings,
    ShoppingBag,
    ShoppingCart,
    Users
} from "lucide-react"
import Link from "next/link"

const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <aside className={`flex flex-col items-center w-[${collapsed ? "56" : "256"}px] h-full transition-[width] border-r-2`}>
            <div className={`flex content-center items-center ${collapsed ? '' : "gap-2"} w-full h-auto p-2 border-b-2`}>
                <CircleUserRound className={`${collapsed ? "w-6 h-6" : "w-8 h-8"} transition-[ease-out]]`}/>
                <div className={`flex flex-col ${collapsed ? "w-0 hidden" : "w-auto"}`}>
                    <span className={`font-medium`}>Dimitri Sifoua</span>
                    <span className={`text-xs`}>dimitri.sifoua@gmail.com</span>
                </div>
            </div>
            <div className={`flex flex-col w-full h-auto border-b-2`}>
                <ul className="mt-5 pt-2 pb-4 space-y-1 text-sm">
                    <li className="rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Link href={`/`} className="flex items-center p-4 space-x-3 rounded-md">
                            <LayoutDashboard/>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Link href={`/catalog`} className="flex items-center p-4 space-x-3 rounded-md">
                            <ShoppingBag/>
                            <span>Catalog</span>
                        </Link>
                    </li>
                    <li className="rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Link href={`/orders`} className="flex items-center p-4 space-x-3 rounded-md">
                            <ShoppingCart/>
                            <span>Orders</span>
                        </Link>
                    </li>
                    <li className="rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Link href={`/customers`} className="flex items-center p-4 space-x-3 rounded-md">
                            <Users/>
                            <span>Customers</span>
                        </Link>
                    </li>
                    <li className="rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Link href={`/promotions`} className="flex items-center p-4 space-x-3 rounded-md">
                            <Percent/>
                            <span>Promotions</span>
                        </Link>
                    </li>
                    <li className="rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Link href={`/settings`} className="flex items-center p-4 space-x-3 rounded-md">
                            <Settings/>
                            <span>Settings</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <Button
                size="icon"
                variant="outline"
                onClick={() => setCollapsed(prevCollapsed => !prevCollapsed)}
                className={`absolute top-1/2 left-[${collapsed ? "38" : "208"}px] rounded-full transition-[linear] hidden`}
            >
                <ChevronsLeft className={`${collapsed ? "rotate-180" : ''}`}/>
            </Button>
        </aside>
    )
}

export default Sidebar