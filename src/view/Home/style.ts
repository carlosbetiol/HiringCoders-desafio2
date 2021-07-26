import styled from 'styled-components';
import img from '../../assets/bg1-lp.jpg';

export const Container = styled.div`
  /* max-width: 600px; */
  width: 80%;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  display: flex;

  .section-one {

    height: 20vh;
    /* height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #fff; */

    width: 800%;

    .nav{

      display:flex;
      flex-direction: row;  
      align-items: center;
      margin-top: 50px;

      .logo{
        position: relative;
        left: 20%;
      }
      
      .cart{
        display: flex;
        flex-direction: row;  
        align-items: center;
        position: absolute;
        right: 60px;
      
      }

      @media(max-width: 800px) {
        display: grid;
        position: relative;
        
        .cart {
          top: 100px;
          position: absolute;
          left:30%;
        }
      }


    }



  }
  
  .section-two { 

    /* background-image: url(${img});
    background-size: cover;
    background-attachment: fixed;
    background-position: center; */
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #fff;

    .product-content {
      display: grid;
      text-align: center;
      max-height: 300px;
      background: #fff;
      border-radius: 12px;
      padding: 12px;
      margin: 5px;
      max-width: 250px;

      img{
        margin: 10px;
        max-width: 200px;
        height: auto;
        transition: 0.3s;
      }

      img:hover{
        transform: scale(1.1);
      }

      .product-description {
        font-size: 10px;
        margin-top: 8px;
        height: 50px;
      }

      .product-price {
        font-size: 30px;
        margin: 8px;
      }

      button {
        margin: 5px 0;
        padding: 5px;
        background-color: white;
        border: 1px solid black;
        border-radius: 12px;

        :hover {
          cursor: pointer;
          background-color: black;
          color: white;          
        }

      }


    }

    @media(max-width: 800px) {
      height: 100vh;
      margin-top: 600px;
      flex-direction: column;
      position: absolute;
      left: 10px;
    
      .product-content {
        max-height: 500px;

        img {
          transform: scale(0.8);
          margin: 2px;

          :hover{
            transform: scale(0.9);
          }
        }

        .product-description {
          margin-top: 3px;
          
        }

        .product-price {
          font-size: 30px;
          margin: 2px;
        }        

      }

    }

    @media(max-width: 380px) {
      height: 100vh;
      margin-top: 650px;
      flex-direction: column;
      position: absolute;
      left: 10px;
    
      .product-content {
        max-height: 500px;

        img {
          transform: scale(0.8);
          margin: 2px;

          :hover{
            transform: scale(0.9);
          }
        }

        .product-description {
          margin-top: 3px;
          
        }

        .product-price {
          font-size: 30px;
          margin: 2px;
        }        

      }


    }


  }
`;