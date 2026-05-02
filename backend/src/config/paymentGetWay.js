export const paymentConfig = {
  razorpay: {
    keyId: process.env.RAZORPAY_KEY_ID,
    keySecret: process.env.RAZORPAY_KEY_SECRET,
    webhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET
  },
  
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET
  },
  
  paytm: {
    merchantId: process.env.PAYTM_MERCHANT_ID,
    merchantKey: process.env.PAYTM_MERCHANT_KEY,
    website: process.env.PAYTM_WEBSITE,
    industryType: process.env.PAYTM_INDUSTRY_TYPE
  },
  
  defaultGateway: process.env.DEFAULT_PAYMENT_GATEWAY || 'razorpay',
  
  currency: 'INR',
  
  // Fee collection settings
  feeCollection: {
    allowPartialPayment: true,
    allowOnlinePayment: true,
    allowCashPayment: true,
    minPaymentAmount: 100,
    maxPaymentAmount: 100000,
    receiptPrefix: 'REC',
    invoicePrefix: 'INV'
  }
};