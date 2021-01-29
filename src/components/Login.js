import React from "react";
import styled from "styled-components";

const LoginWrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 0 20px;
    background: #e9e9e9;
    display: flex;

    .loginContainer {
        padding: 20px;
        margin: auto;
        width: 100%;
        max-width: 320px;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: white;

        /* border: 3px solid #22b8cf; */
        box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8);

        label {
            color: black;
            margin: 14px 0;
            display: block;
            font-size: 1rem;
            line-height: 1;
        }

        input {
            width: 100%;
            border: none;
            border-bottom: 0.5px solid grey;

            outline: none;
            font-size: 1rem;
            padding: 5px;

            background: rgba(255, 255, 255, 0.1);
            color: black;
            letter-spacing: 1px;
        }

        .btnContainer {
            width: 100%;
            padding: 24px 0;

            button {
                border: none;
                outline: none;
                width: 100%;
                padding: 15px 0;
                color: #1281b5;
                border: 2px solid #1281b5;
                font-size: 1.25rem;
                font-weight: 600;
                letter-spacing: 1px;
                background-color: white;
                cursor: pointer;
                transition: all 200ms ease-in-out;
                :hover {
                    color: rgb(18, 129, 181, 0.8);
                    border: 2px solid rgb(18, 129, 181, 0.8);
                }
            }

            p {
                margin: 14px 0 0 0;
                text-align: right;
                color: black;

                span {
                    color: black;
                    font-weight: 500;
                    /* font-style:  */
                    letter-spacing: 0.5px;
                    margin-left: 5px;
                    cursor: pointer;
                    transition: all 400ms ease-in-out;
                    text-decoration: underline;
                    :hover {
                        color: red;
                        text-decoration: none;
                    }
                }
            }
        }

        .errorMsg {
            color: red;
            font-size: 0.8rem;
        }
    }
`;

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;
    return (
        <LoginWrapper>
            <div className="loginContainer">
                <label>아이디</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <p className="errorMsg">{emailError}</p>
                <label>비밀번호</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>로그인하기</button>
                            <p>
                                계정이 없으신가요?{" "}
                                <span
                                    onClick={() => setHasAccount(!hasAccount)}
                                >
                                    회원가입하기
                                </span>
                            </p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignUp}>회원가입하기</button>
                            <p>
                                계정이 있으신가요?{" "}
                                <span
                                    onClick={() => setHasAccount(!hasAccount)}
                                >
                                    로그인하기
                                </span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </LoginWrapper>
    );
};

export default Login;
