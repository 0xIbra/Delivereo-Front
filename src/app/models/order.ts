import { DecimalPipe } from '@angular/common';
import { Address } from './address';
import { User } from './user';
import { OrderMenu } from './order-menu';

export class Order {
    private id: number;
    private orderNumber: string;
    private orderedAt: Date;
    private totalPrice: number;
    private deliveryAddress: Address;
    private consumer: User;
    private items: Array<OrderMenu>;




    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $orderNumber
     * @return {string}
     */
	public get $orderNumber(): string {
		return this.orderNumber;
	}

    /**
     * Getter $orderedAt
     * @return {Date}
     */
	public get $orderedAt(): Date {
		return this.orderedAt;
	}

    /**
     * Getter $totalPrice
     * @return {number }
     */
	public get $totalPrice(): number  {
		return this.totalPrice;
	}

    /**
     * Getter $deliveryAddress
     * @return {Address}
     */
	public get $deliveryAddress(): Address {
		return this.deliveryAddress;
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
     * Setter $orderNumber
     * @param {string} value
     */
	public set $orderNumber(value: string) {
		this.orderNumber = value;
	}

    /**
     * Setter $orderedAt
     * @param {Date} value
     */
	public set $orderedAt(value: Date) {
		this.orderedAt = value;
	}

    /**
     * Setter $totalPrice
     * @param {number } value
     */
	public set $totalPrice(value: number ) {
		this.totalPrice = value;
	}

    /**
     * Setter $deliveryAddress
     * @param {Address} value
     */
	public set $deliveryAddress(value: Address) {
		this.deliveryAddress = value;
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
