const sathiya = "sathiya"
const ramesh = "ramesh"
let sathiyaAction = () => {
    console.log("sathiyaAction")
    return { type: sathiya }
}
let rameshAction = () => {
    console.log("rameshAction")
    return { type: ramesh }
}
export { sathiyaAction, rameshAction, sathiya, ramesh}