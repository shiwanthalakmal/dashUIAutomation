import {FrameworkException} from './FrameworkException';

export class UnhandleException extends FrameworkException{

    constructor(message: string){
        super(message);
    }

}

