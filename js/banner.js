const banners = [
    {
      title: "Descubre Productos Únicos",
      text: "Personalizados especialmente para ti. ¡Explora nuestra colección ahora!",
      link: "Impresión 3D",
      linkHref: "#mates-macetas"
    },
    {
      title: "Crea Objetos Personalizados",
      text: "Innovación en tus manos con nuestra tecnología de impresión.",
      link: "Explorar Modelos",
      linkHref: "#modelos"
    },
    {
      title: "Regalos Únicos",
      text: "Encuentra el regalo perfecto con un toque especial.",
      link: "Ver Ideas",
      linkHref: "#regalos"
    }
  ];
  
  let currentIndex = 0;
  
  function changeBanner() {
    // Accede a los elementos del DOM
    const titleElement = document.getElementById("banner-title");
    const textElement = document.getElementById("banner-text");
    const linkElement = document.getElementById("banner-link");
  
    // Cambia el contenido
    const currentBanner = banners[currentIndex];
    titleElement.textContent = currentBanner.title;
    textElement.textContent = currentBanner.text;
    linkElement.textContent = currentBanner.link;
    linkElement.href = currentBanner.linkHref;
  
    // Avanza al siguiente banner
    currentIndex = (currentIndex + 1) % banners.length;
  }
  
  // Actualiza cada 5 segundos
  setInterval(changeBanner, 5000);
  
  // Llama una vez al cargar
  changeBanner();
  