import React, { useState, useEffect } from 'react';
import { Container } from './style';
// import api from '../../services/api';
import { toFixedLocale } from '../../utils/utils';
import Cart from '../../assets/cart.png'
import Logo from '../../assets/logo_300x126.png'
import * as jsonfile from './server.json';

// para tipar o que é recebido no data a ser usado no useState:
interface IProduct {
  id: number;
  name: string;
  photo: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    setData(jsonfile.produtos);
    // .get é o metodo da chamada da api (get, post, put, etc)
    // passa '' para informar q nao tem sufixo (/algumacoisa)
    // then tratando uma promise, ou seja, o que vem depois
    // api.get('').then(
    //   response => {
    //     // setData vem do const do useState acima response foi o recebido na array function
    //     // console.log(jsonfile);
    //     setData(jsonfile.produtos);
    //   }
    // )
 
  }, [])

  useEffect(() => {
    localStorage.setItem(`@cart`, JSON.stringify(cart));
  }, [cart]);

  // para passar uma acao para o botao de adicionar ao carrinho
  const handleCart = (index: number) => {
    // para colocar no localStorage tem q convertar para string
    // const productStorage = JSON.stringify(data[index]);
    // localStorage.setItem(`@Produto-${index}`, productStorage);

    let product = data[index]
    setCart(cart => [...cart, product]);

  }

  return (
    <Container>

      <section className="section-one">

        <div className="nav">
          <div className="logo">
            <img src={Logo} alt="Nutrimoderna" width="200px" height="auto" />
          </div>
          <div className="cart">
            <img src={Cart} alt="shopcart" width="50px" height="auto" />
            <span>( {cart.length} ) - Itens</span>
          </div>

        </div>
      </section>

      <section className="section-two">


        {data.map((prod, index) => (
          // necessario o key para ancorar cada div
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="iPhone" />
            <h4>{prod.name}</h4>
            <div className="product-description">{prod.description}</div>
            <span className="product-price"><h6>R$ {toFixedLocale(prod.price, 2)}</h6></span>
            <button onClick={() => handleCart(index)}>Adicionar ao carrinho</button>
          </div>
        ))}
      </section>
    </Container>
  );
}

export default Home;