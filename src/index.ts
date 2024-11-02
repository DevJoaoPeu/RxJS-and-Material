import { filter, from, interval, map, Observable } from "rxjs";

let numbers = [1,5,10];
let source = from(numbers); // Cria uma instância do observable

let sourceInstace = new Observable<number>((subscriber) => { // Mesma coisa que o from, mas com a instância do observable
  for (let n of numbers) {
    subscriber.next(n)
  }
  subscriber.complete()
})

sourceInstace.pipe( // Passa pelo tubo, serve para fazer transformações
  map((x: number) => x * 2), // map mapeia od dados
).subscribe({
  next: (x: number) => console.log(`Map: ${x}`),
  error: (err: Error) => console.error(err),
  complete: () => console.log('complete') 
})

sourceInstace.pipe(
  filter((x: number) => x <= 5) // filter filtra os dados
).subscribe({
  next: (x: number) => console.log(`Filter: ${x}`),
  error: (err: Error) => console.error(err),
  complete: () => console.log('complete') 
})
