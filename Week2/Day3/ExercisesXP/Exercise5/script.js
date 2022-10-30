const family ={
    lastname: "mek",
    member_amount: 4,
    member_names: ["ana", "misho", "mom", "dad"],
}
for (const lastname in family) {
    if (family.hasOwnProperty.call(family, lastname)) {
        const element = family[lastname];
        console.log(family.lastname)
    }
}
for (const member_amount in family) {
    if (family.hasOwnProperty.call(family, member_amount)) {
        const element = family[member_amount];
        console.log(family.member_amount)
    }
}
for (const member_names in family) {
    if (family.hasOwnProperty.call(family, member_names)) {
        const element = family[member_names];
        console.log(family.member_names)
    }
}