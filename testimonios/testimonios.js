const testimonilsContainer=document.querySelector('.testomial-container')
const testimonial=document.querySelector('.testomonial')
const userImage=document.querySelector('.user-image')
const userName=document.querySelector('.username')
const role=document.querySelector('.role')

const testomonials=[
    {
        name:'Ferdinand',
        position:'Marketing',
        photo:'http://panamericanworld.com/wp-content/uploads/2018/07/eugenio-derbez.jpg',
        text:'Fragmento de un escrito con unidad temática, que queda diferenciado del resto de fragmentos por un punto y aparte y generalmente también por llevar letra mayúscula inicial y un espacio en blanco en el margen izquierdo de alineación del texto principal de la primera línea'
    },
    {
        name:'Alex',
        position:'Marketing',
        photo:'https://los40es00.epimg.net/los40/imagenes/2018/10/09/cinetv/1539080612_321993_1539080975_noticia_normal.jpg',
        text:'Fragmento de un escrito con unidad temática, que queda diferenciado del resto de fragmentos por un punto y aparte y generalmente también por llevar letra mayúscula inicial y un espacio en blanco en el margen izquierdo de alineación del texto principal de la primera línea'
    },
    {
        name:'Samara',
        position:'Marketing',
        photo:'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/07/Isabela-Merced.jpg?resize=1080%2C1349&quality=80&ssl=1',
        text:'Fragmento de un escrito con unidad temática, que queda diferenciado del resto de fragmentos por un punto y aparte y generalmente también por llevar letra mayúscula inicial y un espacio en blanco en el margen izquierdo de alineación del texto principal de la primera línea'
    },
    {
        name:'Marco',
        position:'Marketing',
        photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/200px-Brad_Pitt_2019_by_Glenn_Francis.jpg',
        text:'Fragmento de un escrito con unidad temática, que queda diferenciado del resto de fragmentos por un punto y aparte y generalmente también por llevar letra mayúscula inicial y un espacio en blanco en el margen izquierdo de alineación del texto principal de la primera línea'
    },
    {
        name:'sandra',
        position:'Marketing',
        photo:'http://panamericanworld.com/wp-content/uploads/2018/07/eugenio-derbez.jpg',
        text:'Fragmento de un escrito con unidad temática, que queda diferenciado del resto de fragmentos por un punto y aparte y generalmente también por llevar letra mayúscula inicial y un espacio en blanco en el margen izquierdo de alineación del texto principal de la primera línea'
    },
]

let idx=1

function updateTestimonial(){
    const {name,position,photo,text}=testomonials[idx]
    testimonial.innerHTML=text
    userImage.src=photo
    userName.innerHTML=name
    role.innerHTML=position
    idx++
    if(idx>testomonials.length -1){
        idx=0
    }
}
setInterval(updateTestimonial, 10000)

