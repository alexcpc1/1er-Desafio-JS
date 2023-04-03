class ProductManager {

    constructor(){
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if(!title || !description || !price || !thumbnail|| !code || !stock){
            return console.log("Todos los campos deben ser Obligatorios");
        }
        const codeExists = this.products.some((product) => product.code === code);
        if(codeExists){
            return console.log("Ya existe un producto con este Codigo")
        }
        let newId;
        if(!this.products.length){
            newId=1;
        } else{
            newId = this.products[this.products.length-1].id+1;
        }
        const newProduct = {
            id: newId,
            title, 
            description, 
            price, 
            thumbnail, 
            code, 
            stock
        }
        this.products.push(newProduct);
        console.log("Nuevo Producto Agregado", newProduct);    
    }  
    getProducts(){
        return this.products;
    }
    getProductsId(id){
        const productFound =this.products.find((product) => product.id === id);
        if(!productFound){
            return console.log(`Producto no encontrado con el Id ${id}`)
        }
        console.log("productFound: ", productFound);
    }
}

const manager1 = new ProductManager();

console.log("manager1: ", manager1);

manager1.addProduct("Risotto", "Risotto de Champiñones 40Gr", 3000, "https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/20548165-LhlJB88C-medium.jpg", "1010", 40);
manager1.addProduct("Cereal", "Cereal Infantil Nestum Frutilla - 250GR", 6000, "https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/20386774-qf9cW0sV-medium.png", "1012", 100);
manager1.addProduct("Mantequilla", "Mantequilla con Sal - 250 GR", 1500, "https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/4011088-aosxGOr0-medium.jpg", "1014", 20);
manager1.addProduct("Chorizo", "Chorizo Parrillero - 20 Und", 2000, "https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/20050239-Oy6zFS-p-medium.jpg", "1016", 30);
manager1.addProduct("Pasta");
manager1.addProduct("Queso", "Queso Gauda Laminado - 500 GR", 4000, "https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/20211526-38YL_0zf-medium.jpg", "1012", 300);

console.log("productos manager1: ", manager1.getProducts());

manager1.getProductsId(900)
manager1.getProductsId(3)