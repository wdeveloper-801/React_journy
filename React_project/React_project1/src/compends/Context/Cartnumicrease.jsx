import React, { createContext, useState } from "react";

export const CartContext = createContext();

const Cartnumicrease = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // slider open/close
  const [billpage, setBillpage] = useState([])
  
  const [data, setDdata] = useState([
    {
      id: 1,
      name: "Nike Air Zoom Pegasus 40",
      url: "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",
      price: 1200,
      shoes_size: "US 9 / EU 42 / UK 8.5"
    },
    {
      id: 2,
      name: "Adidas Ultraboost 23",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCq3RUiyESsXd16XLpMJsQKvRA6B8RJW2vw&s",
      price: 1350,
      shoes_size: "US 10 / EU 44 / UK 9.5"
    },
    {
      id: 3,
      name: "Puma RS-X Reinvention",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVB9HxhW_b1ANMzs7TB9w4fLojDoHO5FBYw&s",
      price: 1450,
      shoes_size: "US 8 / EU 41 / UK 7.5"
    },
    {
      id: 4,
      name: "Reebok Classic Leather",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwPjHSnFSYRuEJ164VFVRe2vcJUHV_n3vofu4NAF5_xgVk8w-GtG_ktFwWbQG4Hbl4R0&usqp=CAU",
      price: 1500,
      shoes_size: "US 10 / EU 43 / UK 9.5"
    },
    {
      id: 5,
      name: "New Balance 574 Core",
      url: "https://www.workingclassheroes.co.uk/images/products/archive/j/ja/janoskimaxmidldrkobsdn1.jpg?width=1998&height=1998&quality=85&mode=pad&format=webp&bgcolor=ffffff",
      price: 1600,
      shoes_size: "US 11 / EU 45 / UK 10.5"
    },
    {
      id: 6,
      name: "Vans Old Skool",
      url: "https://t3.ftcdn.net/jpg/01/21/81/86/360_F_121818673_6EID5iF76VCCc4aGOLJkd94Phnggre3o.jpg",
      price: 1700,
      shoes_size: "US 9 / EU 42 / UK 8.5"
    },
    {
      id: 7,
      name: "Converse Chuck Taylor All Star",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoi1n1qtI8fHAJzzc7jXYO5nnOTZ8yrvvB1Q&s",
      price: 1800,
      shoes_size: "US 10 / EU 44 / UK 9.5"
    },
    {
      id: 8,
      name: "Asics Gel-Kayano 30",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6D6Zy2rPILUgGRxUEdXKkh0nuwChUktF61Q&s",
      price: 1900,
      shoes_size: "US 11 / EU 45 / UK 10.5"
    },
    {
      id: 9,
      name: "Under Armour HOVR Phantom 2",
      url: "https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg",
      price: 2000,
      shoes_size: "US 9 / EU 43 / UK 8.5"
    },
    {
      id: 10,
      name: "Jordan Air 1 Retro High OG",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrMzVjuuvvk9oBLgKl_MT1_btKQdFqVJBe0iYu2NttjSeXNVjsCbXw2TVduX2c1JnTPA&usqp=CAU",
      price: 2100,
      shoes_size: "US 12 / EU 46 / UK 11.5"
    },
    {
      id: 11,
      name: "Nike Air Zoom Pegasus 40",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dhBKaLGKgyb54ZwIqZAyFnTBi84NEg547OUtH6JKIJkZL5VJTl_vZikf_pKv9prFDC0&usqp=CAU",
      price: 1200,
      shoes_size: "US 9 / EU 42 / UK 8.5"
    },
    {
      id: 12,
      name: "Adidas Ultraboost 23",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvL24na0I_Cw56CJp9X4ELKIv53vJ5alkYEk1k2kLJ_RmAxIZ3KX2vfXEz3efO5ED4qbI&usqp=CAU",
      price: 1350,
      shoes_size: "US 10 / EU 44 / UK 9.5"
    },
    {
      id: 13,
      name: "Puma RS-X Reinvention",
      url: "https://img.freepik.com/free-psd/new-collection-sneakers-social-media-template_505751-3254.jpg",
      price: 1450,
      shoes_size: "US 8 / EU 41 / UK 7.5"
    },
    {
      id: 14,
      name: "Reebok Classic Leather",
      url: "https://img.freepik.com/free-psd/new-collection-sneakers-social-media-template_505751-3254.jpg",
      price: 1500,
      shoes_size: "US 10 / EU 43 / UK 9.5"
    },
    {
      id: 15,
      name: "New Balance 574 Core",
      url: "https://img.freepik.com/free-photo/one-black-sneaker-shoe-isolated-white_93675-131266.jpg",
      price: 1600,
      shoes_size: "US 11 / EU 45 / UK 10.5"
    },
    {
      id: 16,
      name: "Vans Old Skool",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSzUrBiK8gfFtsxaFddcIx4P60c6yRf_v-4WmXbUtPTRxrf_Uk5Zky9VdPbO8vb_cgBc&usqp=CAU",
      price: 1700,
      shoes_size: "US 9 / EU 42 / UK 8.5"
    },
    {
      id: 17,
      name: "Converse Chuck Taylor All Star",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUi39XBxtsIOpEJjpqdKvtyn6cKo5cKR2Oiw&s",
      price: 1800,
      shoes_size: "US 10 / EU 44 / UK 9.5"
    },
    {
      id: 18,
      name: "Asics Gel-Kayano 30",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoMPRh3PsU5dQjb-hcAkiHrSs63IN03RV5erQ7sX1XezQGrnahc0Hyu_zgdgJxZGH8TqE&usqp=CAU",
      price: 1900,
      shoes_size: "US 11 / EU 45 / UK 10.5"
    },
    {
      id: 19,
      name: "Under Armour HOVR Phantom 2",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27Z3aethahswCL8HwChEbmGsjZttY_kYg32itLUaYhlwNSYNmdj_sSYRBi-wmw5xq8rw&usqp=CAU",
      price: 2000,
      shoes_size: "US 9 / EU 43 / UK 8.5"
    },
    {
      id: 20,
      name: "Jordan Air 1 Retro High OG",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xaImOeFRLLXce0kJT7M3jc3GPqHeuRm3EDyPDv63umihg8q6XQwJFhIzjfEzA5-vEt4&usqp=CAU",
      price: 2100,
      shoes_size: "US 12 / EU 46 / UK 11.5"
    }
  ]);

  let random = Math.floor(Math.random() * 2000) ;
  const [Ordernum, setOrdernum] = useState(random)



  return (
    <CartContext.Provider value={{
      cartCount,
      setCartCount,
      cartItems,
      setCartItems,
      isCartOpen,
      setIsCartOpen,
      billpage,
      setBillpage,
      data,
      setDdata,
      Ordernum,
      setOrdernum
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default Cartnumicrease;
