"use client"

import React from "react";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import { PiUsers } from "react-icons/pi";
import { BsDatabase } from "react-icons/bs";
import { TbPresentationAnalytics } from "react-icons/tb";
import { SiGooglemarketingplatform } from "react-icons/si";
import { LuShoppingBasket } from "react-icons/lu"

const Sidebar: React.FC = () => {

    return <div className="flex">
        <div className="flex flex-col w-full h-full p-3 shadow">
            <div className="space-y-3">
                <div className="flex items-center justify-between space-x-3 p-2 border-b-2">
                    <LuShoppingBasket/>
                    <h2 className="text-xl font-bold">Eshop</h2>
                    <LuShoppingBasket/>
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm hover:bg-blue-100 dark:hover:bg-blue-700">
                            <Link href="/" className="flex items-center p-4 space-x-3 rounded-md">
                                <RxDashboard/>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="rounded-sm hover:bg-blue-100 dark:hover:bg-blue-700">
                            <Link href="/catalog" className="flex items-center p-4 space-x-3 rounded-md">
                                <BsDatabase/>
                                <span>Catalog</span>
                            </Link>
                        </li>
                        <li className="rounded-sm hover:bg-blue-100 dark:hover:bg-blue-700">
                            <Link href="/orders" className="flex items-center p-4 space-x-3 rounded-md">
                                <TiShoppingCart/>
                                <span>Orders</span>
                            </Link>
                        </li>
                        <li className="rounded-sm hover:bg-blue-100 dark:hover:bg-blue-700">
                            <Link href="/customers" className="flex items-center p-4 space-x-3 rounded-md">
                                <PiUsers/>
                                <span>Customers</span>
                            </Link>
                        </li>
                        <li className="rounded-sm hover:bg-blue-100 dark:hover:bg-blue-700">
                            <Link href="/marketing" className="flex items-center p-4 space-x-3 rounded-md">
                                <SiGooglemarketingplatform/>
                                <span>Marketing</span>
                            </Link>
                        </li>
                        <li className="rounded-sm hover:bg-blue-100 dark:hover:bg-blue-700">
                            <Link href="/analytics" className="flex items-center p-4 space-x-3 rounded-md">
                                <TbPresentationAnalytics/>
                                <span>Analytics</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default Sidebar