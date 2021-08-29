////Первый вариант
console.log('Первый вариант');

  function max(arr){
  let max = arr[0];
  for(let i=1; i<arr.length; i++){
    if(arr[i] > max){
      max = arr[i];   
    }
   }
 return max;
 }



let result1 = max([5,11,4,7,0,21,57]);

console.log('varResult1 -->', result1);

console.log('max', max([1, 8, 37, 5, 17]));

/////Второй вариант
console.log('Второй вариант');

function max(numArray) 
{
    var nums = numArray.slice();
	if (nums.length == 1) { return nums[0]; }
    if (nums[0] < nums[1]) { nums.splice(0,1); }
    else { nums.splice(1,1); }
    return max(nums);
}

console.log('max', max([1, 8, 37, 5, 17]));

console.log('max', max([111, 8, 37, 5, 17]));