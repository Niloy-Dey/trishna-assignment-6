const displayShows = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data = await res.json();
  showAllDisplayData(data.data.tools);
}
displayShows();




const showAllDisplayData = cards => {
  const universeContainer = document.getElementById('btn-container');

  cards.forEach(tool => {
    const toolDiv = document.createElement('div');
    toolDiv.classList.add('col');
    toolDiv.innerHTML = `
      <div class="card p-4 ">
      <img src="${tool.image}" class="card-img-top" alt="...">
      <div class="card-body">
      <h3 class="card-title">Features</h3>
        <h5 class="card-title">1.${tool.features[0]}</h5>
        <h5 class="card-title">2.${tool.features[1]}</h5>
        <h5 class="card-title">3.${tool.features[2]}</h5>
        <hr>
      <div class="d-flex justify-content-between">
      <div>
      <h5 class="card-title">${tool.name}</h5>
      <h5 class="card-title"> <span><i class="fa-solid fa-calendar-days"></i></span>  ${tool.published_in}</h5>
      </div>
    <div>
    <button onClick="showSingleData('${tool.id}')"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="rounded-4 btn btn-outline-danger"><i class="fa-sharp fa-solid fa-arrow-right"> </i></button>
    </div>
      </div>
    </div>
    </div>
      `;
    universeContainer.appendChild(toolDiv);
  })
}



const showSingleData = async (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  const allData = data.data.tools;
  const singleId = allData?.find(tool => id === tool?.id);
  console.log(singleId)
  const { name, image, description } = singleId;

  
  
  const title = document.getElementById('exampleModalLabel').innerText = `${name}`;
  const MoImage = document.getElementById('modal-image').src = `${image}`;
  const moDescription = document.getElementById('description').innerText = description;

 
}

