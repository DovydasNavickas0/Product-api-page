const root = document.getElementById('root')

const fetching = async () => {
    console.log('its loading')
    try {
        console.log('fetching')
        const Products = await fetch("https://fakestoreapi.com/products/")
        console.log('fetch is done. Building json')
        const Products_msg = await Products.json()
        console.log('json done')
        const results_array = Products_msg.results
        console.log(Products_msg)

        //console.log("works1")

        const grab = async () => {
            const Filter = document.createElement('nav')
            Filter.classList.add('Filter')
            const base = document.createElement('button')
            base.innerText = 'Home'
            base.classList.add("base")
            root.appendChild(Filter)
            Filter.appendChild(base)
            let categories = new Array()
            //console.log("works2")
            for(let i in Products_msg){
                //console.log("works3 " + i)
                const item = Products_msg[i].category
                if(categories.includes(item) === true){
                    continue
                }else{
                    categories.push(item)
                }
            }
            for(let j in categories){
                //console.log(categories[j]);
                const id = categories[j];
                const Catbtn = document.createElement('button');
                Catbtn.setAttribute('id', `Category: ${id}`);
                Catbtn.innerText = categories[j];
                Filter.appendChild(Catbtn);
               }

            base.addEventListener('click', (() =>{
                document.getElementById('rootConnector').remove()
                goodoldhome()
            }))
            document.getElementById("Category: jewelery").addEventListener('click', (() =>{
                document.getElementById('rootConnector').remove()
                jewelery()
            }))
            document.getElementById("Category: men's clothing").addEventListener('click', (() =>{
                document.getElementById('rootConnector').remove()
                menclothing()
            }))
            document.getElementById("Category: electronics").addEventListener('click', (() =>{
                document.getElementById('rootConnector').remove()
                electronics()
            }))
            document.getElementById("Category: women's clothing").addEventListener('click', (() =>{
                document.getElementById('rootConnector').remove()
                womenclothing()
            }))
        }
        grab()

        const goodoldhome = () => {
            
            const ProductBox = document.createElement('div')
            ProductBox.setAttribute('id', 'rootConnector')

            for(let i in Products_msg){
                //console.log('working')
                //console.log(Products_msg[i].title)
    
                const ProductDiv = document.createElement('div')
                ProductDiv.classList.add("Products")
    
                const ProductImg = document.createElement('img')
                ProductImg.src = Products_msg[i].image
    
                const ProductName = document.createElement('p')
                ProductName.innerText = Products_msg[i].title
    
                const ProductBtn = document.createElement('button')
                ProductBtn.innerText = "apžiurėti"
    
                //root.appendChild(Filter)
                root.appendChild(ProductBox)
                ProductBox.appendChild(ProductDiv)
                ProductDiv.appendChild(ProductImg)
                ProductDiv.appendChild(ProductName)
                ProductDiv.appendChild(ProductBtn)
    
            }
        }
        goodoldhome()

        const jewelery = () => {

            const ProductBox = document.createElement('div')
            ProductBox.setAttribute('id', 'rootConnector')

            for(let i in Products_msg){
                //console.log('working')
                //console.log(Products_msg[i].title)

                if(Products_msg[i].category === "jewelery"){
    
                    const ProductDiv = document.createElement('div')
                    ProductDiv.classList.add("Products")
        
                    const ProductImg = document.createElement('img')
                    ProductImg.src = Products_msg[i].image
        
                    const ProductName = document.createElement('p')
                    ProductName.innerText = Products_msg[i].title
        
                    const ProductBtn = document.createElement('button')
                    ProductBtn.innerText = "apžiurėti"
        
                    //root.appendChild(Filter)
                    root.appendChild(ProductBox)
                    ProductBox.appendChild(ProductDiv)
                    ProductDiv.appendChild(ProductImg)
                    ProductDiv.appendChild(ProductName)
                    ProductDiv.appendChild(ProductBtn)
                }
                else{
                    continue
                }
    
            }
        }

        const electronics = () => {

            const ProductBox = document.createElement('div')
            ProductBox.setAttribute('id', 'rootConnector')

            for(let i in Products_msg){
                //console.log('working')
                //console.log(Products_msg[i].title)

                if(Products_msg[i].category === "electronics"){
    
                    const ProductDiv = document.createElement('div')
                    ProductDiv.classList.add("Products")
        
                    const ProductImg = document.createElement('img')
                    ProductImg.src = Products_msg[i].image
        
                    const ProductName = document.createElement('p')
                    ProductName.innerText = Products_msg[i].title
        
                    const ProductBtn = document.createElement('button')
                    ProductBtn.innerText = "apžiurėti"
        
                    //root.appendChild(Filter)
                    root.appendChild(ProductBox)
                    ProductBox.appendChild(ProductDiv)
                    ProductDiv.appendChild(ProductImg)
                    ProductDiv.appendChild(ProductName)
                    ProductDiv.appendChild(ProductBtn)
                }
                else{
                    continue
                }
    
            }
        }

        const menclothing = () => {

            const ProductBox = document.createElement('div')
            ProductBox.setAttribute('id', 'rootConnector')

            for(let i in Products_msg){
                //console.log('working')
                //console.log(Products_msg[i].title)

                if(Products_msg[i].category === "men's clothing"){
    
                    const ProductDiv = document.createElement('div')
                    ProductDiv.classList.add("Products")
        
                    const ProductImg = document.createElement('img')
                    ProductImg.src = Products_msg[i].image
        
                    const ProductName = document.createElement('p')
                    ProductName.innerText = Products_msg[i].title
        
                    const ProductBtn = document.createElement('button')
                    ProductBtn.innerText = "apžiurėti"
        
                    //root.appendChild(Filter)
                    root.appendChild(ProductBox)
                    ProductBox.appendChild(ProductDiv)
                    ProductDiv.appendChild(ProductImg)
                    ProductDiv.appendChild(ProductName)
                    ProductDiv.appendChild(ProductBtn)
                }
                else{
                    continue
                }
    
            }
        }

        const womenclothing = () => {

            const ProductBox = document.createElement('div')
            ProductBox.setAttribute('id', 'rootConnector')

            for(let i in Products_msg){
                //console.log('working')
                //console.log(Products_msg[i].title)

                if(Products_msg[i].category === "women's clothing"){
    
                    const ProductDiv = document.createElement('div')
                    ProductDiv.classList.add("Products")
        
                    const ProductImg = document.createElement('img')
                    ProductImg.src = Products_msg[i].image
        
                    const ProductName = document.createElement('p')
                    ProductName.innerText = Products_msg[i].title
        
                    const ProductBtn = document.createElement('button')
                    ProductBtn.innerText = "apžiurėti"
        
                    //root.appendChild(Filter)
                    root.appendChild(ProductBox)
                    ProductBox.appendChild(ProductDiv)
                    ProductDiv.appendChild(ProductImg)
                    ProductDiv.appendChild(ProductName)
                    ProductDiv.appendChild(ProductBtn)
                }
                else{
                    continue
                }
    
            }
        }

    }catch(error){
        console.log(error)
    }
}
fetching()