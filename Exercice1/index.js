const pairNumbers =(min, max)=> {
    const result=[]
    for (let cpt=min; cpt<max+1; cpt++)
    {
        if(cpt%2===0){ result.push(cpt) }
    }
return result.join(",")
}

export default pairNumbers
