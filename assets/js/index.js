import CalculatorView from './CalculatorView.js'

window.onload = (event) => {
	window.calculatorObject = new CalculatorView
	calculatorObject.updateScreen(0)
}
