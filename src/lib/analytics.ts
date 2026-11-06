import type { Product } from "@/data/products";

// Declare global dataLayer type
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Safe wrapper around window.dataLayer.push
 * Ensures window.dataLayer exists and avoids prototype poisoning or hydration issues.
 */
export function pushToDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/**
 * Format product object to GA4 item schema
 */
export function formatGa4Item(
  product: Product,
  options?: {
    categoryName?: string;
    index?: number;
    itemListName?: string;
    itemListId?: string;
  }
) {
  return {
    item_id: product.slug,
    item_name: product.name,
    item_brand: product.brand || "Orbit Technologies",
    item_category: options?.categoryName || product.category,
    index: options?.index !== undefined ? options.index + 1 : undefined,
    item_list_name: options?.itemListName,
    item_list_id: options?.itemListId,
    price: 0,
    quantity: 1,
  };
}

/**
 * 1. view_item_list - Category or Catalog page view
 */
export function trackViewItemList(params: {
  itemListId: string;
  itemListName: string;
  products: Product[];
}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  // Clear previous ecommerce object per GA4 documentation
  window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({
    event: "view_item_list",
    ecommerce: {
      currency: "INR",
      item_list_id: params.itemListId,
      item_list_name: params.itemListName,
      items: params.products.slice(0, 30).map((p, idx) =>
        formatGa4Item(p, {
          index: idx,
          itemListId: params.itemListId,
          itemListName: params.itemListName,
        })
      ),
    },
  });
}

/**
 * 2. select_item - User clicked an instrument from a list or grid
 */
export function trackSelectItem(params: {
  itemListId?: string;
  itemListName?: string;
  product: Product;
  index?: number;
}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({
    event: "select_item",
    ecommerce: {
      currency: "INR",
      item_list_id: params.itemListId || "general_list",
      item_list_name: params.itemListName || "Product List",
      items: [
        formatGa4Item(params.product, {
          index: params.index,
          itemListId: params.itemListId,
          itemListName: params.itemListName,
        }),
      ],
    },
  });
}

/**
 * 3. view_item - Product detail page view
 */
export function trackViewItem(product: Product, categoryName?: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({
    event: "view_item",
    ecommerce: {
      currency: "INR",
      value: 0,
      items: [
        formatGa4Item(product, {
          categoryName,
        }),
      ],
    },
  });
}

/**
 * 4. generate_lead - Form submission (Quote, Enquiry, Service, Newsletter)
 */
export function trackGenerateLead(params: {
  formId: string;
  formName: string;
  productOrApplication?: string;
  company?: string;
  city?: string;
  currency?: string;
  value?: number;
}) {
  pushToDataLayer({
    event: "generate_lead",
    currency: params.currency || "INR",
    value: params.value ?? 0,
    form_id: params.formId,
    form_name: params.formName,
    product_application: params.productOrApplication || "Not specified",
    lead_company: params.company || undefined,
    lead_city: params.city || undefined,
  });
}

/**
 * 5. contact_click - Direct contact click (Phone, Email, WhatsApp)
 */
export function trackContactClick(params: {
  type: "phone" | "email" | "whatsapp";
  value: string;
  context?: string;
}) {
  pushToDataLayer({
    event: "contact_click",
    contact_type: params.type,
    contact_value: params.value,
    contact_context: params.context || "global",
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
}

/**
 * 6. file_download - PDF brochure or specification sheet download
 */
export function trackFileDownload(params: {
  fileName: string;
  fileUrl: string;
  productName?: string;
}) {
  const extension = params.fileUrl.split(".").pop() || "pdf";
  pushToDataLayer({
    event: "file_download",
    file_name: params.fileName,
    file_url: params.fileUrl,
    file_extension: extension,
    link_url: params.fileUrl,
    link_text: params.fileName,
    product_name: params.productName || "General Brochure",
  });
}

/**
 * 7. search - Product search query
 */
export function trackCatalogSearch(searchTerm: string, resultsCount: number) {
  if (!searchTerm.trim()) return;
  pushToDataLayer({
    event: "search",
    search_term: searchTerm.trim(),
    results_count: resultsCount,
  });
}

/**
 * 8. filter_products - Filter changed in catalog
 */
export function trackCatalogFilter(filterType: string, filterValue: string) {
  if (!filterValue || filterValue === "all") return;
  pushToDataLayer({
    event: "filter_products",
    filter_type: filterType,
    filter_value: filterValue,
  });
}
