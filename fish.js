AFRAME.registerComponent("obstacle", {
  init: function () {
    for (let i = 1; i <= 20; i++) {
      let pos = {
        x: Math.random() * 100 + -50,
        y: Math.random() * 5 + 5,
        z: Math.random() * 60 - 55,
      };
      let id = `fish${i}`;
      this.createFish(id, pos);
    }
  },
  createFish: function (id, position) {
    let island = document.querySelector("#some1");
    let fish = document.createElement("a-entity");
    fish.setAttribute("id", id);
    fish.setAttribute("position", position);
    fish.setAttribute("rotation", { x: 0, y: 180, z: 0 });
    fish.setAttribute("scale", { x: 0.3, y: 0.3, z: 0.3 });
    fish.setAttribute("game", { elementId: `#${id}` });
    fish.setAttribute("gltf-model", "./assets/fish/scene.gltf");
    fish.setAttribute("animation", {
      property: "position",
      to: "100 10 -20",
      loop: true,
      dur: 20000,
    });
    fish.setAttribute("animation-mixer", {});
    fish.setAttribute("static-body", { shape: "box", size: "4 0 0" });
    island.appendChild(fish);
  },
});
