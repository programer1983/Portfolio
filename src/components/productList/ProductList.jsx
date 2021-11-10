import "./productlist.css"
import Product from "./../product/Product"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Dimon</h1>
                <p className="pl-desc">
                Elementum eu facilisis sed odio morbi quis commodo odio. Suspendisse faucibus interdum posuere lorem ipsum dolor. Vulputate dignissim suspendisse in est ante in. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus.
                </p>
            </div>
            <div className="pl-list">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default ProductList
