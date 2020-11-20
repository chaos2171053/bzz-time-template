import { Memento } from "vscode";
// https://www.chrishasz.com/blog/2020/07/28/vscode-how-to-use-local-storage-api/

export class LocalStorageService {
    
    constructor(private storage: Memento) { }   
    
    public getValue<T>(key : string) : T | undefined{
        return this.storage.get<T>(key);
    }

    public setValue<T>(key : string, value : T):Thenable<void>{
        return this.storage.update(key, value);
    }
}