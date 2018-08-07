import React, { Component } from 'react';

class PhoneForm extends Component {

    id = 0;

    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); // 기본적으로 form 은 submit 할때 리로드 시킨다 그걸 막는다.
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name='name'
                    placeholder='이름' 
                    onChange={this.handleChange} 
                    value={this.state.name}/>
                <input 
                    name='phone'
                    placeholder='전화번호' 
                    onChange={this.handleChange}
                    value={this.state.phone}/>
                <button type='submit'>등록</button>
                {/* <div>
                    {this.state.name} {this.state.phone}
                </div> */}
            </form>
        );
    }
}

export default PhoneForm;