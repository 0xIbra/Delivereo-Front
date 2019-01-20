
export class Like {
    private id: number;
    private liked_at: Date;

    constructor(like: any) {
        this.id = like.id;
        this.liked_at = like.liked_at;
    }

    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $liked_at
     * @return {Date}
     */
	public get $liked_at(): Date {
		return this.liked_at;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}


    /**
     * Setter $liked_at
     * @param {Date} value
     */
	public set $liked_at(value: Date) {
		this.liked_at = value;
	}
    


}
