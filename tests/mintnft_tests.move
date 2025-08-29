
#[test_only]
module mintnft::mintnft_tests;
// uncomment this line to import the module
// use mintnft::mintnft;

const ENotImplemented: u64 = 0;

#[test]
fun test_mintnft() {
    let a: u64 = 1;
    assert!(a == 1, 1);
}

#[test, expected_failure(abort_code = ::mintnft::mintnft_tests::ENotImplemented)]
fun test_mintnft_fail() {
    abort ENotImplemented
}

