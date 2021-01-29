import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

import Categories from "./Categories";

const HeaderBlock = styled.div`
    display: flex;
    /* padding: 1rem; */
    justify-content: space-between;
    align-items: center;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const LoginBlock = styled(NavLink)`
    font-size: 1.125rem;
    padding-bottom: 0.25rem;
    justify-content: center;
    align-items: center;
    text-align: center;

    text-decoration: none;
    color: inherit;
    margin: 1rem;

    border-bottom: 1px solid transparent;
    width: 50px;
    cursor: pointer;
    &:hover {
        color: #1687a7;
        border-bottom: 2px solid #1687a7;
    }
    &.active {
        font-weight: 600;
        border-bottom: 2px solid #1687a7;
        color: #1687a7;
        &:hover {
            color: #3bc9db;
        }
    }
    @media screen and (max-width: 768px) {
        width: 50px;
        overflow-x: auto;
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <Categories></Categories>
            <LoginBlock to={"/login"}>로그인</LoginBlock>
        </HeaderBlock>
    );
};

export default Header;
