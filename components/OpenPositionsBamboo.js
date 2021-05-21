import { useEffect } from "react";

const OpenPositionsBamboo = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "//evanshunt.bamboohr.com/js/embed.js");
    document.body.appendChild(script);
  }, []);

  return (
    <div id="BambooHR" data-domain="//evanshunt.bamboohr.com" data-nopudgy="true"></div>
  );
};

export default OpenPositionsBamboo;
