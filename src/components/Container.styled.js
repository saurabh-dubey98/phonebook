import styled from "styled-components";

const Container = styled.main`
    min-height: 100vh;
    width: 100%;
    background-image: linear-gradient(45deg, #874da2 0%, #c43a30 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #DADDFC;
    padding: 0 20px;
    & h1 {
        margin: 3.5rem 0;
        color: white;
        font-size: 4rem;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        /* text-transform: uppercase; */
        letter-spacing: 2.3px;
        font-family: 'Dancing Script', cursive;

        @media screen and (max-width: 380px) {
            font-size: 3rem;
        }

    }
`
export default Container;