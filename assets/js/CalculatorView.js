import CalculatorLogic from './CalculatorLogic.js'

export default class CalculatorView {

	#number
	#operator
	#list
	#calculatorLogic
	
	constructor(){
		this.#number = 0
		this.#operator = ''
		this.#list = ''
		this.calculatorLogic = new CalculatorLogic
	}

	updateScreen(content){
		document.getElementById('screen').innerHTML = content
	}
	
	handleNumber(event){
		event.preventDefault()
		let currentNumber = parseInt(event.target.getAttribute('data-number'))
		this.#number = Number(`${this.#number}${currentNumber}`)
		this.updateScreen(this.#number)
		if(this.#number.toString().length == 1 && this.#operator.length > 0){
			this.#list = `${this.#list}${this.#operator}`
		}
		console.log(this.#list)
	}


	handleOperator(event){
		event.preventDefault()
		let operator = event.target.getAttribute('data-operator')
		this.#operator = operator
		if(this.#number){
			this.#list = `(${this.#list}${this.#number})`
		}
		this.#number = 0
		this.updateScreen(this.calculatorLogic.parseString(this.#list))
	}

	handleEqual(event){
		event.preventDefault()
		if(this.#number){
			this.#list = `(${this.#list}${this.#number})`
		}
		console.log(this.#list)
		this.updateScreen(this.calculatorLogic.parseString(this.#list))
		this.#number = 0
	}

	allClear(event){
		event.preventDefault()
		this.#list = ''
		this.clearCurrent(event)
	}

	clearCurrent(event){
		event.preventDefault()
		this.#number = 0
		this.#operator = ''
		this.updateScreen(this.#number)
	}

	handleFloat(event){
		event.preventDefault()
		this.#number = `${this.#number}.`
		this.updateScreen(this.#number)
	}

}
