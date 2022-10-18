window.onload = (event) => {

}

function parseString(str){
	let eval = new Function(`return ${str}`)
	return eval()
}

