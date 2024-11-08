import colors from 'tailwindcss/colors'

type IPopularProductsChartData = {
  product: string
  amount: number
}

export const data: IPopularProductsChartData[] = [
  { product: 'Calabresa', amount: 59 },
  { product: 'Frango catupiry', amount: 40 },
  { product: 'Moda', amount: 23 },
  { product: 'Carne seca', amount: 102 },
  { product: 'Bacon cheddar', amount: 20 },
  { product: 'Marguerita', amount: 45 },
  { product: 'Atum', amount: 22 },
  // { product: 'Calabresa 2', amount: 59 },
  // { product: 'Frango catupiry 2', amount: 40 },
  // { product: 'Moda 2', amount: 23 },
  // { product: 'Carne seca 2', amount: 102 },
  // { product: 'Bacon cheddar 2', amount: 20 },
  // { product: 'Marguerita 2', amount: 45 },
  // { product: 'Atum 2', amount: 22 },
  // { product: 'Calabresa 3', amount: 59 },
  // { product: 'Frango catupiry 3', amount: 40 },
  // { product: 'Moda 3', amount: 23 },
  // { product: 'Carne seca 3', amount: 102 },
  // { product: 'Bacon cheddar 3', amount: 20 },
  // { product: 'Marguerita 3', amount: 45 },
]

export const COLORS = [
  colors.sky['500'],
  colors.amber['500'],
  colors.violet['500'],
  colors.emerald['500'],
  colors.rose['500'],
]

export const QUERY_KEYS = {
  GET_PROFILE_KEY: ['get-profile'],
  GET_MANAGED_RESTAURANT_KEY: ['get-managed-restaurant'],
  GET_ORDERS: 'get-orders',
  GET_ORDER_DETAILS: 'get-order-details',
  GET_RESERVATIONS: 'get-reservations',
  GET_RESERVATION_DETAILS: 'get-reservation-details',
  GET_METRICS: 'metrics',
  GET_DAY_ORDERS_AMOUNT: 'metrics',
  GET_MONTH_ORDERS_AMOUNT: 'month-orders-amount',
  GET_MONTH_CANCELED_ORDERS_AMOUNT: 'month-canceled-orders-amount',
  GET_MONTH_RECEIPT: 'month-receipt',
  GET_POPULAR_PRODUCTS: 'popular-products',
  GET_RECEIPT_IN_PERIOD: 'daily-receipt-in-period',
} as const

export const NUMERIC_VALUES = {
  MAX_VALUE: 9999999999999,
} as const

export const CLASS_STYLES = {
  ACTION_ICON_DROPDOWN_STYLE: 'mr-2 h-4 w-4',
} as const
