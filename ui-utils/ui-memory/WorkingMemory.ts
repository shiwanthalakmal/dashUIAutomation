import { TSMap } from "typescript-map"
import Promise = promise.Promise;
import {promise} from "selenium-webdriver";

export class WorkingMemory{

    private static instance : WorkingMemory = null;
    private memory :any;
    private memoryArray :any;

    constructor(){
        this.memoryArray = new TSMap<string,string[]>();
        this.memory = new TSMap<string,string>();
    }

    public static getInstance() : WorkingMemory{
        if(WorkingMemory.instance == null){
            WorkingMemory.instance = new WorkingMemory();
        }
        return WorkingMemory.instance;
    }

    public setMemory(key: string, value: string){
        this.memory.set(key,value);
    }

    public setPromiseMemory(key: string, value: Promise<string>){
        this.memory.set(key,value);
    }

    public getPromiseMemory(key: string, value: Promise<string>){
        return this.memory.get(key);
    }

    public setMemoryArray(key: string, value: string[]){
        this.memoryArray.set(key,value);
    }

    public getMemory(key: string) : string{
        return this.memory.get(key);
    }

    public getMemoryArray(key: string) : string[]{
        return this.memoryArray.get(key);
    }

}