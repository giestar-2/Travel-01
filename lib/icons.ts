import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Globe2,
  Headphones,
  Link as LinkIcon,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Search,
  Send,
  ShieldCheck,
  Star,
  Sunset,
  Wallet,
  Waves,
  Wine,
  X,
  type Icons,
} from "lucide";

import { Facebook, Instagram, Twitter, Youtube } from "@/lib/brand-icons";

/*
 * Only the icons the template actually uses are registered (instead of the whole
 * lucide set), which keeps the client bundle small. `createIcons()` looks icons up
 * by the pascal-cased value of `data-lucide`, so the keys below are the names of
 * the elements, not the kebab-case names used in the markup.
 */
export const icons: Icons = {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Globe2,
  Headphones,
  Link: LinkIcon,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Search,
  Send,
  ShieldCheck,
  Star,
  Sunset,
  Wallet,
  Waves,
  Wine,
  X,
  // brand icons (see lib/brand-icons.ts)
  Facebook,
  Instagram,
  Twitter,
  Youtube,
};
