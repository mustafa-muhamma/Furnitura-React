import { useEffect, useState } from "react"
import Card from "./Card"

function Cards() {
    const [products, setProducts] = useState([])
    const getData = async () => {
        const data = await fetch('https://dummyjson.com/products')
        const res = await data.json()
        if (res) {
            setProducts(res.products)

        } else {
            setProducts([])
        }
        const filteredData = res.products.filter(product => product.category === 'furniture')
        setProducts(filteredData)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="container">
            <div className="flex items-center justify-center gap-6 flex-wrap">
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Cards
