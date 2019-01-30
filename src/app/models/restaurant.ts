import { Time } from '@angular/common';
import { Category } from './category';
import { Image } from './image';
import { Like } from './like';
import { DisLike } from './dis-like';
import { City } from './city';
import { Address } from './address';
import { Menu } from './menu';

export class Restaurant {
    private id: number;
    private name: string;
    private number: string;
    private opens_at: any;
    private closes_at: any;
    public enabled: boolean;
    private published: boolean;
    private created_at: Date;
    private categories: Array<Category>;
    private image: Image;
    private likes: Array<Like>;
    private dislikes: Array<DisLike>;
    

    private city: City;
    private address: Address;
    private menus: Array<Menu>;


    constructor(restaurant: any = null) {
        if (restaurant !== null) {
            this.categories = new Array<Category>();
            this.likes = new Array<Like>();
            this.dislikes = new Array<DisLike>();
            this.menus = new Array<Menu>();

            this.id = restaurant.id;
            this.name = restaurant.name;
            if (restaurant.number !== undefined) {
                this.number = restaurant.number;
            }

            this.opens_at = restaurant.opens_at;
            this.closes_at = restaurant.closes_at;

            if (restaurant.enabled !== undefined) {
                this.enabled = restaurant.enabled;
            }
            if (restaurant.published !== undefined) {
                this.published = restaurant.published;
            }
            if (restaurant.created_at !== undefined) {
                this.created_at = restaurant.created_at;
            }

            if (restaurant.categories !== undefined && restaurant.categories.length > 0) {
                restaurant.categories.forEach(category => {
                    this.categories.push(new Category(category));
                });
            }
            
            if (restaurant.image !== undefined) {
                this.image = new Image(restaurant.image);
            }

            if (restaurant.likes !== undefined && restaurant.likes.length > 0) {
                restaurant.likes.forEach(like => {
                    this.likes.push(new Like(like));
                });
            }


            if (restaurant.dislikes !== undefined && restaurant.dislikes.length > 0) {
                restaurant.dislikes.forEach(dislike => {
                    this.dislikes.push(new DisLike(dislike));
                });
            }

            if (restaurant.city !== undefined) {
                this.city = new City(restaurant.city);
            }

            if (restaurant.address !== undefined) {
                this.address = new Address(restaurant.address);
            }

            if (restaurant.menus !== undefined && restaurant.menus.length > 0) {
                restaurant.menus.forEach(menu => {
                    this.menus.push(new Menu(menu));
                });
            }
        } else {
            this.categories = []
            this.address = new Address();
        }
    }
    

    public addCategory(value: Category) {
        this.categories.push(value);
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
     * Getter $number
     * @return {string}
     */
	public get $number(): string {
		return this.number;
	}

    /**
     * Getter $opens_at
     * @return {any}
     */
	public get $opens_at(): any {
		return this.opens_at;
	}

    /**
     * Getter $closes_at
     * @return {any}
     */
	public get $closes_at(): any {
		return this.closes_at;
	}

    /**
     * Getter $enabled
     * @return {boolean}
     */
	public get $enabled(): boolean {
		return this.enabled;
	}

    /**
     * Getter $published
     * @return {boolean}
     */
	public get $published(): boolean {
		return this.published;
	}

    /**
     * Getter $created_at
     * @return {Date}
     */
	public get $created_at(): Date {
		return this.created_at;
	}

    /**
     * Getter $categories
     * @return {Array<Category>}
     */
	public get $categories(): Array<Category> {
		return this.categories;
	}

    /**
     * Getter $image
     * @return {Image}
     */
	public get $image(): Image {
		return this.image;
	}

    /**
     * Getter $likes
     * @return {Array<Like>}
     */
	public get $likes(): Array<Like> {
		return this.likes;
	}

    /**
     * Getter $dislikes
     * @return {Array<DisLike>}
     */
	public get $dislikes(): Array<DisLike> {
		return this.dislikes;
	}

    /**
     * Getter $city
     * @return {City}
     */
	public get $city(): City {
		return this.city;
	}

    /**
     * Getter $address
     * @return {Address}
     */
	public get $address(): Address {
		return this.address;
	}

    /**
     * Getter $menus
     * @return {Array<Menu>}
     */
	public get $menus(): Array<Menu> {
		return this.menus;
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
     * Setter $number
     * @param {string} value
     */
	public set $number(value: string) {
		this.number = value;
	}

    /**
     * Setter $opens_at
     * @param {any} value
     */
	public set $opens_at(value: any) {
		this.opens_at = value;
	}

    /**
     * Setter $closes_at
     * @param {any} value
     */
	public set $closes_at(value: any) {
		this.closes_at = value;
	}

    /**
     * Setter $enabled
     * @param {boolean} value
     */
	public set $enabled(value: boolean) {
		this.enabled = value;
	}

    /**
     * Setter $published
     * @param {boolean} value
     */
	public set $published(value: boolean) {
		this.published = value;
	}

    /**
     * Setter $created_at
     * @param {Date} value
     */
	public set $created_at(value: Date) {
		this.created_at = value;
	}

    /**
     * Setter $categories
     * @param {Array<Category>} value
     */
	public set $categories(value: Array<Category>) {
		this.categories = value;
	}

    /**
     * Setter $image
     * @param {Image} value
     */
	public set $image(value: Image) {
		this.image = value;
	}

    /**
     * Setter $likes
     * @param {Array<Like>} value
     */
	public set $likes(value: Array<Like>) {
		this.likes = value;
	}

    /**
     * Setter $dislikes
     * @param {Array<DisLike>} value
     */
	public set $dislikes(value: Array<DisLike>) {
		this.dislikes = value;
	}

    /**
     * Setter $city
     * @param {City} value
     */
	public set $city(value: City) {
		this.city = value;
	}

    /**
     * Setter $address
     * @param {Address} value
     */
	public set $address(value: Address) {
		this.address = value;
	}

    /**
     * Setter $menus
     * @param {Array<Menu>} value
     */
	public set $menus(value: Array<Menu>) {
		this.menus = value;
	}


   

}
