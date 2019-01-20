import { CartItem } from './cart-item';

export class Cart {
    private id: number;

    private items: Array<CartItem>;


    constructor(cart: any) {
        this.items = new Array<CartItem>();
        this.id = cart.id;
        if (cart.items.length > 0) {
            cart.items.forEach(item => {
                this.items.push(new CartItem(item));
            });
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
     * Getter $items
     * @return {Array<CartItem>}
     */
	public get $items(): Array<CartItem> {
		return this.items;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $items
     * @param {Array<CartItem>} value
     */
	public set $items(value: Array<CartItem>) {
		this.items = value;
	}

}
