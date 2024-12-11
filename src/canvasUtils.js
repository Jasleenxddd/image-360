// Extend CanvasRenderingContext2D with transformedPoint method
CanvasRenderingContext2D.prototype.transformedPoint = function (x, y) {
    const transform = this.getTransform();
    const inverted = transform.invertSelf();
    return {
      x: inverted.a * x + inverted.c * y + inverted.e,
      y: inverted.b * x + inverted.d * y + inverted.f,
    };
  };
  