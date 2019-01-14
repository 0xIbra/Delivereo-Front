import { Address } from './address';
import { Cart } from './cart';
import { Gender } from './gender';
import { Image } from './image';
import { Order } from './order';
import { Restaurant } from './restaurant';

export class User {
    private id: number;
    private firstName: string;
    private lastName: string;
    private email: string;
    private username: string;
    private password: string;
    private roles: Array<any>;
    private _image: Image;
    private gender: Gender;
    private addresses: Array<Address>;
    private restaurant: Restaurant;
    private cart: Cart;
    private orders: Array<Order>;
    private createdAt: Date;

    

    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $firstName
     * @return {string}
     */
	public get $firstName(): string {
		return this.firstName;
	}

    /**
     * Getter $lastName
     * @return {string}
     */
	public get $lastName(): string {
		return this.lastName;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Getter $username
     * @return {string}
     */
	public get $username(): string {
		return this.username;
	}

    /**
     * Getter $password
     * @return {string}
     */
	public get $password(): string {
		return this.password;
	}

    /**
     * Getter $roles
     * @return {Array<any>}
     */
	public get $roles(): Array<any> {
		return this.roles;
	}

    /**
     * Getter image
     * @return {Image}
     */
	public get image(): Image {
		return this._image;
	}

    /**
     * Getter $gender
     * @return {Gender}
     */
	public get $gender(): Gender {
		return this.gender;
	}

    /**
     * Getter $addresses
     * @return {Array<Address>}
     */
	public get $addresses(): Array<Address> {
		return this.addresses;
	}

    /**
     * Getter $restaurant
     * @return {Restaurant}
     */
	public get $restaurant(): Restaurant {
		return this.restaurant;
	}

    /**
     * Getter $cart
     * @return {Cart}
     */
	public get $cart(): Cart {
		return this.cart;
	}

    /**
     * Getter $orders
     * @return {Array<Order>}
     */
	public get $orders(): Array<Order> {
		return this.orders;
	}

    /**
     * Getter $createdAt
     * @return {Date}
     */
	public get $createdAt(): Date {
		return this.createdAt;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $firstName
     * @param {string} value
     */
	public set $firstName(value: string) {
		this.firstName = value;
	}

    /**
     * Setter $lastName
     * @param {string} value
     */
	public set $lastName(value: string) {
		this.lastName = value;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}

    /**
     * Setter $username
     * @param {string} value
     */
	public set $username(value: string) {
		this.username = value;
	}

    /**
     * Setter $password
     * @param {string} value
     */
	public set $password(value: string) {
		this.password = value;
	}

    /**
     * Setter $roles
     * @param {Array<any>} value
     */
	public set $roles(value: Array<any>) {
		this.roles = value;
	}

    /**
     * Setter image
     * @param {Image} value
     */
	public set image(value: Image) {
		this._image = value;
	}

    /**
     * Setter $gender
     * @param {Gender} value
     */
	public set $gender(value: Gender) {
		this.gender = value;
	}

    /**
     * Setter $addresses
     * @param {Array<Address>} value
     */
	public set $addresses(value: Array<Address>) {
		this.addresses = value;
	}

    /**
     * Setter $restaurant
     * @param {Restaurant} value
     */
	public set $restaurant(value: Restaurant) {
		this.restaurant = value;
	}

    /**
     * Setter $cart
     * @param {Cart} value
     */
	public set $cart(value: Cart) {
		this.cart = value;
	}

    /**
     * Setter $orders
     * @param {Array<Order>} value
     */
	public set $orders(value: Array<Order>) {
		this.orders = value;
	}

    /**
     * Setter $createdAt
     * @param {Date} value
     */
	public set $createdAt(value: Date) {
		this.createdAt = value;
	}



}
