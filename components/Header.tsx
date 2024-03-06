import React from "react"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import { Input } from "@/components/ui/input"

const Header: React.FC = () => {

    return (
        <div className={`flex flex-row p-2 gap-2 border-b-2`}>
            <div className={`flex ml-auto gap-2`}>
                <Input
                    type="search"
                    placeholder="Search..."
                    disabled={true}
                />
                <ThemeSwitcher/>
            </div>
        </div>
    )
}

export default Header