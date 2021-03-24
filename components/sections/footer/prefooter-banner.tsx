import { useForm } from "react-hook-form";
import {
  Container,
  Heading,
  Text,
  Box,
  Flex,
  Input,
  Button,
  Label,
} from "theme-ui";
import PrefooterSvg from "components/svgs/prefooter";
import { useMailchimp } from "react-use-mailchimp";
import { useTranslation } from "next-i18next";

const MailchimpResponse = ({
  result,
  msg,
}: {
  result?: string;
  msg?: string;
}) => {
  if (!result || !msg) return null;

  const message = msg.includes("is already subscribed to list")
    ? msg.split(" <a href=")[0]
    : msg;

  return (
    <Text
      sx={{
        fontWeight: 500,
        fontSize: 1,
        ml: 2,
        mr: "auto",
        color: result === "success" ? "text" : "#900000",
        position: "absolute",
        bottom: -3,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}>
      {message}
    </Text>
  );
};

const PrefooterBanner = () => {
  const { t } = useTranslation(["common"]);

  const [mailchimp, subscribe] = useMailchimp({
    url:
      "https://livepeer.us16.list-manage.com/subscribe/post?u=57807e9b74db375864b2c4c68&id=ecd3bf60d5",
  });

  const { loading, data: mailchimpResponseData } = mailchimp;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: { BOT?: string; EMAIL?: string }) => {
    const { BOT, EMAIL } = data;
    if (BOT) alert("Please don't do it");
    else subscribe({ EMAIL });
  };

  return (
    <Box sx={{ px: 3, pt: [4, "80px"], pb: "80px", mb: ["-122px", "80px"] }}>
      <Container
        sx={{
          bg: "primary",
          py: [4, 5],
          px: [4, null, null, "96px"],
          position: "relative",
          overflow: "hidden",
          borderRadius: "lg",
          boxShadow: "magical",
        }}>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          as="form"
          sx={{
            maxWidth: "xl",
            display: "flex",
            flexDirection: "column",
            alignItems: ["center", null, null, "flex-start"],
            mx: ["auto", null, null, 0],
            zIndex: "general",
            position: "relative",
          }}>
          <Heading
            variant="heading.3"
            sx={{ textAlign: ["center", null, null, "left"] }}>
            {t("cta-stay-informed")}
          </Heading>
          <Text
            variant="normal"
            sx={{
              mt: "18px",
              mb: "40px",
              textAlign: ["center", null, null, "left"],
            }}>
            {t("cta-text")}
          </Text>
          <Flex
            sx={{
              width: "100%",
              flexWrap: "wrap",
              mx: [-1, 0],
              zIndex: "general",
            }}>
            <Label variant="srOnly" htmlFor="prefooter-email-input">
              Email
            </Label>
            <Input
              ref={register}
              id="prefooter-email-input"
              name="EMAIL"
              type="email"
              placeholder={t("cta-enter-email")}
              sx={{ mx: 1, flex: "1 1 60%", mb: 2 }}
              required
            />
            <Button
              variant="neutral"
              type="submit"
              sx={{
                minWidth: "fit-content",
                flex: "1 1",
                mx: 1,
                cursor: loading ? "wait" : "pointer",
              }}>
              {t("cta-subscribe")}
            </Button>
          </Flex>
          {mailchimpResponseData && (
            <MailchimpResponse {...mailchimpResponseData} />
          )}
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "-336px",
            top: ["unset", null, null, "50%"],
            bottom: ["-232px", "-190px", null, "unset"],
            transform: ["none", null, null, "translateY(-50%)"],
          }}>
          <PrefooterSvg />
        </Box>
      </Container>
    </Box>
  );
};

export default PrefooterBanner;
