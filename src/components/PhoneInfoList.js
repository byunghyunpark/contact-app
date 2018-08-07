import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    }  // data 없는 에러 막기

    render() {        
        const { data } = this.props;
        // if (!data) return null;  // data 없는 에러 막기

        const list = data.map(
            info => (<PhoneInfo info={info} key={info.id}/>)
        )
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;