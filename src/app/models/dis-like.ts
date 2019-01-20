
export class DisLike {
    private id: number;
    private disliked_at: Date;


    constructor(dislike: any) {
        this.id = dislike.id;
        this.disliked_at = dislike.disliked_at;
    }




    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}


    /**
     * Getter $disliked_at
     * @return {Date}
     */
	public get $disliked_at(): Date {
		return this.disliked_at;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}


    /**
     * Setter $disliked_at
     * @param {Date} value
     */
	public set $disliked_at(value: Date) {
		this.disliked_at = value;
	}
    


}
