import React, { Component } from "react"
import Student from "./Student"

export default class Roster extends Component {
  render() {
    const studentComponents = this.props.students.map((studentData) => {
      return <Student student={studentData} />
    })
    return <>{studentComponents}</>
  }
}
