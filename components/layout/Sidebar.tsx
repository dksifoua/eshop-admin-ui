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
    <aside className="w-auto flex flex-col justify-between h-full">
        <div className="h-16 flex items-center justify-center border-b-2">
            <h2 className="text-2xl font-semibold">Eshop</h2>
        </div>
        <ul className="border-b-2">
            <li className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link href="#" className="flex items-center p-6 w-full space-x-4 pointer-events-none">
                    <RxDashboard/>
                    <span className="text-sm font-medium">Dashboard</span>
                </Link>
            </li>
            <li className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link href="#" className="flex items-center p-6 w-full space-x-4">
                    <BsDatabase/>
                    <span className="text-sm font-medium">Catalog</span>
                </Link>
            </li>
            <li className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link href="#" className="flex items-center p-6 w-full space-x-4 pointer-events-none">
                    <TiShoppingCart/>
                    <span className="text-sm font-medium">Orders</span>
                </Link>
            </li>
            <li className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link href="#" className="flex items-center p-6 w-full space-x-4 pointer-events-none">
                    <PiUsers/>
                    <span className="text-sm font-medium">Customers</span>
                </Link>
            </li>
            <li className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link href="#" className="flex items-center p-6 w-full space-x-4 pointer-events-none">
                    <SiGooglemarketingplatform/>
                    <span className="text-sm font-medium">Marketing</span>
                </Link>
            </li>
            <li className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link href="#" className="flex items-center p-6 w-full space-x-4 pointer-events-none">
                    <TbPresentationAnalytics/>
                    <span className="text-sm font-medium">Analytics</span>
                </Link>
            </li>
        </ul>
        <ul className="mt-auto border-t-2">
            <li className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link href="https://github.com/dksifoua/eshop-admin-ui/issues"
                      target="_blank"
                      className="flex items-center p-6 w-full space-x-4">
                    <MdOutlineContactSupport/>
                    <span className="text-sm font-medium">Support</span>
                    <RxArrowTopRight/>
                </Link>
            </li>
            <li className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link href="https://github.com/dksifoua/eshop-admin-ui/wiki"
                      target="_blank"
                      className="flex items-center p-6 w-full space-x-4">
                    <CgFileDocument/>
                    <span className="text-sm font-medium">Documentation</span>
                    <RxArrowTopRight/>
                </Link>
            </li>
        </ul>
    </aside>

export default Sidebar