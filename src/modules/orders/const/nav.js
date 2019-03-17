const nav = [{
  type: 'group',
  title: 'Cards and alts',
  collapse: false,
  children: [{
    type: 'link',
    path: '/orders/all-transactions',
    icon: 'orders_all_transactions',
    title: 'All Transactions'
  }, {
    type: 'link',
    path: '/orders/payments',
    icon: 'orders_payments',
    title: 'Payments'
  }, {
    type: 'link',
    path: '/orders/refunds',
    icon: 'orders_refunds',
    title: 'Refunds'
  }, {
    type: 'link',
    path: '/orders/payouts',
    icon: 'orders_payouts',
    title: 'Payouts'
  }]
}, {
  type: 'group',
  title: 'Crypto-currencies',
  collapse: false,
  children: [{
    type: 'link',
    path: '/orders/crypto-all',
    icon: 'orders_crypto_all',
    title: 'All transactions'
  }, {
    type: 'link',
    path: '/orders/crypto-payments',
    icon: 'orders_crypto_payments',
    title: 'Payments'
  }]
}]

export default nav;
