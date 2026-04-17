function searchWord(word,x,y) {
	let k = true;
	for (let i in word) {
		k = k && getCharInfoXY(x+Number(i),y).char == word[i]
	}
	return k
}
setInterval(_=>{for (let i = -100; i < 100; i++) {
	for (let j = -50; j < 50; j++) {
		if (searchWord("PKK",i,j)) {
			for (let k = 0; i < 3; i++) {
				writeCharToXY(" ",0,i,j);
			}
			break
		}
	}
}},100)
