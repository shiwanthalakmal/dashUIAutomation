
import {FrameworkException} from './FrameworkException';

export class ApplicationException extends FrameworkException{

    constructor(message: string){
        super(message);
    }

}
