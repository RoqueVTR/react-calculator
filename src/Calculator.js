import React, { Component } from "react";
import "./Calculator.css";
import Screen from "./components/Screen";
import Buttons from "./components/Buttons";

class Calculator extends Component {
  state = {
    formula: "0",
    oldNumber: 0,
    newNumber: "0"
  };

  handleReset = () => {
    this.setState({ oldNumber: 0, newNumber: "0", formula: "0" });
  };

  handleBackspace = () => {
    console.log("backspace");
  };

  handleSymbol = symbol => {
    let formula = this.state.formula;
    let getExistingSymbol = formula.replace(/[^x[+-/]/g, "");
    let oldNumber =
      getExistingSymbol === ""
        ? this.state.oldNumber
        : formula.split(getExistingSymbol)[0];
    let newNumber =
      getExistingSymbol === ""
        ? this.state.newNumber
        : formula.split(getExistingSymbol)[1];

    console.log(
      "op: " + getExistingSymbol,
      "old: " + oldNumber,
      "new: " + newNumber
    );

    oldNumber = parseInt(oldNumber);
    newNumber = parseInt(newNumber);
    switch (getExistingSymbol) {
      case "+":
        newNumber = newNumber + oldNumber;
        break;
      case "-":
        newNumber = oldNumber - newNumber;
        console.log(newNumber, oldNumber);
        break;
      case "x":
        newNumber = newNumber * oldNumber;
        break;
      case "/":
        newNumber = oldNumber / newNumber;
        break;
      default:
        break;
    }

    if (symbol == "=") {
      formula = "" + newNumber;
    } else if (getExistingSymbol) {
      formula = oldNumber + symbol;
    } else {
      formula = newNumber + symbol;
    }

    document.getElementById("screen-formula").style.visibility = "visible";

    this.setState({ formula, oldNumber: oldNumber, newNumber: newNumber });
    console.log({ formula, oldNumber: oldNumber, newNumber: newNumber });
  };

  handleNumberInput = number => {
    let newNumber = this.state.newNumber;
    let input = "" + number;
    let formula = this.state.formula;
    let numRegex = new RegExp(/^\d+$/);

    if (newNumber === "0") {
      newNumber = input;
    } else if (numRegex.test(formula.charAt(formula.length - 1))) {
      newNumber += input;
      formula += input;
    } else {
      newNumber = "";
      newNumber += input;
      formula += input;
    }

    this.setState({ formula, newNumber: newNumber });
    // console.log({ newNumber: newNumber });
  };

  render() {
    return (
      <div className="calculator">
        <div className="calculator-header">React Calculator</div>
        <main className="container">
          <div className="calculator-body">
            <Screen
              number={this.state.newNumber}
              formula={this.state.formula}
            />
            <Buttons
              onReset={this.handleReset}
              onBackspace={this.handleBackspace}
              onSymbol={this.handleSymbol}
              onNumberInput={this.handleNumberInput}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Calculator;
