import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  //var actualpath = pathname.includes("#") ? pathname.split("#")[0] : pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
