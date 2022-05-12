const quotes = document.getElementById('text');
const author = document.getElementById('author');
const body = document.getElementsByTagName('body');
const allQuotes = [
    {
        quote: '„Posso morrer jovem, ela disse, mas pelo menos morro inteligente.“',
        author: 'John Green',
        color: '#483D8B'
    },
    {
        quote: '“O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis”',
        author: 'José de Alencar',
        color: '#1C1C1C'
    },
    {
        quote: '“Se você quer ser bem-sucedido precisa de dedicação total, buscar seu último limite e dar o melhor de si mesmo”',
        author: 'Ayrton Senna',
        color: '#8FBC8F'
    },
    {
        quote: '“Em tempo de paz convém ao homem serenidade e humildade; mas quando estoura a guerra deve agir como um tigre!” ',
        author: 'William Shakespeare',
        color: '#2E8B57'
    },
    {
        quote: '“Paz e harmonia: eis a verdadeira riqueza de uma família.” ',
        author: 'Benjamin Franklin',
        color: '#556B2F'
    },
    {
        quote: '“A paz da consciência é o maior de todos os dons. Uma pessoa com a consciência limpa não tem motivos para temer os espectros.” ',
        author: 'C.S Lewis',
        color: '#BC8F8F'
    },
    {
        quote: '“Nunca houve uma guerra boa nem uma paz ruim.” ',
        author: 'Benjamin Franklin',
        color: '#D2691E'
    },
    {
        quote: '“Eu vou aonde me leva o meu pensamento. Talvez chegue à paz do meu coração.” ',
        author: 'Calvin Coolidge',
        color: '#7B68EE'
    },
    
    
]


function quoteGenerator(){
const randomQuote = Math.floor(Math.random()* allQuotes.length);
   quotes.innerText = allQuotes[randomQuote].quote;
   author.innerText = allQuotes[randomQuote].author;
   document.getElementById('corpo').style.color = allQuotes[randomQuote].color;
   document.getElementById('corpo').style.backgroundColor = allQuotes[randomQuote].color;
   document.getElementsByClassName('btn')[0].style.backgroundColor = allQuotes[randomQuote].color;
   document.getElementsByClassName('btn')[1].style.backgroundColor = allQuotes[randomQuote].color;
   document.getElementsByClassName('blockquote-footer')[0].style.color = allQuotes[randomQuote].color;
}