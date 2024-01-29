function mincost(arr)
{ 
let MinSum=0;
	arr.sort((a,b)=>a-b);
	
	while (arr.length>1) {
		let sum=arr[0]+arr[1];
		arr.shift();
		arr.shift();
		let i=0;
		while(arr[i]<sum){
            i++;
        }
       if(i==0){
           arr.unshift(sum);
       }
        else{
            arr.splice(i,0,sum);
        }
		
		//arr.sort((a,b)=>a-b);
	MinSum+=sum;
	}
	
	//console.log(MinSum);
	return MinSum;
}

module.exports=mincost;