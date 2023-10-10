import CommunitySection from "components/sections/home/community";
import PrimerBanner from "components/sections/home/primer-banner";
import { useEffect } from "react";

import LivepeerLogo from "components/svgs/livepeer-logo";
import { useTranslation } from "next-i18next";

import Head, { HeadProps } from "components/primitives/head";
import Footer from "components/sections/footer";
import Nav from "components/sections/nav";
import { Button, Box, Container, Grid, Heading } from "theme-ui";

import SectionLayout from "components/layouts/section";
import HugeCard from "components/primitives/cards/huge";
import GetInvolvedSection from "components/sections/oss/get-involved";
import ListItem from "components/primitives/list-item";
import { FiArrowUpRight } from "react-icons/fi";

/*const VideoIcon = () => (
  <svg
    width="211"
    height="168"
    viewBox="0 0 211 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M49.8726 39.7828L60.8849 35.5117H157.991L149.957 39.7828"
      fill="#F7FF90"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M150.349 108.342V40.1751L157.606 36.3169L158.401 101.727L150.349 108.342Z"
      fill="#DBE748"
    />
    <mask
      id="mask0_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="#EDF864"
      />
    </mask>
    <g mask="url(#mask0_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M49.8723 109.172H149.957V39.9402H49.8723V109.172Z"
        fill="#EDF864"
      />
    </g>
    <mask
      id="mask1_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="black"
      />
    </mask>
    <g mask="url(#mask1_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M150.349 108.343V40.1759L157.606 36.3176L158.401 101.728L150.349 108.343ZM50.2641 108.78H149.565V40.3325H50.2641V108.78ZM60.9575 36.0613H156.418L149.859 39.5486H51.9667L60.9575 36.0613ZM159.187 101.907L158.382 35.6646C158.382 35.6612 158.381 35.6579 158.381 35.6544C158.38 35.6375 158.378 35.6207 158.375 35.6039C158.374 35.5962 158.373 35.5883 158.371 35.5807C158.371 35.5787 158.371 35.5767 158.371 35.5746C158.327 35.4 158.17 35.2773 157.99 35.2773H60.8841C60.8358 35.2773 60.7876 35.2864 60.7423 35.3038L49.7985 39.5486H49.48V109.564H150.349V109.358L159.044 102.214C159.136 102.139 159.188 102.026 159.187 101.907Z"
        fill="black"
      />
    </g>
    <mask
      id="mask2_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="#F2726C"
      />
    </mask>
    <g mask="url(#mask2_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M95.396 70.2471L90.5401 70.2968C90.409 70.2982 90.3006 70.1921 90.2992 70.061L90.2579 66.0482C90.2567 65.917 90.3629 65.8086 90.494 65.8074L95.3499 65.7573C95.481 65.7559 95.5894 65.8622 95.5908 65.9933L95.632 70.0063C95.6334 70.1374 95.5271 70.2457 95.396 70.2471Z"
        fill="#F2726C"
      />
    </g>
    <mask
      id="mask3_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="black"
      />
    </mask>
    <g mask="url(#mask3_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M90.6513 66.1983L90.6895 69.9042L95.2381 69.8573L95.2 66.1516L90.6513 66.1983ZM90.5378 70.6897C90.1926 70.6897 89.9104 70.4109 89.9071 70.0655L89.8656 66.0527C89.8624 65.7051 90.1421 65.4196 90.4897 65.416L95.3457 65.3661C95.5084 65.3625 95.6727 65.4285 95.7931 65.5464C95.9136 65.6643 95.9807 65.8219 95.9826 65.99L96.0239 70.003C96.0256 70.1709 95.9614 70.3299 95.8435 70.4503C95.7254 70.5707 95.5679 70.6378 95.3998 70.6397L90.5439 70.6897H90.5378Z"
        fill="black"
      />
    </g>
    <mask
      id="mask4_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="#F2726C"
      />
    </mask>
    <g mask="url(#mask4_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M95.4649 77.0199L90.6092 77.0698C90.4779 77.0712 90.3697 76.9649 90.3683 76.8338L90.327 72.821C90.3256 72.6899 90.4318 72.5814 90.5629 72.5803L95.4188 72.5303C95.5499 72.5289 95.6583 72.6352 95.6597 72.7663L95.701 76.7791C95.7024 76.9103 95.596 77.0185 95.4649 77.0199Z"
        fill="#F2726C"
      />
    </g>
    <mask
      id="mask5_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="black"
      />
    </mask>
    <g mask="url(#mask5_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M90.7204 72.9705L90.7583 76.6762L95.307 76.6295L95.2689 72.9236L90.7204 72.9705ZM90.6061 77.4617C90.4406 77.4617 90.2843 77.3977 90.1654 77.2814C90.0449 77.1635 89.9777 77.0059 89.9759 76.8378L89.9347 72.8248C89.933 72.6569 89.997 72.4979 90.115 72.3775C90.233 72.2571 90.3904 72.1899 90.5587 72.1881L95.4146 72.1381C95.765 72.13 96.048 72.4148 96.0515 72.7623L96.0928 76.7751C96.0962 77.1226 95.8162 77.4082 95.4687 77.4118L90.6128 77.4617H90.6061Z"
        fill="black"
      />
    </g>
    <mask
      id="mask6_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="#F2726C"
      />
    </mask>
    <g mask="url(#mask6_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M110.123 76.869L105.267 76.9189C105.136 76.9203 105.028 76.814 105.027 76.6829L104.985 72.6701C104.984 72.539 105.09 72.4305 105.221 72.4293L110.077 72.3794C110.208 72.378 110.317 72.4842 110.318 72.6154L110.359 76.6282C110.361 76.7594 110.254 76.8676 110.123 76.869Z"
        fill="#F2726C"
      />
    </g>
    <mask
      id="mask7_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="black"
      />
    </mask>
    <g mask="url(#mask7_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M105.379 72.8206L105.417 76.5263L109.965 76.4795L109.927 72.7737L105.379 72.8206ZM105.264 77.3118C105.099 77.3118 104.943 77.2478 104.824 77.1315C104.703 77.0134 104.636 76.8558 104.634 76.6876L104.593 72.6749C104.59 72.3273 104.869 72.0418 105.217 72.0382L110.073 71.9882C110.425 71.9804 110.706 72.2649 110.71 72.6121L110.751 76.6252C110.753 76.7931 110.689 76.9521 110.571 77.0725C110.453 77.1929 110.295 77.26 110.127 77.2619L105.271 77.3118H105.264Z"
        fill="black"
      />
    </g>
    <mask
      id="mask8_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="#F2726C"
      />
    </mask>
    <g mask="url(#mask8_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M95.534 83.7929L90.6782 83.8427C90.5471 83.844 90.4387 83.7378 90.4373 83.6068L90.3961 79.5939C90.3947 79.4629 90.501 79.3544 90.6321 79.3531L95.4879 79.3032C95.6191 79.3018 95.7273 79.408 95.7287 79.5391L95.77 83.552C95.7714 83.6831 95.6652 83.7915 95.534 83.7929Z"
        fill="#F2726C"
      />
    </g>
    <mask
      id="mask9_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="black"
      />
    </mask>
    <g mask="url(#mask9_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M90.7895 79.7432L90.8276 83.4489L95.3761 83.402L95.3382 79.6963L90.7895 79.7432ZM90.6751 84.2344C90.5097 84.2344 90.3533 84.1704 90.2345 84.054C90.1139 83.9359 90.0468 83.7783 90.045 83.6102L90.0038 79.5976C90.0003 79.25 90.2803 78.9645 90.6278 78.9609L95.4837 78.9108C95.8268 78.9021 96.117 79.1871 96.1206 79.5347L96.1618 83.5478C96.1637 83.7159 96.0994 83.8749 95.9813 83.9952C95.8634 84.1156 95.7059 84.1827 95.5378 84.1844L90.6819 84.2344H90.6751Z"
        fill="black"
      />
    </g>
    <mask
      id="mask10_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="#F2726C"
      />
    </mask>
    <g mask="url(#mask10_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M102.906 73.2299L98.0497 73.2798C97.9186 73.281 97.8103 73.1749 97.8088 73.0438L97.7676 69.031C97.7663 68.8999 97.8725 68.7914 98.0036 68.7901L102.86 68.7402C102.991 68.7389 103.099 68.845 103.1 68.9762L103.142 72.9891C103.143 73.1201 103.037 73.2285 102.906 73.2299Z"
        fill="#F2726C"
      />
    </g>
    <mask
      id="mask11_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="black"
      />
    </mask>
    <g mask="url(#mask11_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M98.161 69.1803L98.1991 72.886L102.748 72.8392L102.71 69.1334L98.161 69.1803ZM98.0467 73.6715C97.8812 73.6715 97.725 73.6075 97.6061 73.4912C97.4855 73.3733 97.4184 73.2157 97.4165 73.0476L97.3753 69.0346C97.372 68.687 97.6518 68.4015 97.9993 68.3979L102.855 68.3479C103.022 68.3492 103.182 68.4101 103.303 68.5284C103.423 68.6463 103.49 68.8038 103.492 68.9718L103.534 72.9849C103.535 73.1528 103.471 73.3118 103.353 73.4322C103.235 73.5526 103.078 73.6197 102.909 73.6216L98.0534 73.6715H98.0467Z"
        fill="black"
      />
    </g>
    <mask
      id="mask12_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="#F2726C"
      />
    </mask>
    <g mask="url(#mask12_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M102.994 81.7549L98.1376 81.8046C98.0065 81.806 97.8981 81.6999 97.8967 81.5688L97.8555 77.556C97.8542 77.4249 97.9604 77.3164 98.0915 77.3152L102.947 77.2651C103.079 77.2639 103.187 77.37 103.188 77.5011L103.23 81.5141C103.231 81.6452 103.125 81.7535 102.994 81.7549Z"
        fill="#F2726C"
      />
    </g>
    <mask
      id="mask13_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="black"
      />
    </mask>
    <g mask="url(#mask13_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M98.2488 77.7059L98.2869 81.4116L102.836 81.3647L102.798 77.659L98.2488 77.7059ZM98.1347 82.1971C97.7901 82.1971 97.508 81.9187 97.5044 81.5733L97.4631 77.5601C97.4614 77.392 97.5256 77.2331 97.6436 77.1128C97.7617 76.9922 97.9193 76.9251 98.0876 76.9236L102.943 76.8735C103.112 76.8743 103.27 76.9358 103.391 77.054C103.511 77.1721 103.578 77.3296 103.58 77.4977L103.621 81.5104C103.625 81.8578 103.345 82.1435 102.997 82.1471L98.1414 82.1971H98.1347Z"
        fill="black"
      />
    </g>
    <mask
      id="mask14_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="#F2726C"
      />
    </mask>
    <g mask="url(#mask14_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M62.7619 48.7253C62.7619 50.5768 61.2608 52.0776 59.4088 52.0776C57.5571 52.0776 56.0558 50.5768 56.0558 48.7253C56.0558 46.8738 57.5571 45.373 59.4088 45.373C61.2608 45.373 62.7619 46.8738 62.7619 48.7253Z"
        fill="#F2726C"
      />
    </g>
    <mask
      id="mask15_1_729"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="211"
      height="168">
      <path
        d="M0.0856323 167.476H211V0.524414H0.0856323V167.476Z"
        fill="black"
      />
    </mask>
    <g mask="url(#mask15_1_729)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M59.4101 45.7649C57.7774 45.7649 56.4491 47.0929 56.4491 48.7252C56.4491 50.3575 57.7774 51.6857 59.4101 51.6857C61.0428 51.6857 62.3711 50.3575 62.3711 48.7252C62.3711 47.0929 61.0428 45.7649 59.4101 45.7649ZM59.4101 52.4696C57.345 52.4696 55.665 50.7899 55.665 48.7252C55.665 46.6606 57.345 44.981 59.4101 44.981C61.4752 44.981 63.1552 46.6606 63.1552 48.7252C63.1552 50.7899 61.4752 52.4696 59.4101 52.4696Z"
        fill="black"
      />
    </g>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M76.1623 48.1863C76.8795 48.0725 77.5522 47.9662 78.2249 47.8589C78.3668 47.8363 78.5294 47.7548 78.6447 47.799C78.8072 47.8613 78.9345 48.0154 79.0769 48.1303C78.9406 48.2343 78.8184 48.3928 78.6654 48.4331C77.8831 48.6389 77.0788 48.7736 76.3176 49.0361C76.1733 49.0859 76.1419 49.6033 76.1601 49.8986C76.1658 49.9886 76.5186 50.1369 76.7005 50.1209C77.1984 50.0772 77.6876 49.9293 78.1853 49.8874C78.3812 49.8711 78.5915 50.0271 78.7952 50.1046C78.6301 50.2595 78.4879 50.4625 78.2932 50.5552C78.1085 50.6432 77.8673 50.6063 77.6535 50.6407C77.118 50.7269 76.5815 50.8105 76.0497 50.9177C75.553 51.0177 75.4616 50.9356 75.453 50.4596C75.4334 49.3848 75.3663 48.3105 75.3611 47.2357C75.3601 47.0599 75.5526 46.755 75.6956 46.7288C76.4015 46.5999 77.1196 46.5283 77.8363 46.4773C77.9871 46.4666 78.1501 46.6283 78.3075 46.7105C78.1664 46.8337 78.0433 47.0217 77.8806 47.0667C77.5358 47.1618 77.1718 47.2045 76.8127 47.2291C76.1414 47.275 76.0815 47.3337 76.1623 48.1863Z"
      fill="black"
    />
  </svg>
);*/

