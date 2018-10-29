import React, { Component } from "react";
import Button from "./Button";

class Buttons extends Component {
  render() {
    const { onReset, onBackspace, onNumberInput, onSymbol } = this.props;

    return (
      <React.Fragment>
        <Button key="ce" onBtnClick={onReset}>
          CE
        </Button>
        <Button key="c" onBtnClick={onReset}>
          C
        </Button>
        <Button key="del" onBtnClick={onBackspace}>
          DEL
        </Button>
        <Button key="/" onBtnClick={() => onSymbol("/")}>
          /
        </Button>
        <Button key="7" onBtnClick={() => onNumberInput(7)}>
          7
        </Button>
        <Button key="8" onBtnClick={() => onNumberInput(8)}>
          8
        </Button>
        <Button key="9" onBtnClick={() => onNumberInput(9)}>
          9
        </Button>
        <Button key="x" onBtnClick={() => onSymbol("x")}>
          x
        </Button>
        <Button key="4" onBtnClick={() => onNumberInput(4)}>
          4
        </Button>
        <Button key="5" onBtnClick={() => onNumberInput(5)}>
          5
        </Button>
        <Button key="6" onBtnClick={() => onNumberInput(6)}>
          6
        </Button>
        <Button key="-" onBtnClick={() => onSymbol("-")}>
          -
        </Button>
        <Button key="1" onBtnClick={() => onNumberInput(1)}>
          1
        </Button>
        <Button key="2" onBtnClick={() => onNumberInput(2)}>
          2
        </Button>
        <Button key="3" onBtnClick={() => onNumberInput(3)}>
          3
        </Button>
        <Button key="+" onBtnClick={() => onSymbol("+")}>
          +
        </Button>
        <Button key="neg" onBtnClick={() => onSymbol("neg")}>
          +/-
        </Button>
        <Button key="0" onBtnClick={() => onNumberInput(0)}>
          0
        </Button>
        <Button key="." onBtnClick={() => onSymbol(".")}>
          .
        </Button>
        <Button key="=" onBtnClick={() => onSymbol("=")}>
          =
        </Button>
      </React.Fragment>
    );
  }
}

export default Buttons;
