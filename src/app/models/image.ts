export class Image {
    private id: number;
    private title: string;
    private url: string;


    constructor(id: number, title: string, url: string) {
        this.id = id;
        this.title = title;
        this.url = url;
    }

    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Getter $url
     * @return {string}
     */
	public get $url(): string {
		return this.url;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $title
     * @param {string} value
     */
	public set $title(value: string) {
		this.title = value;
	}

    /**
     * Setter $url
     * @param {string} value
     */
	public set $url(value: string) {
		this.url = value;
	}


}
