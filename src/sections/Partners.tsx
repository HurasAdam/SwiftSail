import React from "react";
import Klarna from "../assets/logo-wall/klarna.png";
import Stripe from "../assets/logo-wall/stripe.png";
import Paypal from "../assets/logo-wall/paypal.png";
import Bedc from "../assets/logo-wall/bedc.png";
import MasterCard from "../assets/logo-wall/mastercard.png";
import Mtn from "../assets/logo-wall/mtn.png";
import Airtel from "../assets/logo-wall/airtel.png";
import Payoneer from "../assets/logo-wall/payoneer.png";
import Visa from "../assets/logo-wall/visa.png";
import Mobile from "../assets/logo-wall/mobile.png";
import Ikeja from "../assets/logo-wall/ikeja.png";
import Dstv from "../assets/logo-wall/dstv.png";
import LogoWall from "../common/LogoWall";

const Partners: React.FC = () => {
  return (
    <section id="partners" className="mt=20 flex flex-col bg-gray-50 py-20 ">
      <article className="mb-10 w-full px-8 text-center lg:px-12">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Transact seamlessly with...
        </h2>
        <p>
          Achieve Seamless Integration of Your Accounts with SwiftSail. Access
          200+
          <br />
          Integrations with Top Payment Platforms including Stripe, PayPal,
          Payoneer, and More.
        </p>
      </article>
      <div className="xl:flex xl:justify-center">
        <LogoWall
          src1={Klarna}
          src2={Stripe}
          src3={Paypal}
          alt1="Klarna logo"
          alt2="Stripe logo"
          alt3="Paypal logo"
        />

        <LogoWall
          src1={Bedc}
          src2={MasterCard}
          src3={Mtn}
          alt1="Klarna logo"
          alt2="Stripe logo"
          alt3="Paypal logo"
        />
      </div>

      <div className="xl:flex xl:justify-center">
        <LogoWall
          src1={Airtel}
          src2={Payoneer}
          src3={Visa}
          alt1="Klarna logo"
          alt2="Stripe logo"
          alt3="Paypal logo"
        />

        <LogoWall
          src1={Mobile}
          src2={Ikeja}
          src3={Dstv}
          alt1="Klarna logo"
          alt2="Stripe logo"
          alt3="Paypal logo"
        />
      </div>
    </section>
  );
};

export default Partners;
