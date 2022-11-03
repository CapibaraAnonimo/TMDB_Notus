export class CreateListDto {
    name: string = '';
    description: string = '';
    language: string = '';

    constructor(name: string, description: string, language: string) {
        this.name = name;
        this.description = description;
        this.language = language;
    }
}