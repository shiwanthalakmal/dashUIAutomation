export class FrameworkException extends Error {

    constructor(message: string){
        super(message);
        this.stack = (new Error()).stack;
        //this.name = this.constructor.name;
    }

}
