const fs = require('fs');
export const readNumberArray = (path : string) : number[] => {
    return fs.readFileSync(path, 'UTF-8').split(/\n/).map((s: string) => Number(s))
}