/* eslint-disable */

// Tipos básicos
let nome: string = 'Maria';
let idade: number = 18; // 10, 1.05, -55.5, hexadecimal, binário, octal
let adulto: boolean = true;
let simbolo: symbol = Symbol('any-symbol');
// let big: bigint = 10n;

// Arrays
let arrayNumber: Array<number> = [1, 2, 3];
let arrayString: Array<string> = ['a', 'b'];
let arrayS: string[] = ['a', 'b'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean } = {
  idade: 18,
  nome: 'Maria'
}
