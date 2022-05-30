let sp1 = {masp:1, tensp:"Chau hoa 1", hinhanh:'../img/chauhoa1.PNG', soluong:1, dongia:100000, mota:'Chiều Dài: 13cm -Chiều Rộng: 13cm -Chiều Dày: 11cm'}
let sp2 = {masp:2, tensp:"Chau hoa 2", hinhanh:'../img/chauhoa2.PNG', soluong:10, dongia:200000, mota:'Chiều Dài: 15cm -Chiều Rộng: 15cm -Chiều Dày: 11cm'}
let sp3 = {masp:3, tensp:"Chau hoa 3", hinhanh:'../img/chauhoa3.PNG', soluong:18, dongia:300000, mota:'Chiều Dài: 23cm -Chiều Rộng: 30cm -Chiều Dày: 11cm'}
let sp4 = {masp:4, tensp:"Chau hoa 4", hinhanh:'../img/chauhoa4.PNG', soluong:16, dongia:400000, mota:'Chiều Dài: 18cm -Chiều Rộng: 30cm -Chiều Dày: 11cm'}
let sp5 = {masp:5, tensp:"Chau hoa 5", hinhanh:'../img/chauhoa5.PNG', soluong:11, dongia:150000, mota:'Chiều Dài: 30cm -Chiều Rộng: 45cm -Chiều Dày: 11cm'}

let dssp = [sp1, sp2, sp3, sp4, sp5]

// Array --> Json

localStorage.setItem("dssp", JSON.stringify(dssp))

let acc1 = {email:'lelan@gmail.com', pw:'123'}
let acc2 = {email:'lelanh@gmail.com', pw:'223'}

let accounts = [acc1, acc2]

localStorage.setItem("accounts", JSON.stringify(accounts))