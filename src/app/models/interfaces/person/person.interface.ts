export interface KnownFor {
    adult: boolean;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    backdrop_path: string;
    first_air_date: string;
    name: string;
    origin_country: string[];
    original_name: string;
}

export interface Person {
    adult: boolean;
    gender: number;
    id: number;
    known_for: KnownFor[];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
}

export interface PersonResponse {
    page: number;
    results: Person[];
    total_pages: number;
    total_results: number;
}