export interface Transaction {
  _id: string;
  order_ref: string;
  email: string;
  name: string;
  passager: number;
  phone: string;
  price: number;
  ticket_type: string;
  total: number;
  issued_date: string;
  status: string;
  special_request: string;
  payment_method: string;
  return_date?: string;
  trip: string;
}
