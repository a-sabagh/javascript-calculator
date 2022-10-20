window.number = 0
window.operator = ''
window.list = ''

window.onload = (event) => {
	updateScreen(window.number)
}

function updateScreen(content){
	document.getElementById('screen').innerHTML = content
}

function parseString(str){
	let eval = new Function(`return ${str}`)
	return eval()
}

function handleNumber(event){
	event.preventDefault()
	let currentNumber = parseInt(event.target.getAttribute('data-number'))
	window.number = Number(`${window.number}${currentNumber}`)
	updateScreen(window.number)
	if(window.number.toString().length == 1 && window.operator.length > 0){
		window.list = `${window.list}${window.operator}`
	}
	console.log(window.list)
}

function handleOperator(event){
	event.preventDefault()
	let operator = event.target.getAttribute('data-operator')
	window.operator = operator
	if(window.number){
		window.list = `(${window.list}${number})`
	}
	window.number = 0
	updateScreen(parseString(window.list))
}

function handleEqual(event){
	event.preventDefault()
	if(window.number){
		window.list = `(${window.list}${number})`
	}
	console.log(window.list)
	updateScreen(parseString(window.list))
	window.number = 0
}

function allClear(event){
	event.preventDefault()
	window.list = ''
	clearCurrent(event)
}

function clearCurrent(event){
	event.preventDefault()
	window.number = 0
	window.operator = ''
	updateScreen(window.number)
}

function handleFloat(event){
	event.preventDefault()
	window.number = `${window.number}.`
	updateScreen(window.number)
}
