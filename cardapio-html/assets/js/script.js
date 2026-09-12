const categoryLinks = document.querySelectorAll('nav a');
const selectedCategory = document.getElementById('select-category');

categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event){
        event.preventDefault();

        // Pega o nome da categora clicada

        const categoryName = link.textContent;
        
        // Atualiza o texto da categoria selecionada

        selectedCategory.textContent = categoryName;

        //Remover a class "acrive"
        categoryLinks.forEach(function (categoryLink) {
            categoryLink.classList.remove('active');
        });

        //adicionar a class "active" ao link clicado
        link.classList.add('active');
        
    });
});        

 