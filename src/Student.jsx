import React, { Component } from "react"
import Score from "./Score"

export default class Student extends Component {
  render() {
    const scoreComponents = this.props.student.scores.map((scoreData) => {
      return <Score score={scoreData} />
    })
    return (
      <>
        <h1>{this.props.student.name}</h1>
        <p>{this.props.student.bio}</p>
        {scoreComponents}
      </>
    )
  }
}
