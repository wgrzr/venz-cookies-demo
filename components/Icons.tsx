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
};
