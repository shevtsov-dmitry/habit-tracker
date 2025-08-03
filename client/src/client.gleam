import lustre
import lustre/attribute
import lustre/element/html

// html.div([], [
//   html.h1([], [html.text("Hello, world!")]),
// ]),

pub fn main() {
  let app = lustre.element()
  let assert Ok(_) = lustre.start(app, "#app", Nil)

  Nil
}
