export class AddFavoriteDto {
    // ID película
    media_type: string = "movie";
    media_id: number = 0;
    favorite: boolean = true;

    constructor(media_type: string, media_id: number, favorite: boolean) {
        this.media_type = media_type;
        this.media_id = media_id;
        this.favorite = favorite;
    }
}