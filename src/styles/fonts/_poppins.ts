import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["200", "300", "400", "500", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--poppins",
});
