async function recommendGifts() {
  const prompt = document.getElementById('userPrompt').value.toLowerCase();
  const resultBox = document.getElementById('results');
  resultBox.innerHTML = '';

  const loadingElement = document.getElementById('loading-animation');
  loadingElement.style.display = 'block';

  const animationInstance = lottie.loadAnimation({
    container: loadingElement,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation.json'
  });

  const category = getCategoryFromPrompt(prompt);

  if (!category) {
    animationInstance.destroy();
    loadingElement.style.display = 'none';
    resultBox.innerHTML = "<p>Sorry, we couldn't match your request. Try different words!</p>";
    return;
  }

  try {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json();

    const gifts = data.products.slice(0, 6); // top 6 only
    showGifts(gifts);

    // Stop the animation after gifts are shown
    animationInstance.destroy();
    loadingElement.style.display = 'none';
  } catch (err) {
    console.error(err);
    animationInstance.destroy();
    loadingElement.style.display = 'none';
    resultBox.innerHTML = '<p>Something went wrong while fetching gifts.</p>';
  }
}


function getCategoryFromPrompt(prompt) {
  if (prompt.includes("boy") || prompt.includes("gamer")) return "smartphones";
  if ((prompt.includes("boy") || prompt.includes("teen") || prompt.includes("kid")) ||
    (prompt.includes("gamer") || prompt.includes("game") || prompt.includes("gaming") || prompt.includes("smartphone") || prompt.includes("iphone"))) {
  return "smartphones";
}

  //girls
  if (
    prompt.includes("girl") ||
    prompt.includes("teen girl") ||
    prompt.includes("teenage girl") ||
    prompt.includes("daughter") ||
    prompt.includes("sister") ||
    prompt.includes("girlfriend")
  ) return "tops";
  
  //student
  if (
    prompt.includes("laptop") ||
    prompt.includes("student") ||
    prompt.includes("college") ||
    prompt.includes("university") ||
    prompt.includes("school") ||
    prompt.includes("studying") ||
    prompt.includes("exam") ||
    prompt.includes("homework") ||
    prompt.includes("assignments") ||
    prompt.includes("online classes") ||
    prompt.includes("online learning") ||
    prompt.includes("remote learning") ||
    prompt.includes("lecture") ||
    prompt.includes("notebook") ||
    prompt.includes("laptop for study") ||
    prompt.includes("studies") ||
    prompt.includes("tech") || 
    prompt.includes("gadget") 
  ) return "laptops";
  
  //Women's watch
  if (
    prompt.includes("watch") &&
    prompt.includes("women") ||
    prompt.includes("mom") ||
    prompt.includes("mother") ||
    prompt.includes("mum") ||
    prompt.includes("mummy") ||
    prompt.includes("amma") ||      
    prompt.includes("mama") ||    
    prompt.includes("mommy") ||
    prompt.includes("mami") ||
    prompt.includes("gift for mom") ||
    prompt.includes("present for mom") ||
    prompt.includes("gift for mother") ||
    prompt.includes("mother's day") ||
    prompt.includes("mom's birthday") ||
    prompt.includes("gift for mummy") ||
    prompt.includes("gift for amma") ||
    prompt.includes("surprise for mom")
  ) return "womens-watches";

  //Women's Jewellery
  if (
    prompt.includes("women") &&
    prompt.includes("jewellery") ||
    prompt.includes("necklace") ||
    prompt.includes("earrings") ||
    prompt.includes("bracelet") ||
    prompt.includes("bangles") ||
    prompt.includes("ring") ||
    prompt.includes("necklace")
  ) return "womens-jewellery";
  
  


  if (prompt.includes("dad") || prompt.includes("father")) return "mens-watches";
  if (prompt.includes("smell") || prompt.includes("perfume")) return "fragrances";
  if (prompt.includes("home") || prompt.includes("kitchen")) return "home-decoration";
  if (prompt.includes("fitness")  || prompt.includes("men") || prompt.includes("gym")) return "mens-shoes";
  if (prompt.includes("fitness")  || prompt.includes("women") || prompt.includes("shoes")) return "womens-shoes";
  if (prompt.includes("cooking") || prompt.includes("chef")) return "groceries";
  if (prompt.includes("fashion")  && prompt.includes("women") || prompt.includes("style")) return "womens-dresses";
  if (prompt.includes("fashion") && prompt.includes("men")  || prompt.includes("style")) return "mens-shirts";
  if (prompt.includes("photography") || prompt.includes("camera")) return "smartphones";
  

  if (
    prompt.includes("bike") ||
    prompt.includes("motorbike") ||
    prompt.includes("motorcycle") ||
    prompt.includes("biker") ||
    prompt.includes("rider") ||
    prompt.includes("motor rider") ||
    prompt.includes("biking") ||
    prompt.includes("motorbiking") ||
    prompt.includes("bike lover") ||
    prompt.includes("gift for biker") ||
    prompt.includes("bike enthusiast") ||
    prompt.includes("motorbike lover") ||
    prompt.includes("bike accessories") ||
    prompt.includes("gift for someone who loves bikes") ||
    prompt.includes("present for motorcycle fan") ||
    prompt.includes("gift for a rider")
  ) return "motorcycle";
  
  

  if (
    prompt.includes("grocery") ||
    prompt.includes("groceries") ||
    prompt.includes("food") ||
    prompt.includes("snack") ||
    prompt.includes("snacks") ||
    prompt.includes("eating") ||
    prompt.includes("kitchen essentials") ||
    prompt.includes("cooking essentials") ||
    prompt.includes("ingredients") ||
    prompt.includes("daily needs") ||
    prompt.includes("breakfast items") ||
    prompt.includes("lunch items") ||
    prompt.includes("meal prep") ||
    prompt.includes("pantry") ||
    prompt.includes("organic food") ||
    prompt.includes("healthy snacks") ||
    prompt.includes("chips") ||
    prompt.includes("chocolates") ||
    prompt.includes("instant food") ||
    prompt.includes("gift for a foodie") ||
    prompt.includes("food lover") ||
    prompt.includes("cooking stuff") ||
    prompt.includes("home cook")
  ) return "groceries";
  
  if (prompt.includes("furniture") || prompt.includes("sofa") || prompt.includes("table")) return "furniture";
  if (prompt.includes("shirt") || prompt.includes("formal wear") || prompt.includes("office")) return "mens-shirts";
  if (prompt.includes("sunglass") || prompt.includes("shades")) return "sunglasses";
  // Furniture-related
if (
  prompt.includes("furniture") ||
  prompt.includes("sofa") ||
  prompt.includes("table") ||
  prompt.includes("chair") ||
  prompt.includes("bed") ||
  prompt.includes("cupboard") ||
  prompt.includes("bookshelf")
) return "furniture";

// Women's Watches
if (
  (prompt.includes("watch") && prompt.includes("woman")) ||
  (prompt.includes("watch") && prompt.includes("lady")) ||
  (prompt.includes("watch") && prompt.includes("girl")) ||
  prompt.includes("womens watch") ||
  prompt.includes("women's watch")
) return "womens-watches";

// Men's Watches
if (
  (prompt.includes("watch") && prompt.includes("man")) ||
  (prompt.includes("watch") && prompt.includes("guy")) ||
  prompt.includes("mens watch") ||
  prompt.includes("men's watch")
) return "mens-watches";

// Women's Shoes
if (
  (prompt.includes("sandels") && prompt.includes("woman")) ||
  (prompt.includes("shoes") && prompt.includes("lady")) ||
  (prompt.includes("shoes") && prompt.includes("girl")) ||
  prompt.includes("womens shoes") ||
  prompt.includes("women's shoes")
) return "womens-shoes";


// Men's Shirts
if (
  prompt.includes("shirt") ||
  prompt.includes("formal wear") ||
  prompt.includes("office wear") ||
  prompt.includes("business attire") ||
  prompt.includes("mens shirt") ||
  prompt.includes("men's shirt")
) return "mens-shirts";



// Sunglasses
if (
  prompt.includes("sunglass") ||
  prompt.includes("shades") ||
  prompt.includes("eyewear") ||
  prompt.includes("sun shades") ||
  prompt.includes("cool glasses")
) return "sunglasses";


// Home & Kitchen
if (prompt.includes("home") || prompt.includes("kitchen") || prompt.includes("furniture")) return "home-decoration";
if (prompt.includes("cooking") || prompt.includes("baking") || prompt.includes("chef") || prompt.includes("cookware")) return "home-decoration";
if (prompt.includes("cleaning") || prompt.includes("vacuum")) return "home-decoration";



// Fashion
if (prompt.includes("shoes") || prompt.includes("sneakers")) return "mens-shoes";
if (prompt.includes("jewellery") || prompt.includes("ring") || prompt.includes("necklace")) return "womens-jewellery";
if (prompt.includes("bag") || prompt.includes("purse") || prompt.includes("handbag")) return "womens-bags";

// Fitness & Sports
if (prompt.includes("fitness") || prompt.includes("gym") || prompt.includes("exercise") || prompt.includes("workout")) return "mens-shoes";
if (prompt.includes("sports") || prompt.includes("football") || prompt.includes("cricket")) return "mens-shoes";


// Food & Grocery
if (prompt.includes("grocery") || prompt.includes("snacks") || prompt.includes("beverage") || prompt.includes("food")) return "groceries";



  return "No such category found";
}

function showGifts(gifts) {
  const resultBox = document.getElementById('results');
  resultBox.innerHTML = '';

  gifts.forEach(gift => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${gift.thumbnail}" alt="${gift.title}">
      <h3>${gift.title}</h3>
      <p>$${gift.price}</p>
      <a href="https://dummyjson.com/products/${gift.id}" target="_blank">View</a>
    `;
    resultBox.appendChild(card);
  });
}


particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;