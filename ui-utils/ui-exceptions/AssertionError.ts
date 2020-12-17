import {FrameworkException} from './FrameworkException';

export class AssertionError extends FrameworkException{

    constructor(message: string){
        super(message);
    }

}
