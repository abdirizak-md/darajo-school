export const FEE_STATUS = {
  PENDING: 'pending',
  PARTIAL: 'partial',
  PAID: 'paid',
  OVERDUE: 'overdue',
  WAIVED: 'waived',
  REFUNDED: 'refunded'
};

export const PAYMENT_METHODS = {
  CASH: 'cash',
  CHEQUE: 'cheque',
  BANK_TRANSFER: 'bank_transfer',
  CREDIT_CARD: 'credit_card',
  DEBIT_CARD: 'debit_card',
  ONLINE: 'online',
  UPI: 'upi'
};

export const FEE_CATEGORIES = {
  TUITION: 'tuition_fee',
  ADMISSION: 'admission_fee',
  EXAMINATION: 'examination_fee',
  LIBRARY: 'library_fee',
  SPORTS: 'sports_fee',
  LABORATORY: 'laboratory_fee',
  TRANSPORT: 'transport_fee',
  HOSTEL: 'hostel_fee',
  DEVELOPMENT: 'development_fee',
  OTHER: 'other_fee'
};

export const PAYMENT_STATUS = {
  SUCCESS: 'success',
  FAILED: 'failed',
  PENDING: 'pending',
  REFUNDED: 'refunded',
  CANCELLED: 'cancelled'
};

export const RECEIPT_TYPES = {
  ORIGINAL: 'original',
  DUPLICATE: 'duplicate',
  ONLINE: 'online'
};

export const LATE_FEE_RULES = {
  gracePeriodDays: 15,
  lateFeePercentage: 0.02, // 2% per month
  maxLateFeeAmount: 1000
};