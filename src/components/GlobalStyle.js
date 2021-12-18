import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html {
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: gray;
    }
}
body{
    font-family: 'Source Sans Pro', sans-serif;
    width: 100%;
}
h2{
    font-size: 3rem;
    font-weight: bold;
}
h3{
    font-size: 1.5rem;
    color: #333;
    padding: 1rem;
}
p{
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
}
a {
    text-decoration:none;
    color: #333;
}
@media screen and (max-width:768px){
    h2{
        font-size: 2rem;
        text-align:center;
        color: #333;
    }
}
`;

export default GlobalStyles;
