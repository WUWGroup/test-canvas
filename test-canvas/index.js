function setup() {
  createCanvas(1000, 1000);
  background("#fbf8f3");
  fill("#807877");
  noStroke();
  rect(0, 0, width, 10);

  rect(0, 0, 10, height);
  rect(width - 10, 0, 10, height);
  rect(0, height - 10, width, 10);
}
