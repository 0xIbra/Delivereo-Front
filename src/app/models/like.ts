import { User } from './user';

export class Like {
    private id: number;
    private user: User;
    private likedAt: Date;




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
     * Getter $likedAt
     * @return {Date}
     */
	public get $likedAt(): Date {
		return this.likedAt;
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
     * Setter $likedAt
     * @param {Date} value
     */
	public set $likedAt(value: Date) {
		this.likedAt = value;
	}

}
