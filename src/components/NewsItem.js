// 각 뉴스 정보를 보여 주는 컴포넌트
import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
    display: flex;
    /* 
        display flex는 
        1. <-> display block과 달리: line-height가 없고 여백을 조절해 줌
        2. <-> display inline-flex와 달리 해당 컴포넌트(여기선 NewItemBlock 자체)를 수직으로 쌓아 줌
    */
    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            /* display block은 line-height가 div height을 고정 */
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents {
        h2 {
            margin: 0;
            a {
                color: black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            // minmum height for inline-level elements and line boxes inside block level containers
            margin-top: 0.5rem;
            white-space: normal;
            // ? 이게 뭐임
        }
    }
    & + & {
        margin-top: 3rem;
    }
    /* flex-direction: "row"; */
`;

const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage } = article;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {/* 
                            href: 클릭시 이동되는 웹 주소,
                            target: 클릭시 창이 어떻게 열리는 지(_blank: 연결 문서를 새 창에서 엶)
                            rel: 현재 문서와 링크된 문서 사이의 연관 관계를 명시
                                ex1 noreferrer: 사용자가 하이퍼링크를 클릭할 때 브라우저가 HTTP 리퍼러 헤더를 전송해서는 안됨을 나타냄.
                                ex2 noopener: 하이퍼링크를 따라 연결되는 어떠한 브라우징 컨텍스트(browsing context)도 오프너(opener)여서는 안 됨을 나타냄.
                        */}
                        <img src={urlToImage} alt="thumbnail"></img>
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;
