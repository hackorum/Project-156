AFRAME.registerComponent("scuba-diver-rotation-reader", {
  schema: {
    speedOfMovement: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      this.data.speedOfRoation = this.el.getAttribute("rotation");
      this.data.speedOfMovement = this.el.getAttribute("position");
      var diverPosition = this.data.speedOfMovement;
      if (e.key === "ArrowDown") {
        diverPosition.z += 0.3;
        this.el.setAttribute("position", diverPosition);
      }
      if (e.key === "ArrowUp") {
        diverPosition.z -= 0.3;
        this.el.setAttribute("position", diverPosition);
      }
      if (e.key === "ArrowRight") {
        diverPosition.x += 0.08;
        this.el.setAttribute("position", diverPosition);
      }
      if (e.key === "ArrowLeft") {
        diverPosition.x -= 0.08;
        this.el.setAttribute("position", diverPosition);
      }
    });
  },
});
