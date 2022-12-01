export interface CartModel {
  readonly date: string;
  readonly products: CartProduct[];
}

interface CartProduct {
  readonly productId: number;
  readonly quantity: number;
}
