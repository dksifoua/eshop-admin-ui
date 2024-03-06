"use client"

import React from "react"
import {
    ColumnDef,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState
} from "@tanstack/table-core"
import { flexRender, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Props<TData, TValue> {
    columns: ColumnDef<TData, TValue>[],
    data: TData[]
}

const CategoryList = <TData, TValue>({ columns, data }: Props<TData, TValue>) => {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
        }
    })

    return (
        <div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {
                            table.getHeaderGroups().map(headerGroup =>
                                <TableRow key={headerGroup.id}>
                                    {
                                        headerGroup.headers.map(header =>
                                            <TableHead key={header.id}>
                                                {
                                                    header.isPlaceholder
                                                        ? null
                                                        : flexRender(header.column.columnDef.header, header.getContext())
                                                }
                                            </TableHead>
                                        )
                                    }
                                </TableRow>
                            )
                        }
                    </TableHeader>
                    <TableBody>
                        {
                            table.getRowModel().rows?.length
                                ? table.getRowModel().rows.map(row =>
                                    <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                        {
                                            row.getVisibleCells().map(cell =>
                                                <TableCell key={cell.id}>
                                                    {
                                                        flexRender(cell.column.columnDef.cell, cell.getContext())
                                                    }
                                                </TableCell>
                                            )
                                        }
                                    </TableRow>
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={columns.length} className="h-24 text-center">
                                            No categories.
                                        </TableCell>
                                    </TableRow>
                                )
                        }
                    </TableBody>
                </Table>
            </div>
            <div className={`flex flex-row justify-between`}>
                <div className="flex text-sm text-muted-foreground py-4">
                    {table.getState().pagination.pageIndex + 1} of{" "}
                    {table.getPageCount()} row(s) selected.
                </div>
                <div className={`flex items-center space-x-2 py-4`}>
                    <p className={`text-sm text-muted-foreground font-medium`}>Rows per page</p>
                    <Select
                        value={`${table.getState().pagination.pageSize}`}
                        onValueChange={value => table.setPageSize(Number(value))}
                    >
                        <SelectTrigger className={`h-8 w-[70px]`}>
                            <SelectValue placeholder={table.getState().pagination.pageSize}/>
                        </SelectTrigger>
                        <SelectContent side={`top`}>
                            {
                                [10, 15, 20, 25, 30, 50, 100].map(size =>
                                    <SelectItem key={size} value={`${size}`}>{size}</SelectItem>
                                )
                            }
                        </SelectContent>
                    </Select>
                </div>
                <div className={`flex items-center justify-end space-x-2 py-4`}>
                    <Button
                        variant={`outline`}
                        size={`sm`}
                        onClick={() => table.firstPage()}
                        disabled={!table.getCanPreviousPage()}
                        className={`h-8 w-8 p-0`}
                    ><ChevronsLeft className={`h-4 w-4`}/></Button>
                    <Button
                        variant={`outline`}
                        size={`sm`}
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        className={`h-8 w-8 p-0`}
                    ><ChevronLeft className={`h-4 w-4`}/></Button>
                    <Button
                        variant={`outline`}
                        size={`sm`}
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        className={`h-8 w-8 p-0`}
                    ><ChevronRight className={`h-4 w-4`}/></Button>
                    <Button
                        variant={`outline`}
                        size={`sm`}
                        onClick={() => table.lastPage()}
                        disabled={!table.getCanNextPage()}
                        className={`h-8 w-8 p-0`}
                    ><ChevronsRight className={`h-4 w-4`}/></Button>
                </div>
            </div>
        </div>
    )
}

export default CategoryList