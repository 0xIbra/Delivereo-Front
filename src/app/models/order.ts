import { DecimalPipe } from '@angular/common';
import { Address } from './address';
import { User } from './user';
import { OrderMenu } from './order-menu';

export class Order {
    private id: number;
    private order_number: string;
    private ordered_at: Date;
    private total_price: number;
    private delivery_address: Address;
    private consumer: User;
    private items: OrderMenu[];

    constructor(order: any) {
        this.items = new Array<OrderMenu>()

        if (order.id !== undefined) {
            this.id = order.id;
        }

        this.order_number = order.order_number;
        this.ordered_at = new Date(order.ordered_at);
        this.total_price = order.total_price;
        this.delivery_address = new Address(order.delivery_address);
        if (order.consumer !== undefined) {
            this.consumer = order.consumer;
        }
        if (order.items.length > 0) {
            order.items.forEach(item => {
                this.items.push(new OrderMenu(item));
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
     * Getter $order_number
     * @return {string}
     */
	public get $order_number(): string {
		return this.order_number;
	}

    /**
     * Getter $ordered_at
     * @return {Date}
     */
	public get $ordered_at(): Date {
		return this.ordered_at;
	}

    /**
     * Getter $total_price
     * @return {number}
     */
	public get $total_price(): number {
		return this.total_price;
	}

    /**
     * Getter $delivery_address
     * @return {Address}
     */
	public get $delivery_address(): Address {
		return this.delivery_address;
	}

    /**
     * Getter $consumer
     * @return {User}
     */
	public get $consumer(): User {
		return this.consumer;
	}

    /**
     * Getter $items
     * @return {Array<OrderMenu>}
     */
	public get $items(): Array<OrderMenu> {
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
     * Setter $order_number
     * @param {string} value
     */
	public set $order_number(value: string) {
		this.order_number = value;
	}

    /**
     * Setter $ordered_at
     * @param {Date} value
     */
	public set $ordered_at(value: Date) {
		this.ordered_at = value;
	}

    /**
     * Setter $total_price
     * @param {number} value
     */
	public set $total_price(value: number) {
		this.total_price = value;
	}

    /**
     * Setter $delivery_address
     * @param {Address} value
     */
	public set $delivery_address(value: Address) {
		this.delivery_address = value;
	}

    /**
     * Setter $consumer
     * @param {User} value
     */
	public set $consumer(value: User) {
		this.consumer = value;
	}

    /**
     * Setter $items
     * @param {Array<OrderMenu>} value
     */
	public set $items(value: Array<OrderMenu>) {
		this.items = value;
	}

    

}
