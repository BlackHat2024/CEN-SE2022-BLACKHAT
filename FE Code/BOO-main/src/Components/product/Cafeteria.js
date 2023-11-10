import albeni from "./img/albeni.png"
import cin from "./img/cin.png"
import snikers from "./img/snikers.png"
import kinder from "./img/kinder.png"
import haribo from "./img/haribo.png"


const Cafeteria = [ 
    {
        id: 1,
        itemId: 'chips1',
        img : albeni,
        name: 'lays',
        price: '40L',
        amount:"13",
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 2,
        itemId: 'chips1',
        img : cin,
        name: 'chetos',
        price: '20L',
        amount:"15",
        // color:"#FFC2EE",
        rect:"#FF9DE4",
    },
    {
        id: 3,
        itemId: 'chips1',
        img : snikers,
        name: 'stapistup',
        price: '20L',
        amount: 29,
        // color:"#F9D0FF",
        rect:"#EEB5F7",
    },
    {
        id: 4,
        itemId: 'sweet2',
        img : albeni,
        name: 'albeni',
        price: '40L',
        amount:"13",
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 5,
        itemId: 'sweet2',
        img : cin,
        name: 'cin',
        price: '20L',
        amount:"15",
        // color:"#FFC2EE",
        rect:"#FF9DE4",
    },
    {
        id: 6,
        itemId: 'sweet2',
        img : snikers,
        name: 'snikers',
        price: '20L',
        amount: 29,
        // color:"#F9D0FF",
        rect:"#EEB5F7",
    },
    {
        id: 7,
        itemId: 'sweet2',
        img : kinder,
        name: 'kinder',
        price: '20L',
        amount: 5,
        // color:"#D2AFFF",
        rect:"#B988F9",
    },
    {
        id: 8,
        itemId: 'sweet2',
        img : haribo,
        name: 'haribo',
        price: '20L',
        // color:"#D2E8F8",
        rect:"#ACD8F0",
    },
    {
        id: 9,
        itemId: 'sweet2',
        img : albeni,
        name: 'albeni',
        price: '40L',
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 10,
        itemId: 'sweet2',
        img : kinder,
        name: 'kinder',
        price: '20L',
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 11,
        itemId: 'sweet2',
        img : haribo,
        name: 'haribo',
        price: '20L',
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 12,
        itemId: 'sweet2',
        img : albeni,
        name: 'albeni',
        price: '40L',
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 13,
        itemId: 'drinks3',
        img : albeni,
        name: 'coca cola',
        price: '40L',
        amount:"13",
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 14,
        itemId: 'drinks3',
        img : cin,
        name: 'pepsi',
        price: '20L',
        amount:"15",
        // color:"#FFC2EE",
        rect:"#FF9DE4",
    },
    {
        id: 15,
        itemId: 'drinks3',
        img : snikers,
        name: 'ivi',
        price: '20L',
        amount: 29,
        // color:"#F9D0FF",
        rect:"#EEB5F7",
    }, 
    {
        id: 16,
        itemId: 'hots4',
        img : albeni,
        name: 'cofee',
        price: '40L',
        amount:"13",
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 17,
        itemId: 'hots4',
        img : cin,
        name: 'makjato',
        price: '20L',
        amount:"15",
        // color:"#FFC2EE",
        rect:"#FF9DE4",
    },
];

const Cantina = [ 
    {
        id: 1,
        itemId: 'burger1',
        img : albeni,
        name: 'lays',
        price: '40L',
        amount:"13",
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 2,
        itemId: 'burger1',
        img : cin,
        name: 'chetos',
        price: '20L',
        amount:"15",
        // color:"#FFC2EE",
        rect:"#FF9DE4",
    },
    {
        id: 3,
        itemId: 'burger1',
        img : snikers,
        name: 'stapistup',
        price: '20L',
        amount: 29,
        // color:"#F9D0FF",
        rect:"#EEB5F7",
    },
    {
        id: 4,
        itemId: 'burger1',
        img : albeni,
        name: 'albeni',
        price: '40L',
        amount:"13",
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 5,
        itemId: 'burger1',
        img : cin,
        name: 'cin',
        price: '20L',
        amount:"15",
        // color:"#FFC2EE",
        rect:"#FF9DE4",
    },
    {
        id: 6,
        itemId: 'burger1',
        img : snikers,
        name: 'snikers',
        price: '20L',
        amount: 29,
        // color:"#F9D0FF",
        rect:"#EEB5F7",
    },
    {
        id: 7,
        itemId: 'burger1',
        img : kinder,
        name: 'kinder',
        price: '20L',
        amount: 5,
        // color:"#D2AFFF",
        rect:"#B988F9",
    },
    {
        id: 8,
        itemId: 'burger1',
        img : haribo,
        name: 'haribo',
        price: '20L',
        // color:"#D2E8F8",
        rect:"#ACD8F0",
    },
    {
        id: 9,
        itemId: 'burger1',
        img : albeni,
        name: 'albeni',
        price: '40L',
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 10,
        itemId: 'pizza2',
        img : kinder,
        name: 'kinder',
        price: '20L',
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 11,
        itemId: 'pizza2',
        img : haribo,
        name: 'haribo',
        price: '20L',
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 12,
        itemId: 'pizza2',
        img : albeni,
        name: 'albeni',
        price: '40L',
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 13,
        itemId: 'pizza2',
        img : albeni,
        name: 'coca cola',
        price: '40L',
        amount:"13",
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 14,
        itemId: 'pizza2',
        img : cin,
        name: 'pepsi',
        price: '20L',
        amount:"15",
        // color:"#FFC2EE",
        rect:"#FF9DE4",
    },
    {
        id: 15,
        itemId: 'desserts3',
        img : snikers,
        name: 'ivi',
        price: '20L',
        amount: 29,
        // color:"#F9D0FF",
        rect:"#EEB5F7",
    }, 
    {
        id: 16,
        itemId: 'desserts3',
        img : albeni,
        name: 'cofee',
        price: '40L',
        amount:"13",
        // color:"#F7C0FF",
        rect:"#F4A6FF",
    },
    {
        id: 17,
        itemId: 'desserts3',
        img : cin,
        name: 'makjato',
        price: '20L',
        amount:"15",
        // color:"#FFC2EE",
        rect:"#FF9DE4",
    },
];

const Menu=[
    {
        id:1,
        itemId:'chips1',
        name:'Chips',
    },
    {
        id:2,
        itemId:'sweet2',
        name:'Sweets',
    },
    {
        id:3,
        itemId:'drinks3',
        name:'Drinks'
    },
    {
        id:4,
        itemId:'hots4',
        name:'Hots'
    },
]

const Menu1=[
    {
        id:1,
        itemId:'burger1',
        name:'Burger',
    },
    {
        id:2,
        itemId:'pizza2',
        name:'Pizza',
    },
    {
        id:3,
        itemId:'desserts3',
        name:'Desserts'
    },
]
export {Cafeteria, Cantina, Menu, Menu1};