/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | "home"
  | "about"
  | "services"
  | "products"
  | "projects"
  | "process"
  | "global"
  | "tech-docs"
  | "blog"
  | "faq"
  | "contact"
  | "privacy"
  | "terms";

export interface ProductSpec {
  model: string;
  capacity?: string;
  power?: string;
  speed?: string;
  dimensions?: string;
  [key: string]: string | undefined;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "feed-plants" | "fertilizer" | "biomass" | "machinery" | "ancillary";
  features: string[];
  specs: ProductSpec[];
  detailedDescription?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  country: string;
  type: string;
  capacity: string;
  description: string;
  year: string;
  technicalHighlights: string[];
}

export interface ServiceStep {
  title: string;
  description: string;
  icon: string;
}

export interface DocArticle {
  id: string;
  category: "installation" | "operation" | "maintenance" | "plc";
  title: {
    en: string;
    ur: string;
    zh: string;
    ar: string;
  };
  summary: {
    en: string;
    ur: string;
    zh: string;
    ar: string;
  };
  content: {
    en: string;
    ur: string;
    zh: string;
    ar: string;
  };
  specs?: {
    label: string;
    value: string;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}
