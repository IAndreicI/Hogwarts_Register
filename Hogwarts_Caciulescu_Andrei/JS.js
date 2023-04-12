
let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let mage = document.getElementById('mage');

window.addEventListener('scroll', function() 
{
  let value = window.scrollY;
  stars.style.left = value * 0.2 + 'px';
  if (value <= 500) {
  moon.style.top = value * 1 + 'px';
}
  
})



let search = document.getElementById('search');
let searchBtn = document.getElementById('myBtn');
let result = document.getElementById('result');

search.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('myBtn').click();
  }
});

let House = () => {
  let HouseName = search.value;
  if (HouseName.length <= 0) {
    result.innerHTML = `<h2 class="tx">Please enter a house name</h2>`;
  } else {
    let xh = new XMLHttpRequest();
    xh.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let xmlData = this.responseXML;
        if (xmlData) {
          let hoes = xmlData.getElementsByTagName('house');
          let hoe = null;
          for (let i = 0; i < hoes.length; i++) {
            let title =
            hoes[i].getElementsByTagName('title')[0].childNodes[0]
                .nodeValue;

            if (title.toLowerCase() === HouseName.toLowerCase()) {
              hoe = hoes[i];
              break;
            }
          }
          if (hoe) {
            let title =
              hoe.getElementsByTagName('title')[0].childNodes[0].nodeValue;
            let texbox =
            hoe.getElementsByTagName('texbox')[0].childNodes[0].nodeValue;
           

            result.innerHTML = `
              <div class="info">
                
                <div>
                  <h1 class="h2">${title}</h1>

                  <div class="texbox">
                    <h1>${texbox}</h1>
                  </div>
                 
                  
                </div>
              </div>

              
            
            `;
          } 
          else {
            result.innerHTML = `
              <h2 class="msg">House not found</h2>
              
            `;
          }
        } else {
          result.innerHTML = `<h2 class="msg">XML data not found</h2>`;
        }
      } else if (this.readyState == 4) {
        result.innerHTML = `<h2 class="msg">Error Occurred: Could not load XML data</h2>`;
      }
    };
    xh.open('GET', 'h.xml', true);
    xh.send();
  }
};

searchBtn.addEventListener('click', House);
window.addEventListener('load', House);
