import { Address } from './address';
import { Cart } from './cart';
import { Gender } from './gender';
import { Image } from './image';
import { Order } from './order';
import { Restaurant } from './restaurant';
import { SocialLink } from './social-link';

export class User {
    private id: any;
    private first_name: string;
    private last_name: string;
    private email: string;
    private username: string;
    private password: string;
    private roles: any[];
    private image: Image;
    private gender: Gender;
    private addresses: Address[];
    private restaurant: Restaurant;
    private cart: Cart;
    private orders: Order[];
    private created_at: Date;
    private social_links: SocialLink[];


    constructor(user: any) {
        if (user.id !== undefined) {
            this.id = user.id;
        }
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.email = user.email;
        this.username = user.username;
        this.roles = user.roles;

        if (user.image !== undefined) {
            this.image = user.image;
        }

        this.gender = user.gender;

        this.addresses = user.addresses;

        if (user.restaurant !== undefined) {
            this.restaurant = user.restaurant;
        }
        
        if (user.cart !== undefined) {
            this.cart = user.cart;
        }

        if (user.orders !== undefined) {
            this.orders = new Array<Order>();
            user.orders.forEach(order => {
                this.orders.push(new Order(order));
            });
        }
        if (user.created_at !== undefined) {
            this.created_at = user.created_at;
        }
    }

    

    public checkRole(role: string) {
        return this.roles.includes(role);
    }

    




    /**
     * Getter $id
     * @return {any}
     */
	public get $id(): any {
		return this.id;
	}

    /**
     * Getter $first_name
     * @return {string}
     */
	public get $first_name(): string {
		return this.first_name;
	}

    /**
     * Getter $last_name
     * @return {string}
     */
	public get $last_name(): string {
		return this.last_name;
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
     * @return {any[]}
     */
	public get $roles(): any[] {
		return this.roles;
	}

    /**
     * Getter $image
     * @return {Image}
     */
	public get $image(): Image {
		return this.image;
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
     * @return {Address[]}
     */
	public get $addresses(): Address[] {
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
     * @return {Order[]}
     */
	public get $orders(): Order[] {
		return this.orders;
	}

    /**
     * Getter $created_at
     * @return {Date}
     */
	public get $created_at(): Date {
		return this.created_at;
	}

    /**
     * Getter $social_links
     * @return {SocialLink[]}
     */
	public get $social_links(): SocialLink[] {
		return this.social_links;
	}

    /**
     * Setter $id
     * @param {any} value
     */
	public set $id(value: any) {
		this.id = value;
	}

    /**
     * Setter $first_name
     * @param {string} value
     */
	public set $first_name(value: string) {
		this.first_name = value;
	}

    /**
     * Setter $last_name
     * @param {string} value
     */
	public set $last_name(value: string) {
		this.last_name = value;
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
     * @param {any[]} value
     */
	public set $roles(value: any[]) {
		this.roles = value;
	}

    /**
     * Setter $image
     * @param {Image} value
     */
	public set $image(value: Image) {
		this.image = value;
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
     * @param {Address[]} value
     */
	public set $addresses(value: Address[]) {
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
     * @param {Order[]} value
     */
	public set $orders(value: Order[]) {
		this.orders = value;
	}

    /**
     * Setter $created_at
     * @param {Date} value
     */
	public set $created_at(value: Date) {
		this.created_at = value;
	}

    /**
     * Setter $social_links
     * @param {SocialLink[]} value
     */
	public set $social_links(value: SocialLink[]) {
		this.social_links = value;
	}
    



}
