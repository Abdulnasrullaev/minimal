import styled from "styled-components";
import bgImages from '../../assest/bg-image.png'

export const Progress = styled.div`
  width: 100%;
  padding: 30px 0;
  margin: -20px 0 0 0;

  .hr {
    height: 1px;
    width: 10%;
    background-color: black;
    margin: 10px auto;
  }

  .team {
    text-transform: uppercase;
    width: fit-content;
    font-size: 23px;
    margin: 0px auto;
  }

  .card-wraper {
    display: flex;
    justify-content: center;

    .card {
      text-align: center;
      margin: 20px 13px;

      .name {
        text-transform: uppercase;

        span {
          text-transform: capitalize;
        }
      }

      .link {
        img {
          margin: 5px;
        }
      }
    }
  }

  blockquote {
    background: #F5F5F5;
    text-align: center;

    .quote {
      margin: 70px auto;
    }

    .card-wrappers {
      justify-content: center;
      display: flex;
      padding: 20px 0;
      margin: 20px auto;

      div {
        margin: 0px 30px;
        width: 30%;

        img {
          margin: 10px auto;
        }

        .title {
          font-weight: bold;
          font-size: 26px;
        }

        .names {
          color: #ABABAB;
          text-transform: uppercase;
          font-size: 14px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    .card-wraper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    blockquote {
      margin: 0;
      .card-wrappers {
        margin: 10px 0;
     div{
       .title{
         font-size: 21px;
       }
       img{
         margin: 12px auto;
       }
     }
      }
    }
  }
`

export const EndTitles = styled.div`
  width: 100%;
  margin: -40px 0 0 0;
  text-align: center;
  padding: 40px 0;
  color: white;
  display: flow-root;
  background: black;

  input {
    width: 31%;
    outline: none;
    padding: 12px 0;
    border: none;
  }

  textarea {
    border: none;
  }

  .name {
    background-color: #2E2E2E;
  }

  input::placeholder {
    color: white;
    padding: 0px 12px;
  }

  textarea::placeholder {
    color: white;
    padding: 10px 12px;
  }

  .email {
    background-color: #333333;
  }

  button {
    border: 1px solid white;
    margin: 22px auto;
    background-color: transparent;
    color: white;
    text-transform: capitalize;
    padding: 13px 50px;
  }

  .logo {
    margin: 20px auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    textarea{
      width: 70%;
      margin:  auto;
    }
    input{
      width: 70%;
    }
  }
`