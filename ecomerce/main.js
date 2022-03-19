<script>
    const items = [
    {
        id: 0,
        nome: 'camiseta',
        img: 'img.jpg'
    },
        {
        id: 1,
        nome: 'short',
        img: 'image.jpg'
    },
    {
        id: 3,
        nome: 'saia',
        img: 'image.jpg'
    }
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((vaL)=>{
        containerProdutos.innerHTML+= `
        
        <div class="produtos">
            <img src="`+val.img+`"/>
            <p>`+val.nome+`</p>
            <a key="`+val.id+`  " href="">Adicionar ao carrinho!</a>  
        </div> 
        `;
    })
}
    
inicializarLoja();

</script>
