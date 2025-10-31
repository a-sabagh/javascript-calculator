export default class CalculatorLogic {

	parseString(str){
		let e = eval
		return e(`${str}`)
	}

}
