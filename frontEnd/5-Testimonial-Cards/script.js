const names = [
  "John Doe",
  "Jane Smith",
  "Alice Johnson",
  "Bob Brown",
]
const testimonials = [
  "This is the best service I've ever used. Highly recommend!",
  "Absolutely fantastic! Will definitely use again.",
  "A game changer in the industry. I'm very impressed.",
  "Not what I expected. Could use some improvements."
]

// Seleccionar elementos usando clases en lugar de IDs
const testimonio = document.querySelector(".testimonio1");
const nombre = document.querySelector(".nombre1");
const btnMore = document.querySelector(".more");
const btnLess = document.querySelector(".less");

// Variable para mantener el índice actual
let currentIndex = 0;

// Función para actualizar el testimonio
function updateTestimonial() {
  testimonio.textContent = testimonials[currentIndex];
  nombre.textContent = names[currentIndex];
}

// Evento para el botón "more"
btnMore.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial();
});

// Evento para el botón "less"
btnLess.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
});

// Inicializar con el primer testimonio
updateTestimonial();