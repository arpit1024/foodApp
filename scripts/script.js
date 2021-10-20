async function getData(url) {
 
        let res = await fetch(url)
        let foodData = await res.json();
       return foodData;
}

function appendData(data ,container)
{
    data.meals.forEach(element => {
        let div = document.createElement('div');
        let image = document.createElement('img');
        let name = document.createElement('div');
        let category = document.createElement('p');
        let area = document.createElement('div');

        name.textContent ="Meal Name: "+ element.strMeal;
        image.src = element.strMealThumb
        category.textContent ="Category: "+ element.strCategory;
        area.textContent ="Origin: "+ element.strArea;
        div.append(image,name,category,area);
        container.appendChild(div)
        div.style.cursor = "pointer";
        div.onclick = function(){
            localStorage.setItem("selectedReceipe", JSON.stringify(element))
            window.location.href = "showReceipe.html"
        }
    });
}

function appendWholeReceipe(data,container){
  
     let h2 = document.createElement('h2');
     h2.textContent = "Name of Receipe: "+ data.strMeal;
     let h3 = document.createElement('h3');
     h3.textContent ="Origin: "+  data.strArea;
     let image = document.createElement('img');
     image.src= data.strMealThumb;
     container.append(h2,h3,image);
    
    for(var key in data)
     {
         if(data[key] != null && key != "strMealThumb"&& data[key] != " "&& data[key] != "" && key !="strMeal"&& key !="strArea")
         {
           let div = document.createElement('div');
           div.textContent = key + ": "+ data[key];
           div.style.marginTop = "8px"
           div.style.background ="#f6f6f7"
           div.style.padding = "5px"
           container.append(div);
       }     
    }
}
export {getData, appendData};
export {appendWholeReceipe};