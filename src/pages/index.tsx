import React, { Component } from "react"
import tw from "twin.macro"
import Layout from "../components/layout"

const Title = tw.h1`
  text-blue-600 text-4xl my-6
`

export default class IndexPage extends Component {
  public render() {
    return (
      <Layout>
        <Title>Hello World!</Title>
      </Layout>
    )
  }
}
