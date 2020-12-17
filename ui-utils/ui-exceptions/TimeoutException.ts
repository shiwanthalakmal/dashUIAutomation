import {FrameworkException} from './FrameworkException';

export class TimeoutException extends FrameworkException{

    constructor(message: string){
        super(message);
    }

}
