import React from 'react';
import {Wrapper, Input, Button, Form, ButtonWrapper} from "../helper/StyleUtil";
import {Link} from "react-router-dom";
import LoginButton from "../button/LoginButton";

const InputWithLabel = ({label, ...inputInfo}) => (
    <div>
        <label>{label}</label>
        <Input {...inputInfo} />
    </div>
);

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        e.preventDefault();
    }

    render() {
        return (
            <Wrapper>
                <Form>
                    <h1>로그인 화면</h1>
                    <InputWithLabel label='아이디' type='text' name='id' value={this.state.id} onChange={this.handleChange} placeholder='아이디 입력'/>
                    <InputWithLabel label='비밀번호' type='password' name='password' value={this.state.password} onChange={this.handleChange} placeholder='비밀번호 입력' />
                    <ButtonWrapper>
                        <Link to="/ssuzalal/register">
                            <Button>회원가입</Button>
                        </Link>
                        <LoginButton history={this.props.history} id={this.state.id} password={this.state.password}/>
                    </ButtonWrapper>
                </Form>
            </Wrapper>

        );
    }
}

export default Login;