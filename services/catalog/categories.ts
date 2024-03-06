import { Audit } from "@/services"

export type Category = {
    id: string,
    name: string,
    description: string,
    audit: Audit
}

export const getCategories = async (): Promise<Category[]> => {
    return [
        {
            id: "1",
            name: "Category 1",
            description: "Description 1",
            audit: {
                created_at: new Date(Date.now()),
                updated_at: null
            }
        },
        {
            id: "2",
            name: "Category 2",
            description: "Description 2",
            audit: {
                created_at: new Date(Date.now()),
                updated_at: new Date(Date.now())
            }
        }
    ]
}