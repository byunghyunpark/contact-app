import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';

class App extends Component {

  id = 0;

  state = {
    information: []
  }

  handleCreate = (data) => {
    const { information } = this.state  // 비구조 할당 문법
    
    // this.setState({
    //   information: information.concat({
    //     ...data,
    //     id: this.id++ // 아이디 증가
    //   })  // 리액트는 기존 배열을 변화시키면 안된다. concat함수로 새로운 배열을 생성해라. puch() 사용안함
    // });

    this.setState({
      information: information.concat(Object.assign({}, data, { id: this.id++ }))  // Object.assign 활용하는 방법 
    });

  }

  render() {
    return (
        <div>
          <PhoneForm onCreate={this.handleCreate}/>
          {JSON.stringify(this.state.information)}
        </div>
    );
  }
}

export default App;
