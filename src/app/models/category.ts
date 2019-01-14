import { Image } from './image';

export class Category {
    private id: number;
    private name: string;
    private image: Image;
    
    constructor(id: number, name: string, image: Image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}


    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $image
     * @return {Image}
     */
	public get $image(): Image {
		return this.image;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $image
     * @param {Image} value
     */
	public set $image(value: Image) {
		this.image = value;
	}


}
