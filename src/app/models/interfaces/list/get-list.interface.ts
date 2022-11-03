export interface Lists {
    description: string;
    favorite_count: number;
    id: number;
    item_count: number;
    iso_639_1: string;
    list_type: string;
    name: string;
    poster_path: string;
}

export interface ListsResponse {
    page: number;
    results: Lists[];
    total_pages: number;
    total_results: number;
}