import React from 'react';
import {Wrapper, Input, Button, Form, ButtonWrapper} from "../helper/StyleUtil";
import Select from "react-select";
import axios from 'axios';
import styled from "styled-components";

const REGISTER_PAGE = "/ssuzalal/register.do";
const passwordRegEx = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\\d~!@#$%^&*()+|=]{8,16}$";

const InputWithLabel = ({label, ...inputInfo}) => (
    <div>
        <label>{label}</label>
        <Input {...inputInfo} />
    </div>
);

const RegisterButton = ({onClick}) => (
    <Button onClick={onClick}>회원가입</Button>
);

const PwConfirmPTag = styled.p`
    font-size: 10px;
    color: red;
`

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
            passwordConfirm: '',
            email: '',
            username: '',
            major: '',
            doubleMajor: '',
            minor: '',
            grade: '',
            memberType: '',
            confirmMsg: ''
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        e.preventDefault();
    }

    handleRegisterClick = e => {
        e.preventDefault();

        const {id, password, passwordConfirm, email, username, major, doubleMajor, minor, grade, memberType} = this.state;
        if(!passwordRegEx.test(passwordConfirm)) {
            alert("비밀번호는 문자, 숫자, 특수문자를 각각 적어도 하나 포함해야합니다.");
            return ;
        }

        let memberTypeInt = memberType === '학생' ? 2 : 3;

        axios(
            {
                url: REGISTER_PAGE,
                data: {
                    id: id,
                    password: password,
                    email: email,
                    username: username,
                    major: major,
                    minor: minor,
                    grade: grade,
                    memberType: parseInt(memberType)
                },
                method: 'post',
                baseURL: 'http://localhost:8080'
            }
        );
    }

    handleLoginClick = e => {
        e.preventDefault();

        this.props.history.push("/ssuzalal/login");
    }

    handleConfirmChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });

        if(this.state.password !== e.target.value) {
            this.setState({
                confirmMsg: "비밀번호가 일치하지 않습니다."
            });
        } else {
            this.setState({
                confirmMsg: "비밀번호가 일치합니다."
            });
        }
        e.preventDefault();
    }

    handleOptionChange = (selected, actionMeta) => {
        this.setState({
            [actionMeta.name] : selected.value
        });
    }

    render() {
        const majorOptions = [
            {value: "경영학부", label: "경영학부"},
            {value: "경제학과", label: "경제학과"},
            {value: "벤처중소기업학과", label: "벤처중소기업학과"},
            {value: "금융학과", label: "금융학과"},
            {value: "컴퓨터학부", label: "컴퓨터학부"},
            {value: "소프트웨어학과", label: "소프트웨어학과"},
            {value: "기계공학과", label: "기계공학과"},
            {value: "NOOP", label: "선택안함"}
        ];

        const memberTypeOptions = [
            {value: "학생", label: "학생"},
            {value: "교직원", label: "교직원"}
        ];

        return (
            <Wrapper>
                <Form>
                    <h1>로그인 화면</h1>
                    <InputWithLabel label='아이디' type='text' name='id' value={this.state.id} onChange={this.handleChange} placeholder='아이디 입력'/>
                    <InputWithLabel label='비밀번호' type='password' name='password' value={this.state.password} onChange={this.handleChange} placeholder='비밀번호 입력' />
                    <InputWithLabel label='비밀번호 확인' type='password' name='passwordConfirm' value={this.state.passwordConfirm} onChange={this.handleConfirmChange} tabIndex="0" placeholder='비밀번호 재입력' />
                    <PwConfirmPTag>{this.state.confirmMsg}</PwConfirmPTag>
                    <InputWithLabel label='이메일' type='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='이메일 입력' />
                    <InputWithLabel label='이름' type='text' name='username' value={this.state.username} onChange={this.handleChange} placeholder='이름 입력' />
                    <div>학과 선택</div>
                    <Select options={majorOptions} name='major' onChange={this.handleOptionChange} placeholder="전공"/>
                    <div>복수전공 선택</div>
                    <Select options={majorOptions} name='doubleMajor' onChange={this.handleOptionChange} placeholder="복수전공"/>
                    <div>부전공 선택</div>
                    <Select options={majorOptions} name='minor' onChange={this.handleOptionChange} placeholder="부전공"/>
                    <InputWithLabel label='학년' type='text' name='grade' value={this.state.grade} onChange={this.handleChange} placeholder='학년 입력'/>
                    <Select options={memberTypeOptions} name='memberType' value={this.state.memberType} onChange={this.handleOptionChange} placeholder="학생/교직원 선택"/>
                    <ButtonWrapper>
                        <Button onClick={this.handleLoginClick}>로그인하기</Button>
                        <RegisterButton onClick={this.handleRegisterClick} />
                    </ButtonWrapper>
                </Form>
            </Wrapper>

        );
    }
}

export default Register;