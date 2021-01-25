// API를 요청하고 뉴스 데이터가 들어 있는 배열을 컴포넌트 배열로 변환해 렌더링해 주는 컴포넌트
import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const sampleArticle = {
    title: "제목",
    description: "내용은 웅애웅",
    url: "https://google.com",
    urlToImage: "https://via.placeholder.com/160",
};

const NewsList = ({ category }) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === "all" ? "" : `&category=${category}`;
        return axios.get(
            `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0d175403f70e41d9808863e00af6f9fe`
        );
    }, [category]);

    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }
    // ! 아직 response 값이 설정되지 않았을 때
    if (!response) {
        // * 아직 데이터가 없을 때는 렌더링 과정에서 오류 발생(response가 null이므로)하므로 이 코드가 필요
        return null;
    }
    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>;
    }

    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article}></NewsItem>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
