export class AddMovieDto {
    // ID película
    media_id: number = 0;

    constructor(media_id: number) {
        this.media_id = media_id;
    }
}