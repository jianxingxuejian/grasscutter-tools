// #[macro_export]
// macro_rules! unwrap_or {
//     ($e:expr, $or_do_what:expr) => {
//         if let Some(d) = $e {
//             d
//         } else {
//             $or_do_what
//         }
//     };
// }
// #[macro_export]
// macro_rules! unwrap_else {
//     ($e:expr, $else_do_what:expr) => {
//         match $e {
//             Ok(x) => x,
//             Err(_) => $else_do_what,
//         }
//     };
// }
