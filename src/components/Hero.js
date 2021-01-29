import React from "react";

import styled from "styled-components";

const HeroContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    /* background: pink; */
    div {
        padding: 20px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h3 {
            color: black;
            margin: 10;
        }

        button {
            border: none;
            outline: none;
            /* width: 100%; */
            padding: 15px;
            color: black;
            font-size: 1rem;
            letter-spacing: 1px;
            background: rgb(59, 201, 219, 0.3);
            border: 1px solid #22b8cf;
            cursor: pointer;
        }
    }
`;

const Hero = ({ handleLogOut }) => {
    return (
        <HeroContainer>
            <div>
                <h3>로그인 성공!</h3>
                <button onClick={handleLogOut}>로그아웃하기</button>
            </div>
        </HeroContainer>
    );
};

export default Hero;
