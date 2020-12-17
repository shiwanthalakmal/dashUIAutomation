import {FrameworkException} from './FrameworkException';

export class ScriptException extends FrameworkException{

    constructor(message: string){
        super(message);
    }

}