import { Menu } from './menu';

export class OrderMenu {
    private id: number;
    
    private menu: Menu;
    private quantity: number;



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
     * @return {number}
     */
	public get $quantity(): number {
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
     * @param {number} value
     */
	public set $quantity(value: number) {
		this.quantity = value;
	}
    
}
