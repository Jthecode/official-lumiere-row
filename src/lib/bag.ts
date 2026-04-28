export const BAG_STORAGE_KEY = "lumiererow-bag";

export type BagItem = {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  priceId: string;
  formattedPrice: string;
  amount: number | null;
  quantity: number;
};

export function readBag(): BagItem[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(BAG_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as BagItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeBag(items: BagItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(BAG_STORAGE_KEY, JSON.stringify(items));
}

export function clearBagStorage() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(BAG_STORAGE_KEY);
}

export function formatMoneyFromCents(amount: number | null) {
  if (amount === null) return "Price unavailable";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount / 100);
}