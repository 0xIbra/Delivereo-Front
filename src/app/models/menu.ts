import { DecimalPipe } from '@angular/common';
import { Image } from './image';
import { Category } from './category';

export class Menu {
    private id: number;
    private name: string;
    private description: string;
    private price: number;
    private image: Image;
    private category: Category;


    constructor(menu: any) {
        if (menu.id !== undefined) {
            this.id = menu.id;
        }
        this.name = menu.name;
        this.description = menu.description;
        this.price = menu.price;
        if (menu.image !== undefined) {
            this.image = new Image(menu.image);
        }
        if (menu.category !== undefined) {
            this.category = new Category(menu.category);
        }
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
     * Getter $description
     * @return {string}
     */
	public get $description(): string {
		return this.description;
	}

    /**
     * Getter $price
     * @return {number }
     */
	public get $price(): number  {
		return this.price;
	}

    /**
     * Getter $image
     * @return {Image}
     */
	public get $image(): Image {
		return this.image;
	}

    /**
     * Getter $category
     * @return {Category}
     */
	public get $category(): Category {
		return this.category;
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
     * Setter $description
     * @param {string} value
     */
	public set $description(value: string) {
		this.description = value;
	}

    /**
     * Setter $price
     * @param {number } value
     */
	public set $price(value: number ) {
		this.price = value;
	}

    /**
     * Setter $image
     * @param {Image} value
     */
	public set $image(value: Image) {
		this.image = value;
	}

    /**
     * Setter $category
     * @param {Category} value
     */
	public set $category(value: Category) {
		this.category = value;
	}

    
}
