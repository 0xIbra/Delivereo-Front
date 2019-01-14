import { City } from './city';

export class Address {
    private id: number;
    private name: string;
    private line1: string;
    private line2: string;
    private city: City;



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
     * Getter $line1
     * @return {string}
     */
	public get $line1(): string {
		return this.line1;
	}

    /**
     * Getter $line2
     * @return {string}
     */
	public get $line2(): string {
		return this.line2;
	}

    /**
     * Getter $city
     * @return {City}
     */
	public get $city(): City {
		return this.city;
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
     * Setter $line1
     * @param {string} value
     */
	public set $line1(value: string) {
		this.line1 = value;
	}

    /**
     * Setter $line2
     * @param {string} value
     */
	public set $line2(value: string) {
		this.line2 = value;
	}

    /**
     * Setter $city
     * @param {City} value
     */
	public set $city(value: City) {
		this.city = value;
	}


}
