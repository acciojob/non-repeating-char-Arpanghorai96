function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0;i<str.length;i++)
		{
			let count=0;
			for(let y=0;y<str.length;y++)
				{
					if(str[i]==str[y])
						count++;
				}
			if (count<2) {
				return str[i];
			}
		}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
