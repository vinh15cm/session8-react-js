/*
1,union : kiểu kết hợp |

2,intersection:kiểu kết hợp &
*/
let a: number | string | undefined = 5;
a = "hồng";
//tham chiếu (array);
let numbers: (number | string)[] = [1, 2, 3, 5]
let b: number = 6;
//
type Student = {
    name: string,
    address: string,
    phone: string,
}
type A = {
    name: string,
    address: string,
    phone: string,
}
type B = {
    email: string,
}
type C = A & B;
let obj: A = {
    name: "hoa",
    address: "hà nội",
    phone: "709898070978"
}
let obj1: C = {
    name: "vinh",
    address: "hcm",
    phone: "835098238",
    email: "vinh@gmail.com",
}


