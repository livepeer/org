import { useForm } from "react-hook-form"
import { Container, Heading, Text, Box, Flex, Input, Button } from "theme-ui"
import PrefooterSvg from "components/svgs/prefooter"
import { useMailchimp } from "react-use-mailchimp"

const url =
  "https://livepeer.us16.list-manage.com/subscribe/post-json?u=57807e9b74db375864b2c4c68&id=ecd3bf60d5"

const PrefooterBanner = () => {
  const [mailchimp, subscribe] = useMailchimp({
    url:
      "https://livepeer.us16.list-manage.com/subscribe/post?u=57807e9b74db375864b2c4c68&id=ecd3bf60d5"
  })

  const { loading, error, data } = mailchimp

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    const { BOT, EMAIL } = data
    if (BOT) {
      alert("Please don't do it")
    } else {
      subscribe({ EMAIL })
    }
  }

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
          boxShadow: "magical"
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="checkbox"
            name="BOT"
            ref={register}
            style={{ opacity: 0, position: "absolute", left: "-9999px" }}
          />
          <Box
            sx={{
              maxWidth: "lg",
              display: "flex",
              flexDirection: "column",
              alignItems: ["center", null, null, "flex-start"],
              mx: ["auto", null, null, 0],
              zIndex: "general"
            }}
          >
            <Heading
              variant="heading.3"
              sx={{ textAlign: ["center", null, null, "left"] }}
            >
              Stay Informed
            </Heading>

            <Text
              variant="normal"
              sx={{
                mt: "18px",
                mb: "40px",
                textAlign: ["center", null, null, "left"]
              }}
            >
              Subscribe to our newsletter and get updates from the Livepeer
              ecosystem straight to your Inbox.
            </Text>
            <Flex
              sx={{
                width: "100%",
                flexWrap: "wrap",
                mx: [-1, 0],
                zIndex: "general"
              }}
            >
              <Input
                ref={register}
                name="EMAIL"
                type="email"
                placeholder="Enter your email address"
                sx={{ mx: 1, flex: "1 1 60%", mb: 2 }}
              />
              <Button
                variant="neutral"
                type="submit"
                sx={{ minWidth: "fit-content", flex: "1 1", mx: 1 }}
              >
                Subscribe
              </Button>
            </Flex>
          </Box>
        </form>
        <Box
          sx={{
            position: "absolute",
            right: "-336px",
            top: ["unset", null, null, "50%"],
            bottom: ["-232px", "-190px", null, "unset"],
            transform: ["none", null, null, "translateY(-50%)"]
          }}
        >
          <PrefooterSvg />
        </Box>
      </Container>
    </Box>
  )
}

export default PrefooterBanner
