import { Injectable } from "@angular/core";

@Injectable()
export class todoservice{
    items=["Angular","React"]
    pushItem(to){
        this.items.push(to);
    }
    removeitem(index){
        this.items.splice(index,1);
    }
    getlist()
    {
        return this.items
    }
}