import { ProductCard } from "./cases/products/components/product-card.tsx"
import { useState } from "react"
import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"
import {NavigationBar} from "./components/layout/navigation"
import { categories } from "./data/categories"
import { useProducts } from "./cases/products/hooks/use-product.ts"

function App() {

  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const products = useProducts();

  function handleSelectCategory(alias: string) {
        setActiveCategory(alias);
    } 

return (
    <>
      <Header />

      <NavigationBar 
      categories={categories} 
      activeCategory={activeCategory}
      onSelectCategory={handleSelectCategory} 
      />


    <main>
        <section>
            <header>
                <h2>Produto</h2>
                <p>Categoria <span id="select-category">{activeCategory}</span> - 10 itens</p>
            </header>

            {products.map((product) => (

                <ProductCard product={product} />
            ))}

            


        </section>

        <aside>
         <h2>Seu Pedido</h2>
         <div className="cart-empty">
            <img src="./assets/img/cart.svg" alt="Carrinho de Compras"  />
            <p>Seu carrinho está vazio</p>
            <p>Escolha um item do cardápio para pedir</p>

         </div>

        </aside>
    </main>
    
    <Footer />

    </>
  )
}

export default App