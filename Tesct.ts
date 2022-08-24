export function reverseWords(str: string): string {
  const data = []
  let resp = ''
for (let index = str.length -1; index >= 0; index--) {
  resp = resp + str[index];
}
return resp;
}

console.log(reverseWords('Marlon Cano'));







