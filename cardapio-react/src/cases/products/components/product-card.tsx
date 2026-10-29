import type { Product } from "../dtos/product"

type ProductCardProps = {
    product: Product
}

export function ProductCard({
    product
}: ProductCardProps) {
    return (
        <article>
            <figure>
              <img src={product.image} alt={product.name} />
                <figcaption>{product.category}</figcaption>
            </figure>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>R$ {product.price.toFixed(2)}</strong></p>
            <button type="button">Adicionar</button>
        </article>
    )
}