import React, { useEffect, useRef } from "react";

const AdSense = ({ client, slot, style, className }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // ignore
    }
  }, []);

  const adClient = client || process.env.REACT_APP_GOOGLE_ADSENSE_ID || "ca-pub-9273359802614973";

  return (
    <ins
      className={"adsbygoogle" + (className ? ` ${className}` : "")}
      ref={ref}
      style={style || { display: "block" }}
      data-ad-client={adClient}
      data-ad-slot={slot || ""}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdSense;
