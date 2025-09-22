interface IPrice {
  price: number;
  discount: number;
  isInstallment: boolean;
  mounts: number;
}

const totalPrice = (data: IPrice): number => {
  return (data.price - (data.price * data.discount) / 100) / data.mounts;
};
const price1: IPrice = { price: 100000, discount: 25, isInstallment: true, mounts: 12 };

const price: number = totalPrice(price1);

console.log(price);
