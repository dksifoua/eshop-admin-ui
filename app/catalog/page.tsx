"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CategoryList from "@/app/catalog/components/CategoryList"
import { ColumnDef } from "@tanstack/table-core"
import { Category, getCategories } from "@/services/catalog/categories"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

const columns: ColumnDef<Category>[] = [
    {
        id: "select",
        header: ({ table }) => <Checkbox
            checked={table.getIsAllPageRowsSelected() || (table.getIsSomeRowsSelected() && "indeterminate")}
            onCheckedChange={value => table.toggleAllRowsSelected(!!value)}
            aria-label={`Select all`}
        />,
        cell: ({ row }) => <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={value => row.toggleSelected(!!value)}
            aria-label={`Select row`}
        />
    },
    {
        id: "name",
        header: ({ column }) => <Button
            variant={`ghost`}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className={`w-full h-full justify-between`}
        >
            Name
            <ArrowUpDown className={`ml-2 h-4 w-4`}/>
        </Button>,
        accessorFn: row => row.name,
    },
    {
        id: "description",
        header: ({ column }) => <Button
            variant={`ghost`}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className={`w-full h-full justify-between`}
        >
            Description
            <ArrowUpDown className={`ml-2 h-4 w-4`}/>
        </Button>,
        accessorFn: row => row.description,
    }
    ,
    {
        id: "created_at",
        header: ({ column }) => <Button
            variant={`ghost`}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className={`w-full h-full justify-between`}
        >
            Created At
            <ArrowUpDown className={`ml-2 h-4 w-4`}/>
        </Button>,
        accessorFn: row => row.audit?.created_at?.toLocaleString(),
    }
    ,
    {
        id: "updated_at",
        header: ({ column }) => <Button
            variant={`ghost`}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className={`w-full h-full justify-between`}
        >
            Updated At
            <ArrowUpDown className={`ml-2 h-4 w-4`}/>
        </Button>,
        accessorFn: row => row.audit?.updated_at?.toLocaleString(),
    }
    ,
]

const Page: React.FC = () => {
    const [categories, setCategories] = React.useState<Category[]>([])

    React.useEffect(() => {
        getCategories().then(res => setCategories(res))
    }, [])

    return (
        <div className={`flex flex-col space-y-4 px-6 py-4`}>
            <div className={`flex`}>
                <h1 className={`text-2xl font-bold tracking-tight`}>Catalog</h1>
            </div>
            <Tabs orientation={`horizontal`} defaultValue={`category`} className={`space-y-4`}>
                <TabsList className="flex flex-row justify-start">
                    <TabsTrigger value="category">Categories</TabsTrigger>
                    <TabsTrigger value="product">Products</TabsTrigger>
                </TabsList>
                <TabsContent value={`category`}>
                    <CategoryList columns={columns} data={categories}/>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Page