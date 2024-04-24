import {
  Cookie,
  Info,
  LucideIcon,
  MoonStar,
  Sun,
  Package,
  Star,
  ReceiptText,
  Home,
  CircleUserRound,
  ChevronDown,
  Sliders,
  Search,
} from "lucide-react-native";
import { cssInterop } from "nativewind";

function interopIcon(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}
interopIcon(Sliders);
interopIcon(Search);
interopIcon(ChevronDown);
interopIcon(CircleUserRound);
interopIcon(Home);
interopIcon(ReceiptText);
interopIcon(Info);
interopIcon(Cookie);
interopIcon(Star);
interopIcon(MoonStar);
interopIcon(Sun);
interopIcon(Package);

export {
  Sliders,
  CircleUserRound,
  Home,
  ReceiptText,
  Info,
  Star,
  Cookie,
  MoonStar,
  Sun,
  Package,
  ChevronDown,
  Search,
};
