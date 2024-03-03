import React from "react";
import Link from "next/link";
import { RxArrowTopRight, RxDashboard } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import { PiUsers } from "react-icons/pi";
import { BsDatabase } from "react-icons/bs";
import { TbPresentationAnalytics } from "react-icons/tb";
import { SiGooglemarketingplatform } from "react-icons/si";
import { MdOutlineContactSupport } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";

const Sidebar: React.FC = () =>
    <div className="flex">
        <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
            <div className="space-y-3">
                <div className="flex items-center">
                    <h2 className="text-xl font-bold">Eshop Admin</h2>
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm">
                            <Link href="#" className="flex items-center p-4 space-x-3 rounded-md">
                                <RxDashboard/>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link href="#" className="flex items-center p-4 space-x-3 rounded-md">
                                <BsDatabase/>
                                <span>Catalog</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link href="#" className="flex items-center p-4 space-x-3 rounded-md">
                                <TiShoppingCart/>
                                <span>Orders</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link href="#" className="flex items-center p-4 space-x-3 rounded-md">
                                <PiUsers/>
                                <span>Customers</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link href="#" className="flex items-center p-4 space-x-3 rounded-md">
                                <SiGooglemarketingplatform/>
                                <span>Marketing</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link href="#" className="flex items-center p-4 space-x-3 rounded-md">
                                <TbPresentationAnalytics/>
                                <span>Analytics</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

export default Sidebar