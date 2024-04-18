let mnozinaA = new Set([1, 2, 3, 4, 5]);
let mnozinaB = new Set([4, 5, 6, 7, 8]);
let mnozinaC = new Set([3, 4, 5]);

let prunik = new Set([...mnozinaA].filter(x => mnozinaC.has(x)));
console.log("Průnik množiny A a množiny C: " + [...prunik]);

let sjednoceni = new Set([...mnozinaA, ...mnozinaB]);
console.log("Sjednocení množiny A a množiny B: " + [...sjednoceni]);

let doplnek = new Set([...mnozinaB].filter(x => !mnozinaA.has(x)));
console.log("Doplněk množiny A vzhledem k množině B: " + [...doplnek]);