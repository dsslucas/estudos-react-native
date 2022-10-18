import React, { Component } from 'react'
import Navigator from './src/Navigator'

export default class App extends Component {
  render() {
    const comments = [{
      nickname: 'joanabprudente',
      comment: 'Excelente foto!'
    }, {
      nickname: 'rafag1comp',
      comment: "Feio pra chuchu!"
    }, {
      nickname: "jpvalento",
      comment: '113 é o que liga'
    }]

    return (
      // <SafeAreaView style={{ flex: 1 }}>
      //   <Header />
      //   <Post
      //     image={require('./assets/imgs/fence.jpg')}
      //     comments={comments}
      //   />
      // </SafeAreaView>
      <Navigator />
    );
  }
}
