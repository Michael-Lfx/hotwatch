# hotwatch

[![Cargo Version](http://meritbadge.herokuapp.com/hotwatch)](https://crates.io/crates/hotwatch)
[![Build Status](https://travis-ci.org/francesca64/hotwatch.svg?branch=master)](https://travis-ci.org/francesca64/hotwatch)

[Documentation](https://francesca64.github.io/hotwatch/docs/hotwatch)

`hotwatch` is a Rust library for comfortably watching and handling file changes. It's a thin convenience wrapper over [`notify`](https://github.com/passcod/notify), allowing you to easily spawn handlers.

At least Rust 1.24 is required, due to the requirements of [`parking_lot`](https://github.com/Amanieu/parking_lot).

```rust
use hotwatch::{Hotwatch, Event};

let mut hotwatch = Hotwatch::new().expect("Hotwatch failed to initialize.");
hotwatch.watch("war.png", |event: Event| {
    if let Event::Write(path) = event {
        println!("War has changed.");
    }
}).expect("Failed to watch file!");
```

## Why should I use this instead of [`warmy`](https://github.com/phaazon/warmy)?

`warmy` is a more general solution for responding to resource changes. `hotwatch` is very simplistic and intends to be trivial to integrate.

I've never actually used `warmy`, though. It's probably awesome. I just know that `hotwatch` is really easy to use, and has a sexier name.
