import React from 'react';
import {Button, Input, Wrapper} from '../helper/StyleUtil';
import axios from 'axios';

const InputWithLabel = ({label, ...inputInfo}) => (
    <div>
        <label>{label}</label>
        <Input {...inputInfo} />
    </div>
);

class EmailAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmCode: ''
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        e.preventDefault();
    }

    handleClick = async e => {
        e.preventDefault();

        let code = this.state.confirmCode;

        await axios.post("/ssuzalal/authMember.do", {
            code
        }).then(response => {
            console.log(response.data);
           if(!response.data.result) {
               if(response.data.msg !== "code") {
                   alert(response.data.msg);
               }
           } else {
               alert("메일 인증 확인 완료. 어서오십시오.");
               this.props.history.push("/ssuzalal/home");
           }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <Wrapper>
                <h1>이메일 확인 코드를 입력해주세요.</h1>
                <InputWithLabel label="이메일 확인 코드" name="confirmCode" placeholder="이메일 확인 코드 입력" value={this.state.confirmCode} onChange={this.handleChange}/>
                <Button onClick={this.handleClick}>확인</Button>
            </Wrapper>
        );
    }
}

export default EmailAuth;