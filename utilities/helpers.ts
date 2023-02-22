export function ellipse(str:string) {
    const spreadOut = str.split('.');
    
    if(str.length < 11){
        return str
    }
        return spreadOut[0];
    // return spreadOut[0].join('');
}