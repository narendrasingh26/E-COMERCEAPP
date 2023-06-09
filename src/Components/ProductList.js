import React, { useContext, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { CartContext } from "../store/CartContext";
import "./ProductList.css";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

export let Products = [
  {
    id: "a1",
    date: "june 23, 2023",
    title: "Album 1",
    name: "Arijit Singh",
    price: 100,
    image: "/arijeet.webp",
    image2: "/ar2.jpg",
    image3: "/ar3.jpg",
    heading: "Meri Kahani",
    des: " Meri Kahani is the debut studio album by Arijit Singh, one of the most renowned Indian playback singers. The album features a collection of soulful tracks, showcasing Arijit Singh mesmerizing vocals and emotional depth",
  },
  {
    id: "b2",
    title: "Album 2",
    date: "july 12, 2023",
    name: "Jubin Nautiyal",
    price: 50,
    image: "/jubin.jpg",
    image2: "/j2.jpg",
    image3: "/j3.jpg",
    heading: "Breaking The Rules",
    des: '"Breaking The Rules" is a mesmerizing album by Jubin Nautiyal, showcasing his exceptional vocal prowess and captivating melodies. With its soulful tracks and heartfelt lyrics, this album takes listeners on a musical journey filled with emotions and moments of pure musical brilliance.',
  },
  {
    id: "c3",
    title: "Album 3",
    date: "August 13, 2023",
    name: "Kailash Kher",
    price: 70,
    image: "/kailash.jpg",
    image2: "/kl2.jpg",
    image3: "/kl3.jpg",
    heading: "Jhoomo Re",
    des: " Jhoomo Re is a vibrant album by Kailash Kher, known for his powerful and soul-stirring vocals. With its energetic beats and infectious melodies, this album invites listeners to immerse themselves in the joyous celebration of music. Filled with Kailash Kher's signature style and heartfelt lyrics, Jhoomo Re is a must-listen for fans of Indian fusion and Sufi music.",
  },
  {
    id: "d4",
    title: "Album 4",
    date: "September 20, 2023",
    name: "K.K",
    price: 100,
    image: "/kk.jpg",
    image2: "/kk2.jpg",
    image3: "/kk3.jpg",
    heading: "Unstopable",
    des: "Unstoppable is an electrifying album by KK, renowned for his versatile and mesmerizing voice. With its dynamic and captivating tracks, this album takes listeners on an unstoppable musical journey. Packed with soulful melodies and powerful lyrics, Unstoppable showcases KK exceptional talent and leaves a lasting impact on every listener.",
  },
];

const ProductList = () => {
  // const { cart, addToCart } = useContext(CartContext);
  const cartCtx = useContext(CartContext);
  const emailRegEx = localStorage.getItem("email");
  let url = "https://crudcrud.com/api/7e549b7d41e84d749db87874040d3b4a";

  // useEffect(() => {
  //   fetch(`${url}/cart${emailRegEx}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       return cartCtx.addAll(data);
  //     });
  // }, [cartCtx, emailRegEx, url]);

  useEffect(() => {
    axios
      .get(`${url}/cart${emailRegEx}`)
      .then((res) => {
        const data = res.data;
        cartCtx.addAll(data);
      })
      .catch((error) => {
        console.log("Error fetching cart data:", error);
      });
      // eslint-disable-next-line
  }, []);

  const addCart = (product) => {
    const existingItem = cartCtx.cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      cartCtx.addCart(updatedItem);
      axios.post(`${url}/cart${emailRegEx}`, updatedItem).catch((error) => {
        // console.log("Error adding item to cart:", error);
      });
    } else {
      const newCartItem = { ...product, quantity: 1 };
      cartCtx.addCart(newCartItem);
      axios.post(`${url}/cart${emailRegEx}`, newCartItem).catch((error) => {
        // console.log("Error adding item to cart:", error);
      });
    }

    //   fetch(`${url}/cart${emailRegEx}`, {
    //     method: "POST",
    //     body: JSON.stringify(updatedItem),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    // } else {
    //   const newCartItem = { ...product, quantity: 1 };
    //   cartCtx.addCart(newCartItem);
    //   fetch(`${url}/cart${emailRegEx}`, {
    //     method: "POST",
    //     body: JSON.stringify(newCartItem),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    // }
  };
  // useEffect(() => {
  //   fetch(`https://crudcrud.com/api/485e285c4d904b83925a5c459fd7ef53/cart`, {
  //     method: "GET",
  //   }).then(res=>JSON.stringify(res)).then(data=>addToCart(data));
  // }, []);

  return (
    <div>
      {/* <div style={{marginLeft:'-50rem',marginTop:'-2.5rem'}}><Cart/></div> */}
      <div
        style={{
          textAlign: "center",
          fontFamily: "serif",
          backgroundColor: "gray",

          // marginTop:'13px'
        }}
      >
        <h1
          style={{
            height: "8rem",
            fontSize: "5rem",
            color: "white",
            fontWeight: "bold",
          }}
        >
          The Generics
        </h1>
      </div>
      <Container
        className="container-xxl"
        style={{ width: "100%", height: "2rem" }}
      >
        <p
          style={{
            textAlign: "center",
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Music
        </p>
        <div
          className="d-flex flex-wrap justify-content-between gy-5"
          style={{ marginLeft: "16%", marginRight: "10%" }}
        >
          {Products.map((product) => (
            <div key={product.id} className="w-48">
              <div style={{ width: "100%", height: "100%" }}>
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: "1.5rem",
                    fontFamily: "serif",
                    fontWeight: "bold",
                    marginRight: "3rem",
                  }}
                >
                  {product.title}
                </h2>
                <div className="image-zoom">
                  <Link to={`/productdetails/${product.id}`}>
                    {" "}
                    <img
                      variant="top"
                      src={product.image}
                      alt="productimg"
                      style={{
                        height: "20%",
                        width: "80%",
                        borderRadius: "5px",
                      }}
                    />
                  </Link>
                </div>
                <div>
                  <div style={{ fontWeight: "bold" }}>${product.price}</div>
                  <Button
                    className="btn btn-info"
                    style={{
                      marginLeft: "20%",
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: "2rem",
                    }}
                    onClick={() => addCart(product)}
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
                  
};

export default ProductList;
