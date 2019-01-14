import { User } from './user';

export class DisLike {
    private id: number;
    private user: User;
    private dislikedAt: Date;




    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $user
     * @return {User}
     */
	public get $user(): User {
		return this.user;
	}

    /**
     * Getter $dislikedAt
     * @return {Date}
     */
	public get $dislikedAt(): Date {
		return this.dislikedAt;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $user
     * @param {User} value
     */
	public set $user(value: User) {
		this.user = value;
	}

    /**
     * Setter $dislikedAt
     * @param {Date} value
     */
	public set $dislikedAt(value: Date) {
		this.dislikedAt = value;
	}

}
