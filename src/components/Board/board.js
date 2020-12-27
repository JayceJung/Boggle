import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import './board.css';

export default function Board(props) {
    console.log('Board Array: ', props.array);
  return (
    <Table responsive id={(props.gameStatus=='init' || props.gameStatus=='done') ? "blurredTable" : "tableWrap"}>
      <tbody>
        <tr>
          <td className="table">{props.array[0]}</td>
          <td className="table">{props.array[1]}</td>
          <td className="table">{props.array[2]}</td>
          <td className="table">{props.array[3]}</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td className="table">{props.array[4]}</td>
          <td className="table">{props.array[5]}</td>
          <td className="table">{props.array[6]}</td>
          <td className="table">{props.array[7]}</td>
        </tr>
        <tr>
          <td className="table">{props.array[8]}</td>
          <td className="table">{props.array[9]}</td>
          <td className="table">{props.array[10]}</td>
          <td className="table">{props.array[11]}</td>
        </tr>
        <tr>
          <td className="table">{props.array[12]}</td>
          <td className="table">{props.array[13]}</td>
          <td className="table">{props.array[14]}</td>
          <td className="table">{props.array[15]}</td>
        </tr>
      </tbody>
    </Table>
  );
}
