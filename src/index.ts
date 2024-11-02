import { from, Observable } from "rxjs";

let numbers = [1,5,10];
let source = from(numbers);

let sourceInstace = new Observable<number>((subscriber) => {
  for (let n of numbers) {
    subscriber.next(n)
  }
  subscriber.complete()
})

const myOberverJson = {
  next: (x: number) => console.log(x),
  error: (err: Error) => console.error(err),
  complete: () => console.log('complete') 
}

function component() {
  sourceInstace.subscribe(myOberverJson)
}

component()