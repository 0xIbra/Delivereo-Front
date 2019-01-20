export class City {
    private id: number;
    private name: string;
    private zip_code: Number;


    constructor(city: any) {
        if (city.id !== undefined) {
            this.id = city.id;
        }
        this.name = city.name;
        this.zip_code = city.zip_code;
    }


    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $zip_code
     * @return {Number}
     */
	public get $zip_code(): Number {
		return this.zip_code;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $zip_code
     * @param {Number} value
     */
	public set $zip_code(value: Number) {
		this.zip_code = value;
	}
    
}
