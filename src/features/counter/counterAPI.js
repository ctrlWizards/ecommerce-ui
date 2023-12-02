import { BACKEND_URL } from "../../app/constants";

export function fetchCount(amount = 1) {
  return new Promise(async (resolve) =>{
    const response = await fetch(`${BACKEND_URL}`) 
    const data = await response.json()
    resolve({data})
  }
  );
}
