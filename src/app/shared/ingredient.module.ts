// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }

/*
Angular has a shortcut for creating the model above.
Simply create a constructor and add accessor where we add params.
*/
export class Ingredient {
    constructor(public name: string, public amount: number) {}
}