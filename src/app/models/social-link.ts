export class SocialLink {
    private id: number;
    private type: Object;
    private url: string;

    constructor(id: number, type: Object, url: string) {
        this.id = id;
        this.type = type;
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
     * Getter $type
     * @return {Object}
     */
	public get $type(): Object {
		return this.type;
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
     * Setter $type
     * @param {Object} value
     */
	public set $type(value: Object) {
		this.type = value;
	}

    /**
     * Setter $url
     * @param {string} value
     */
	public set $url(value: string) {
		this.url = value;
	}

}