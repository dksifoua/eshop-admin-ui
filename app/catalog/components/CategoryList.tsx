"use client"

import React from "react"
import { ColumnDef, getCoreRowModel, getSortedRowModel, SortingState } from "@tanstack/table-core"
import { flexRender, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting
        }
    })

    return (
        <div>
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
    )
}

export default CategoryList