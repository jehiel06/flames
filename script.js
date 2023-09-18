function buttonClick()
{
    let yourname=document.getElementById('yname').value.replace(/\s/g,"");;
    let partnername=document.getElementById('pname').value.replace(/\s/g,"");;
    let flame=findFlame(yourname,partnername);
    
    document.getElementById('view').innerHTML=flame[1]+" This is Just for F U N ! ! ! Have a nice time..";
}
function findFlame(n1,n2)
{
    let arn1=n1.split('');
    let arn2=n2.split('');
    let finalVal=0;

    if(arn1.length>arn2.length )
    {
       finalVal=FinalLetter(arn1,arn2);
    }
    else
    {
        finalVal=FinalLetter(arn2,arn1);
    }
    return getFlame(finalVal);
}
function FinalLetter(arr1,arr2,copyarr=[...arr1])
{
    for(let i=0;i<arr1.length;i++)
    {
        const index1=arr2.indexOf(arr1[i]);
        const index2=copyarr.indexOf(arr1[i]);

        if(index2 >=0 && index1>=0)
        {
            copyarr.splice(index2,1);
            arr2.splice(index1,1);
        }
    }
    let FinalWord=copyarr.concat(arr2);
    return FinalWord.length
}

function getFlame(diff)
{
    const FLAMES={
        0:['F','Friends!'],
        1:['L','Lover!'],
        2:['A','Affection!'],
        3:['M','Marriage!'],
        4:['E','Enemies!'],
        5:['S','Siblings!']
} ;
let mod_diff=diff%6;
console.log();
return FLAMES[mod_diff];
}

