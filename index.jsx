@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');

* html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.gradient-bg-hero {
  background-color: #131835;
  background-image: radial-gradient(
      at 0% 0%,
      hsl(231deg 47% 14%) 0%,
      transparent 50%
    ),
    radial-gradient(at 50% 0%, hsl(333deg 85% 53%) 0, transparent 50%),
    radial-gradient(at 100% 0%, hsla(339, 49%, 30%, 1) 0, transparent 50%);
}

.gradient-bg-artworks {
  background-color: #0f0e13;
  background-image: radial-gradient(
      at 50% 50%,
      hsl(302deg 25% 18%) 0,
      transparent 50%
    ),
    radial-gradient(at 0% 0%, hsla(253, 16%, 7%, 1) 0, transparent 50%),
    radial-gradient(at 50% 50%, hsla(339, 39%, 25%, 1) 0, transparent 50%);
}

.gradient-bg-footer {
  background-color: #131835;
  background-image: radial-gradient(
      at 20% 100%,
      hsl(333deg 85% 53%) 0,
      transparent 40%
    ),
    radial-gradient(at 50% 120%, hsla(339, 49%, 30%, 1) 0, transparent 40%);
}

.text-gradient {
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.label-gradient {
  background: rgb(19, 24, 53);
  background: linear-gradient(
    31deg,
    rgba(19, 24, 53, 1) 0%,
    rgba(237, 33, 124, 0) 100%
  );
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.lds-dual-ring {
  display: inline-block;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@tailwind base;
@tailwind components;
@tailwind utilities;
