import styled from "styled-components";
import background from '../../assest/background.png'

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  box-shadow: 0px 0px 15px lightgrey;

  img {
    height: fit-content;
    margin: 20px auto;
  }

  nav {
    margin: auto;
    display: flex;
    list-style: none;
    text-transform: uppercase;

    li {
      margin: 0px 24px;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    img {
      width: 19%;
      margin: 34px 10px;
    }

    nav {
      text-align: center;
      display: flex;
      margin: 34px auto;

      li {
        margin: 20px 10px;
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    display: flow-root;
    text-align: center;
    img {
      width: fit-content;
    }

    nav {
      display: flow-root;
      margin: 0;
    }
  }
`

export const HomePage = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  background-repeat: no-repeat;
  background-image: url(${background});

  .brand {
    font-size: 43px;
    text-transform: uppercase;
    padding: 80px 0 30px 0;
  }

  .hr {
    width: 10%;
    height: 2px;
    margin: 10px auto;
    background-color: #fff;
  }

  .minimal {
    margin: 80px 0;
    background: #FEFEC9;
    color: black;
    padding: 40px 0;

    button {
      text-transform: capitalize;
      margin: 30px auto;
      background: transparent;
      border: 1px solid #47474F;
      padding: 10px 30px;
    }
  }

  @media screen and (max-width: 480px) {
    .brand {
      font-size: 31px;
    }

    .minimal {
      margin: 10px 0;
    }
  }
`

export const Brands = styled.div`
  width: 100%;
  text-align: center;
  margin: -80px 0 10px 0;

  .make {
    padding: 50px 0;
    width: fit-content;
    margin: 0px auto;
    font-size: 24px;
    text-transform: uppercase;
  }

  .hr {
    height: 1px;
    background-color: black;
    width: 10%;
    margin: -10px auto;
  }

  .cards-wrapper {
    display: flex;
    width: fit-content;
    margin: 40px auto;
    justify-content: center;

    .cards {
      border: 1.4px solid black;
      padding: 10px;
      width: 30%;
      text-align: center;
      justify-content: center;
      margin: 10px;

      img {
        padding: 20px 90px;
        background: #F5F5F5;
        margin: 10px auto;
      }

      .set {
        padding: 10px;
        font-size: 16px;
        text-transform: uppercase;
      }

      .lorem {
        margin: 0px;
        font-size: 15px;
        padding: 10px 14px;
        text-transform: none;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Images = styled.div`
  width: 100%;
  background: #F5F5F5;

  p {
    text-align: center;

  }

  .recent {
    text-transform: uppercase;
    padding: 60px 0 20px 0;
    margin: 20px auto;
  }

  .hr {
    height: 1px;
    width: 10%;
    background-color: black;
    margin: 10px auto;
  }

  .img-wrapper {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 20px auto;

    .img-s {
      margin: 20px;
      background-color: white;

      p {
        padding: 10px 0;
        text-transform: uppercase;

        span {
          text-transform: capitalize;
        }
      }
    }
  }
@media screen and (max-width: 768px) {
  width: 100%;
}
`