const mappers = require("./mappers.js");

const p = { 
    "mapping": {
        "STAY": "0",
        "AWAY": "1",
        "INT": 1234353,
    }
}
const staticMapper = new mappers.StaticMapper(p)

test.each`
    a           | expected
    ${"STAY"}   | ${"0"}
    ${"AWAY"}   | ${"1"}
    ${"N/A"}    | ${"N/A"}
    ${"INT"}    | ${1234353}
`('returns $expected when $a given', ({a,expected}) => {
    expect(staticMapper.map(a)).toBe(expected);
});

