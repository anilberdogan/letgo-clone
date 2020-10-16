import React from 'react'
import { Container, Row, Col } from "reactstrap"
import Card from "../global/Card"

function Products() {
    const cate = []
    const list = [{
        imgurl: 'https://d23ic3f0nw4szy.cloudfront.net/marketpaketi/products/544170/titiz-plastik-109-buyuk-koruklu-vantuz-pompa-667449001545380757.jpg',
        city: "Karabuk",
        desc: "Pompa",
        category: "Ev ve Bahçe",
        price: "₺50"
    },
    {
        imgurl: 'https://cdn03.ciceksepeti.com/cicek/kc149110-1/L/mercedes-pikap-oyuncak-lisansli-diecast-metal-cek-birak-araba-kc149110-1-2.jpg',
        city: "Bursa",
        desc: "Yeni Araba",
        category: "Araba",
        price: "₺10.000"
    },
    {
        imgurl: 'https://blog.adgager.com/wp-content/uploads/2018/09/dell-xps-15-9570-hero2.jpg',
        city: "istanbul",
        desc: "muthis laptop",
        category: "Elektronik",
        price: "₺60"
    },
    {
        imgurl: 'https://cdn.akakce.com/iv/8131/545/545868520z.jpg',
        city: "Manisa",
        desc: "Yangin hortumu",
        category: "Ev ve Bahçe",
        price: "₺100"
    }
    ]
    return (
        <div className="py-4">
            <Row>
                <Col>
                    <h4>Senin için seçtiklerimiz ❤️</h4>
                </Col>
            </Row>
            <Row>
                <Col xs='3' className="px-2">
                    <Card obj={list[0]} />
                </Col>
                <Col xs='3' className="px-2">
                    <Card obj={list[1]} />
                </Col>
                <Col xs='3' className="px-2">
                    <Card obj={list[2]} />
                </Col>
                <Col xs='3' className="px-2">
                    <Card obj={list[3]} />
                </Col>
                <Col xs='3' className="px-2">
                    <Card obj={list[3]} />
                </Col>
                <Col xs='3' className="px-2">
                    <Card obj={list[0]} />
                </Col>
                <Col xs='3' className="px-2">
                    <Card obj={list[1]} />
                </Col>
                <Col xs='3' className="px-2">
                    <Card obj={list[2]} />
                </Col>
            </Row>

        </div>
    )
}

export default Products
