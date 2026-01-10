const images = [
    "/images/art/image-1.gif",
    "/images/art/image-2.gif",
    "/images/art/image-3.gif",
    "/images/art/Machine_Gun_Preview.gif",
    "/images/art/Tileset(Preview).gif",
    "/images/art/Tileset_Cargo_Preview.png",
    "/images/art/Preview.gif",
    "/images/art/RazrR5Logo_V1.gif",
    "/images/art/Preview.png",
    "/images/art/Final.gif",
    "/images/art/Scene_Animation_V1.gif",
    "/images/art/2FGTV_Animation_V1.gif",
    "/images/art/Intro.gif",
    "/images/art/Preview_birds.gif",
    "/images/art/AnimationsTestScene_4.gif",
    "/images/art/Preview_fish.gif",
    "/images/art/Preview_knight.gif",
    "/images/art/Animations(Preview).gif",
    "/images/art/Preview_fire.gif",
    "/images/art/MonkeyPreview.gif",
    "/images/art/AnimationPreview.gif",
    "/images/art/Werewolves.png",
    "/images/art/GrayfruitFanart.gif",
    "/images/art/Preview_Animals.gif",
    "/images/art/Mushzard.png",
    "/images/art/Michelangelo1-bit(Study).png",
    "/images/art/KnightAndGoblin.png",
    "/images/art/GILT8_Palette_example.png",
    "/images/art/SK_SugxrCrxsh.png",
    "/images/art/Palette_Example_MikuColor.png",
    "/images/art/Snake_Final_Example.gif",
    "/images/art/Urania.gif",
    "/images/art/WingedWoman.png",
    "/images/art/Brillum_Fanart.gif",
    "/images/art/Clover_Fanart.gif",
    "/images/art/StillLifeV2.png",
    "/images/art/Slime_Rancher_Collab.gif",
    "/images/art/Cyclops.gif",
    "/images/art/swrcrwlrs_splashscreen.png",
    "/images/art/MetalSlugReshot.png",
    "/images/art/Wasp(Preview).gif",
    "/images/art/Link_PokemonTrainer.png"
];

const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");


images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.className = "gallery-image";
  img.loading = "lazy";

  img.addEventListener("click", () => {
    popupImage.src = src;
    popup.classList.add("active");
  });

  gallery.appendChild(img);
});

popup.addEventListener("click", () => {
  popup.classList.remove("active");
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    popup.classList.remove("active");
  }
});