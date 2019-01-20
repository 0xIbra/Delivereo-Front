import { Menu } from './menu';

export class CartItem {
    private id: number;
    private menu: Menu;

    private quantity: Number;


    constructor(cartItem: any) {
        this.id = cartItem.id;
        this.menu = new Menu(cartItem.menu);
        this.quantity = cartItem.quantity;
    }


    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $menu
     * @return {Menu}
     */
	public get $menu(): Menu {
		return this.menu;
	}

    /**
     * Getter $quantity
     * @return {Number}
     */
	public get $quantity(): Number {
		return this.quantity;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $menu
     * @param {Menu} value
     */
	public set $menu(value: Menu) {
		this.menu = value;
	}

    /**
     * Setter $quantity
     * @param {Number} value
     */
	public set $quantity(value: Number) {
		this.quantity = value;
	}


}
