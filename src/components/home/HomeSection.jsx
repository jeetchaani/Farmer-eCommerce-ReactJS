import React, { useEffect, useState } from 'react'
import './HomeSection.css'

const productList = () => {
    return [{
        img: "img/p1.jpg",
        title: "Product Title 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
        img: "img/p2.jpg",
        title: "Product Title 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
        img: "img/p3.jpg",
        title: "Product Title 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
        img: "img/p4.jpg",
        title: "Product Title 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
        img: "img/p5.jpg",
        title: "Product Title 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
        img: "img/p6.jpg",
        title: "Product Title 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
        img: "img/p7.jpg",
        title: "Product Title 7",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
    }];
}
export default function HomeSection() {
    const [list, setList] = useState(productList());
    useEffect(() => {
        setList(productList());
    }, [list])
    return (
        <main>
            <h1 className="main-heading">Direct From Farm to Your Home</h1>
            <div className="product-cards">

                {
                    list.map((item) => {
                        return (
                            <div className="product-card">
                                <img src={item.img} alt="Img" className="product-image" />
                                <h2 className="product-title">{item.title}</h2>
                                <article className="product-description">
                                    {item.description}
                                </article>
                                <div className="product-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            </div>
                        )
                    })
                }


            </div>
        </main>
    )
}
