import React from "react";
import NewsList from "../components/NewsList";

const NewsPages = ({ match }) => {
    // 카테고리가 선택되지 않았으면 기본값 all로 사용
    const category = match.params.category || "all";
    return <NewsList category={category} />;
};

export default NewsPages;
