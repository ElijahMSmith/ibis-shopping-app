/*

{
    id: int,
    name: string,
    description: string,
    price: float,
    discount: int,
    group: string,
    numberAvailable: int,
    seller: string,
    image: string,
    creationDate: date
}

*/

const dummyProducts = [
	{
		id: 0,
		name: "Really Cool Lamp",
		description: "What can I say, it's a really cool lamp.",
		price: 100.0, // floating point numbers
		discount: 20,
		seller: "Eli",
		image:
			"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1UQ7N05AzKtrH9cv3ApNwu56O4ocb9WecJLTQzbtF_De6Tg9-h3lvACJwak_Sh2G69n4a-LtpN_L_0FY4Zp7pWNl0gxGpKR9QT2Q6e4oLKzpxctVjrP62EA",
	},
	{
		id: 0,
		name: "Really Cool Chair",
		description: "What can I say, it's a really cool chair.",
		price: 350.0, // floating point numbers
		discount: 0,
		seller: "Eli",
		image:
			"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQOK7fRyIrmxv65kDpFYxhAtYl9xWCQHj9CGq4dff_QQTGCuPUQ__Z76qFaPIGcOcLmPl4lAF6DL_yjyUAGEIyQF5RcXRbKBzw6A5V9jPY",
	},
];

export { dummyProducts };
