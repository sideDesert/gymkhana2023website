import { atom } from "nanostores";

let initial = "academic";

export const council = atom(initial);

export function changeCouncil(string) {
  council.set(string);
  console.log(council.get());
}

export function logCouncil() {
  console.log(council.get());
}
