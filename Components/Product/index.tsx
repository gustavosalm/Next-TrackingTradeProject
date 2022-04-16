import { ProductStyle } from "./style";

// type Props = {
//     children: React.ReactNode;
// }; /* {children} : Props */

const Product = () => {
    return (
        <ProductStyle>
            <h1>S21 (128GB)</h1>
            <p>Samsung</p>
            <p>RRP: R$ 5.999</p>
            <div>
                <p>Ranking:</p>
                <p>Last scrapping</p>
            </div>
        </ProductStyle>
    );
}

export default Product;