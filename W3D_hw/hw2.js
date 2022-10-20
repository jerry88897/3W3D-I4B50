let vx = document.getElementById("vx");
let vy = document.getElementById("vy");
let vz = document.getElementById("vz");
let wx = document.getElementById("wx");
let wy = document.getElementById("wy");
let wz = document.getElementById("wz");
let dot = document.getElementById("dot");
let cx = document.getElementById("cx");
let cy = document.getElementById("cy");
let cz = document.getElementById("cz");
let botton = document.getElementById("botton");

botton.addEventListener("click", function (e) {
  var v = new THREE.Vector3(
    parseInt(vx.value),
    parseInt(vy.value),
    parseInt(vz.value)
  );
  var w = new THREE.Vector3(
    parseInt(wx.value),
    parseInt(wy.value),
    parseInt(wz.value)
  );
  var dotProduct = v.clone().dot(w.clone());
  var crossProduct = v.clone().cross(w.clone());
  dot.value = dotProduct;
  cx.value = crossProduct.x;
  cy.value = crossProduct.y;
  cz.value = crossProduct.z;
});
