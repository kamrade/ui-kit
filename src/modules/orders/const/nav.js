const nav = [{
  type: 'group',
  title: 'Cards and alts',
  collapse: false,
  children: [{
    type: 'link',
    path: '/orders/sandbox',
    icon: 'orders_all_transactions',
    title: 'All Transactions'
  }, {
    type: 'link',
    path: '/orders/atoms',
    icon: 'orders_payments',
    title: 'Payments'
  }, {
    type: 'link',
    path: '/refunds',
    icon: 'orders_refunds',
    title: 'Refunds'
  }, {
    type: 'link',
    path: '/payouts',
    icon: 'orders_payouts',
    title: 'Payouts'
  }]
}, {
  type: 'group',
  title: 'Crypto-currencies',
  collapse: false,
  children: [{
    type: 'link',
    path: '/crypto-all',
    icon: 'orders_all_transactions',
    title: 'All transactions'
  }, {
    type: 'link',
    path: '/crypto-payments',
    icon: 'orders_payments',
    title: 'Payments'
  }]
}]

export default nav;
