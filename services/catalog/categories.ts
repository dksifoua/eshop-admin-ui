import { Audit } from "@/services"

export type Category = {
    id: string,
    name: string,
    description: string,
    audit: Audit
}

export default class CategoryService {

    static async getCategories(): Promise<Category[]> {
        const response = await fetch(`http://localhost:8080/api/v1/catalog/categories`)
        if (!response.ok) {
            throw new Error(response.statusText)
        }

        return response.json()
    }
}