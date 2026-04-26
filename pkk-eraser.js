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
			if (searchWord("PKK",i,j)
			   ||searchWord("PKP",i,j)
			   ||searchWord("PPKK",i,j)
			   ||searchWord("PKKK",i,j)
			   ||searchWord("KKK",i,j)
			   ||searchWord("KTB",i,j)
			   ||searchWord("KKT",i,j)
			   ||searchWord("BTB",i,j)
			   ||searchWord("BKB",i,j)
			   ||searchWord("TBB",i,j)
			   ||searchWord("█",i,j)) {
				for (let k = 0; k < 5; k++) {
					writeCharToXY(" ",0,i+k,j);
				}
			}
		}
	};
},500)
