function searchWord(word,x,y) {
	let k = true;
	for (let i in word) {
		k = k && getCharInfoXY(x+Number(i),y).char == word[i]
	}
	return k
}
setInterval(_=>{
	for (let i = -100; i < 100; i++) {
		for (let j = -50; j < 50; j++) {
			if (searchWord("PASSWORD PLEASE",i,j)||searchWord("PASSWORD",i,j)||searchWord("YOUR PASSW",i,j)) {
				for (let k = 0; k < 13; k++) {
					writeCharToXY(" ",0,i+k,j);
				}
			}
		}
	};
},500)
