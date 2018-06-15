(function() {var implementors = {};
implementors["log"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"log/struct.SetLoggerError.html\" title=\"struct log::SetLoggerError\">SetLoggerError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"log/struct.ShutdownLoggerError.html\" title=\"struct log::ShutdownLoggerError\">ShutdownLoggerError</a>",];
implementors["mio"] = ["impl&lt;M:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"mio/enum.NotifyError.html\" title=\"enum mio::NotifyError\">NotifyError</a>&lt;M&gt;",];
implementors["nix"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"nix/enum.Errno.html\" title=\"enum nix::Errno\">Errno</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"nix/enum.Error.html\" title=\"enum nix::Error\">Error</a>",];
implementors["notify"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a> for <a class=\"enum\" href=\"notify/enum.Error.html\" title=\"enum notify::Error\">Error</a>",];
implementors["rand"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/jitter/enum.TimerError.html\" title=\"enum rand::jitter::TimerError\">TimerError</a>",];
implementors["syn"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"syn/synom/struct.ParseError.html\" title=\"struct syn::synom::ParseError\">ParseError</a>",];
implementors["time"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"time/struct.OutOfRangeError.html\" title=\"struct time::OutOfRangeError\">OutOfRangeError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"time/enum.ParseError.html\" title=\"enum time::ParseError\">ParseError</a>",];
implementors["walkdir"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"walkdir/struct.Error.html\" title=\"struct walkdir::Error\">Error</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