export default function Demuxed() {
  const { t } = useTranslation(["home", "oss"]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "initial";
    };
  }, []);

  const headProps: HeadProps = {
    meta: {
      title: "Demuxed 2023",
      description: t("page-home-meta-description"),
      url: "https://livepeer.org",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@Livepeer",
    },
  };

  return (
    <>
      <Head {...headProps} />
      <Nav background="dark" />
      <Box as="main">
        <section
          style={{
            background:
              "url(/images/demuxed/ribbon.svg) left top no-repeat, url(/images/demuxed/orchestrator.svg) right bottom no-repeat, #111C18",
            color: "#fff",
            padding: "9rem 2rem",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}>
          <div
            style={{
              width: "800px",
              padding: "2rem",
              maxWidth: "100vw",
              margin: "auto",
              display: "grid",
              gap: "2Rem",
              background: "rgb(17, 28, 24, 0.7)",
              backdropFilter: "blur(8px)",
            }}>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                gap: ".66em",
                fontSize: "min(6vw, 3rem)",
              }}>
              <LivepeerLogo
                isDark
                pushSx={{ width: "auto", height: "1.25em" }}
              />

              <span>×</span>

              <img
                alt="Demuxed"
                src="/images/demuxed/demuxed.svg"
                style={{
                  width: "auto",
                  height: "1.25em",
                  marginBottom: "0.075em",
                }}
              />
            </h1>

            <p style={{ fontSize: "1.33em" }}>
              Hi Video Devs 👋&nbsp;&nbsp;
              <wbr />
              We can’t wait to meet you!
            </p>

            <p style={{ fontSize: "1.33em" }}>
              Visit the Livepeer sponsor booth (next to Mux) for some sweet
              merch and chat with our product and engineering teams about the
              latest developments in open video infrastructure.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2em",
              }}>
              <a
                href="https://livepeer.typeform.com/livepeerdemuxed"
                target="_blank"
                rel="noreferrer">
                <Button variant="primary">
                  Want Extra Special Swag?
                  <FiArrowUpRight />
                </Button>
              </a>
              <a
                href="https://discord.gg/livepeer"
                target="_blank"
                rel="noreferrer">
                <Button variant="secondary">
                  Join Discord
                  <FiArrowUpRight />
                </Button>
              </a>
            </div>
          </div>
        </section>

        <SectionLayout background="muted" pushSx={{ py: ["80px", "160px"] }}>
          <Grid
            columns={[
              "minmax(auto, 632px)",
              null,
              "repeat(2, minmax(auto, 632px))",
            ]}
            sx={{ justifyContent: "center" }}>
            <HugeCard
              {...{
                titleLabel: "Video",
                title: "Innovators Meetup",
                listItems: [],
                cta: {
                  label: "Register",
                  isLink: true,
                  isExternal: true,
                  href: "",
                },
                accent: "primary",
                headerIllustration: <img src={"/images/primer/video.svg"} />,
              }}>
              <p>
                Join Livepeer for an evening of networking, just a short walk
                from the main Demuxed venue.
              </p>
              <br />
              <p>
                <b>
                  <time>
                    06:00-09:00PM
                    <br />
                    Tuesday, 24 October, 2023.
                  </time>
                </b>
              </p>
              <br />
              <p>
                <b>
                  <u>
                    <a
                      href="https://www.hotelviasf.com/the-hotel/bar"
                      target="_blank"
                      rel="noreferrer">
                      BarVIA
                    </a>
                  </u>
                  <br />
                  138 King St. San Francisco, CA, 94107
                </b>
              </p>
            </HugeCard>
            <HugeCard
              {...{
                titleLabel: "Demuxed",
                title: "Livepeer talk with Eric Tang",
                listItems: [],
                cta: {
                  label: "Register",
                  isLink: true,
                  isExternal: true,
                  href: "",
                },
                accent: "primary",
                headerIllustration: (
                  <img src={"/images/demuxed/eric.png"} width="85" />
                ),
              }}>
              <p>
                Unmasking Digital Deception: The Content Authenticity Initiative
                For Video Engineers.
              </p>
              <br />
              <p>
                <b>
                  <time>
                    12:25-12:40 PM
                    <br />
                    Wednesday, 25 October, 2023.
                  </time>
                </b>
              </p>
              <br />
              <p>
                <b>
                  <u>
                    <a
                      href="https://terrasf.com/"
                      target="_blank"
                      rel="noreferrer">
                      Terra Gallery & Event Venue
                    </a>
                  </u>
                  <br />
                  511 Harrison St, San Francisco, CA 94105
                </b>
              </p>
            </HugeCard>
          </Grid>
        </SectionLayout>

        <PrimerBanner
          label={"Primer"}
          title={t("page-home-primer-title")}
          subtitle={t("page-home-primer-text")}
          ctaText={t("page-home-primer-cta")}
        />

        <GetInvolvedSection
          label={t("page-oss-collaborate", { ns: "oss" })}
          title={t("page-oss-collaborate-title", { ns: "oss" })}
          subtitle={t("page-oss-collaborate-intro", { ns: "oss" })}
        />

        <Box sx={{ position: "relative", zIndex: "general" }}>
          <Container
            variant="section"
            sx={{ py: ["80px", null, null, "160px"] }}>
            <Grid columns={[1, null, 2]} gap={4} sx={{ alignItems: "center" }}>
              <Box>
                <Heading
                  variant="heading.3"
                  sx={{
                    textAlign: "left",
                    fontFamily: "body",
                    mb: "24px",
                  }}>
                  Livepeer Studio
                </Heading>
                <Heading
                  variant="heading.5"
                  sx={{
                    textAlign: "left",
                    mb: "24px",
                  }}>
                  Livepeer Studio is a high-performance video streaming platform
                  for developers. It's scalable, reliable, and delivers up to{" "}
                  <strong>90% cost savings</strong>.
                </Heading>
                <Heading variant="heading.5" sx={{ textAlign: "left" }}>
                  Connect with us if you are...
                </Heading>
                <ListItem icon={"∙"}>Interested in video provenance</ListItem>
                <ListItem icon={"∙"}>
                  Building an app that needs live streaming
                </ListItem>
                <ListItem icon={"∙"}>
                  Building an app that needs video on demand
                </ListItem>
                <ListItem icon={"∙"}>
                  Building an app that needs video transcoding
                </ListItem>
                <ListItem icon={"∙"}>Interested in AV1 support</ListItem>
                <br />
                <Button variant="primary">
                  Talk to a Livepeer Studio Expert
                  <FiArrowUpRight />
                </Button>
              </Box>
              <img src="/images/demuxed/livepeer-studio.png" />
            </Grid>
          </Container>
        </Box>

        <CommunitySection
          title={t("page-home-communities-title")}
          subtitle={t("page-home-communities-text")}
          label={t("page-home-communities")}
        />
      </Box>
      <Footer isDark />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: {} };
}
