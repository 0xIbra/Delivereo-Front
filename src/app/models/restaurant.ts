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
    private opensAt: Time;
    private closesAt: Time;
    private enabled: boolean;
    private published: boolean;
    private createdAt: Date;
    private categories: Array<Category>;
    private image: Image;
    private likes: Array<Like>;
    private dislikes: Array<DisLike>;
    

    private city: City;
    private address: Address;
    private menus: Array<Menu>;


    

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
     * Getter $opensAt
     * @return {Time}
     */
	public get $opensAt(): Time {
		return this.opensAt;
	}

    /**
     * Getter $closesAt
     * @return {Time}
     */
	public get $closesAt(): Time {
		return this.closesAt;
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
     * Getter $createdAt
     * @return {Date}
     */
	public get $createdAt(): Date {
		return this.createdAt;
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
     * Setter $opensAt
     * @param {Time} value
     */
	public set $opensAt(value: Time) {
		this.opensAt = value;
	}

    /**
     * Setter $closesAt
     * @param {Time} value
     */
	public set $closesAt(value: Time) {
		this.closesAt = value;
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
     * Setter $createdAt
     * @param {Date} value
     */
	public set $createdAt(value: Date) {
		this.createdAt = value;
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
