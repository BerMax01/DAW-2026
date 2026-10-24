import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"
import {NavigationBar} from "./components/layout/navigation"
import { categories } from "./data/categories"

function App() {

  function handleSelectCategory(alias: string) {
        alert('Categoria: ' + alias)
    } 

return (
    <>
      <Header />

      <NavigationBar 
      categories={categories} 
      activeCategory="porcoes" 
      onSelectCategory={handleSelectCategory} 
      />


    <main>
        <section>
            <header>
                <h2>Produto</h2>
                <p>Categoria <span id="select-category">Todos</span> - 10 itens</p>
            </header>

            <article>
                <figure>
                    <img src="./assets/img/burger.png" alt="Burguer"  />
                    <figcaption>Lanches</figcaption>
                </figure>
                <h3>Burger</h3>
                <p>Pão, hambúrguer 160g, queijo prato e molho eda casa.</p>
                <p>R$ 22,00</p>
                <button type="button">Adicionar</button>
            </article>

            <article>
                <figure>
                    <img src="./assets/img/burger-bacon.png" alt="Bacon Burger"  />
                    <figcaption>Lanches</figcaption>
                </figure>
                <h3>Burger Bacon</h3>
                <p>Pão, hambúrguer 160g, bacon, queijo prato e molho eda casa.</p>
                <p>R$ 25,00</p>
                <button type="button">Adicionar</button>
            </article>

            <article> 
                <figure>
                    <img src="./assets/img/burger-double.png" alt="Double Burger"  />
                    <figcaption>Lanches</figcaption>
                </figure>
                <h3>Burger Double</h3>
                <p>Pão, 2 hambúrguer 160g, bacon, chedar e cebola caramelizada.</p>
                <p>R$ 29,00</p>
                <button type="button">Adicionar</button>
            </article>

            <article> 
                <figure>
                    <img src="./assets/img/batata-rustica.png" alt="Batata Rústica"  />
                    <figcaption>Lanches</figcaption>
                </figure>
                <h3>Batata Rústica</h3>
                <p>Porção de batata com alecrim, parmesão e maionese verde.</p>
                <p>R$ 22,00</p>
                <button type="button">Adicionar</button>
            </article>

            <article> 
                <figure>
                    <img src="./assets/img/batata-tradicional.png" alt="Batata Tradicional"  />
                    <figcaption>Lanches</figcaption>
                </figure>
                <h3>Batata Tradicional</h3>
                <p>Porção de batata e maionese verde.</p>
                <p>R$ 18,00</p>
                <button type="button">Adicionar</button>
            </article>

            <article> 
                <figure>
                    <img src="./assets/img/agua.png" alt="Agua"  />
                    <figcaption>Bebidas</figcaption>
                </figure>
                <h3>Agua sem gás</h3>
                <p>Garrafa descartável de água sem gás com 500 ml.</p>
                <p>R$ 8,00</p>
                <button type="button">Adicionar</button>
            </article>

            <article> 
                <figure>
                    <img src="./assets/img/refri.png" alt="Refrigerante"  />
                    <figcaption>Bebidas</figcaption>
                </figure>
                <h3>Refrigerante</h3>
                <p>Copo de refrigerante de 300 ml.</p>
                <p>R$ 10,00</p>
                <button type="button">Adicionar</button>
            </article>

             <article> 
                <figure>
                    <img src="./assets/img/chopp.png" alt="Chopp"  />
                    <figcaption>Bebidas</figcaption>
                </figure>
                <h3>Chopp</h3>
                <p>Caneca de 300 ml do nosso chopp pilsen geladíssimo.</p>
                <p>R$ 15,00</p>
                <button type="button">Adicionar</button>
            </article>

             <article> 
                <figure>
                    <img src="./assets/img/petit-gateau.png" alt="Petit Gâteau"  />
                    <figcaption>Sobremesas</figcaption>
                </figure>
                <h3>Petit Gâteau</h3>
                <p>Delicioso bolo de chocolate com cobertura de chantilly.</p>
                <p>R$ 25,00</p>
                <button type="button">Adicionar</button>
            </article>

             <article> 
                <figure>
                    <img src="./assets/img/mousse-maracuja.png" alt="Mousse de Maracujá"  />
                    <figcaption>Sobremesas</figcaption>
                </figure>
                <h3>Mousse de Maracujá</h3>
                <p>Deliciosa mousse de maracujá com cobertura de chantilly.</p>
                <p>R$ 18,00</p>
                <button type="button">Adicionar</button>
            </article>


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