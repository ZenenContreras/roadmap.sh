const names = [
  "John Doe",
  "Jane Smith",
  "Alice Johnson",
  "Bob Brown",]
const testimonials = [
  "This is the best service I've ever used. Highly recommend!",
  "Absolutely fantastic! Will definitely use again.",
  "A game changer in the industry. I'm very impressed.",
  "Not what I expected. Could use some improvements."]

const testimonio = document.getElementById("testimonio1");
const nombre = document.getElementById("nombre1");
const btn = document.getElementById("more");

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * testimonials.length);
  testimonio.innerHTML = testimonials[randomIndex];
  nombre.innerText = names[randomIndex];
})