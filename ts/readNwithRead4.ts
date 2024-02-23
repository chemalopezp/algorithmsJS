/**
 * Definition for read4()
 * read4 = function(buf4: string[]): number {
 *     ...
 * };
 */

var solution = function (read4: any) {
  return function (buf: string[], n: number): number {
    let i = 0;
    while (i <= n) {
      let buf4: string[] = [];
      const j = read4(buf4);
      if (j === 0) {
        break;
      } else {
        buf.push(...buf4.slice(0, n - i));
        i += j;
      }
    }
    return i;
  };
};
