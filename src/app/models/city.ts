export class City {
    private id: number;
    private name: string;
    private zipCode: Number;




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
     * Getter $zipCode
     * @return {Number}
     */
	public get $zipCode(): Number {
		return this.zipCode;
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
     * Setter $zipCode
     * @param {Number} value
     */
	public set $zipCode(value: Number) {
		this.zipCode = value;
	}

}
