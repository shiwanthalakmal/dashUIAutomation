import {FrameworkException} from './FrameworkException';

export class ElementNotFoundException extends FrameworkException{

    constructor(message: string){
        super(message);
    }

}

