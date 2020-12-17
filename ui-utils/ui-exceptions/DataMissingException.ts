import {FrameworkException} from './FrameworkException';

export class DataMissingException extends FrameworkException{

    constructor(message: string){
        super(message);
    }

}
