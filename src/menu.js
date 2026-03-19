const menu = document.createElement("div");
menu.classList.add("menu");
menu.innerHTML = `

<h1>Our Menu</h1>
<div class="menu-section">
    <h2>Starters & Tapas</h2>
    <ul>
        <li>
        <h3>Jamón Ibérico de Bellota</h3>
        <p>Acorn-fed Ibérico ham (36 months cured), Arbequina extra virgin olive oil, rustic sourdough bread.</p>
        </li>

        <li>
        <h3>Gambas al Ajillo</h3>
        <p>Wild red prawns, garlic, guindilla chili, extra virgin olive oil, parsley, smoked paprika.</p>
        </li>

        <li>
        <h3>Ensaladilla Rusa con Ventresca</h3>
        <p>Potatoes, premium tuna belly (ventresca), carrot, peas, quail eggs, house-made aioli, pickled capers.</p>
        </li>

        <li>
        <h3>Croquetas de Jamón</h3>
        <p>Handmade béchamel with aged Ibérico ham, breadcrumbs, hint of nutmeg, fried crisp.</p>
        </li>

        <li>
        <h3>Boquerones en Vinagre</h3>
        <p>White anchovies marinated in sherry vinegar, garlic, parsley, extra virgin olive oil.</p>
        </li>
    </ul>
</div>

<div class="menu-section">
    <h2>Main Courses</h2>
    <ul>
        <li>
        <h3>Paella de Mariscos</h3>
        <p>Bomba rice, langoustines, clams, mussels, squid, prawns, saffron, ñora peppers, fish fumet, sofrito.</p>
        </li>

        <li>
        <h3>Cochinillo Asado Segoviano</h3>
        <p>Suckling pig (Segovia breed), sea salt, rosemary, thyme, roasted potatoes, garlic.</p>
        </li>

        <li>
        <h3>Pulpo a la Gallega</h3>
        <p>Galician octopus, potatoes, smoked sweet paprika (pimentón de la Vera), extra virgin olive oil, sea salt.</p>
        </li>

        <li>
        <h3>Entrecôte con Pimientos de Padrón</h3>
        <p>Aged Galician beef ribeye, grilled Padrón peppers, garlic confit, Maldon salt.</p>
        </li>

        <li>
        <h3>Merluza a la Vasca</h3>
        <p>Fresh hake, clams, prawns, asparagus, piperade sauce (roasted peppers, onion, tomato, Espelette chili).</p>
        </li>
    </ul>
</div>

<div class="menu-section">
    <h2>Desserts</h2>
    <ul>
        <li>
        <h3>Crema Catalana</h3>
        <p>Egg yolks, milk, cream, cinnamon stick, lemon zest, burnt sugar crust.</p>
        </li>

        <li>
        <h3>Tarta de Santiago</h3>
        <p>Ground almonds, eggs, sugar, lemon zest, powdered sugar dusting, saffron ice cream.</p>
        </li>

        <li>
        <h3>Torrija con Miel de Azahar</h3>
        <p>Brioche soaked in milk infused with orange blossom, cinnamon, honey, candied orange peel.</p>
        </li>

        <li>
        <h3>Arroz con Leche</h3>
        <p>Short-grain rice, whole milk, lemon peel, cinnamon stick, vanilla, caramelized sugar topping.</p>
        </li>
    </ul>
</div>
`;


export {menu};