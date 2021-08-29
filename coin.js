AFRAME.registerComponent("coin", {
  init: function () {
    for (let i = 1; i <= 20; i++) {
      let pos = {
        x: Math.random() * 100 + -50,
        y: Math.random() * 5 + 5,
        z: Math.random() * 60 + -40,
      };
      let id = `coin${i}`;
      this.createCoin(id, pos);
    }
  },
  createCoin: function (id, position) {
    let island = document.querySelector("#some2");
    let coin = document.createElement("a-entity");
    coin.setAttribute("id", id);
    coin.setAttribute("position", position);
    coin.setAttribute("rotation", { x: 0, y: 180, z: 0 });
    coin.setAttribute("scale", { x: 15, y: 15, z: 15 });
    coin.setAttribute("geometry", { primitive: "circle", radius: 0.06 });
    coin.setAttribute("game", { elementId: `#${id}` });
    coin.setAttribute("material", {
      color: "orange",
      opacity: 1,
      side: "double",
    });
    coin.setAttribute("static-body", { shape: "sphere", sphereRadius: 1 });
    island.appendChild(coin);
  },
});
