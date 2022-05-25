import { Grid, Box, Text, Button, Input, Textarea } from "theme-ui";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import Fade from "react-reveal/Fade";

const activeStyle = {
  borderColor: "white",
};

const acceptStyle = {
  borderColor: "#00eb88",
};

const rejectStyle = {
  borderColor: "red",
};

type ResumeFileData = {
  name: string;
  url: string;
};

type AnswerData = {
  title: string;
  questionId: string;
  questionType: string;
  value: string | string[];
};

const JobApplicationForm = ({
  id,
  questions,
  name,
  resume,
  coverLetter,
  phone,
}) => {
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [cover, setCover] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [resumeFile, setResumeFile] = useState<ResumeFileData | null>(null);
  const [answers, setAnswers] = useState<AnswerData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingPdf, setLoadingPdf] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const initSetAnswers = () => {
    const data = questions.map((q) => ({
      questionId: q.id,
      title: q.title,
      questionType: q.questionType.toLowerCase(),
      value: "",
    }));
    setAnswers(data);
  };

  useEffect(() => {
    if (router?.query?.email) {
      setEmail(router.query.email as string);
    }
  }, [router?.query?.email]);

  useEffect(() => {
    initSetAnswers();
  }, [questions]);

  const reSet = () => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setCover("");
    setEmail("");
    setResumeFile(null);
    setError(null);
    initSetAnswers();
  };

  const onClick = async () => {
    if (resumeFile) {
      setLoading(true);
      try {
        const candidate = await fetch(
          `https://livepeer.org/api/teamtailor/candidates`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              "first-name": firstName,
              "last-name": lastName,
              email: email,
              phone: phoneNumber,
              resume: resumeFile.url,
            }),
          }
        ).then((response) => response.json());

        for (const answer of answers) {
          await fetch(`https://livepeer.org/api/teamtailor/answers`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...answer,
              candidateId: candidate.data.id,
            }),
          }).then((response) => response.json());
        }

        await fetch(`https://livepeer.org/api/teamtailor/job-applications`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            candidateId: candidate.data.id,
            jobId: id,
            "cover-letter": cover,
          }),
        }).then((response) => response.json());

        setSubmitted(true);
        reSet();
        let timer = setTimeout(() => {
          setSubmitted(false);
        }, 4500);
        return () => {
          clearTimeout(timer);
        };
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please upload your CV");
    }
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    if (!!acceptedFiles[0]) {
      setLoadingPdf(true);
      setError(null);
      let form = new FormData();
      form.append("file", acceptedFiles[0]);
      form.append("file_name", acceptedFiles[0].name);
      await fetch("https://livepeer.org/api/upload", {
        method: "POST",
        body: form,
      })
        .then((response) => response.json())
        .then((res) => {
          setResumeFile({
            name: res.originalFilename,
            url: res.url,
          });
        })
        .catch((error) => {
          setError("Your CV upload failed! Please try it again.");
        });

      setLoadingPdf(false);
    }
  }, []);

  const dropzoneOptions: any = {
    accept: "application/pdf",
    maxFiles: 1,
    onDrop,
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone(dropzoneOptions);

  const onChangeAnswer = (questionId, value) => {
    const updatedA = answers.map((answer) => {
      if (answer.questionId === questionId) {
        return {
          ...answer,
          value,
        };
      }
      return answer;
    });
    setAnswers(updatedA);
  };

  const style = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <Box>
      <Box
        sx={{
          paddingX: 4,
          paddingY: 3,
          borderRadius: "24px",
          border: "1px solid",
          borderColor: "#e9e8ea",
          backgroundColor: "#f9f8f9",
          transition: "box-shadow .2s",
          "&:hover": {
            textDecoration: "none",
            boxShadow:
              "0px 2px 1px rgba(0, 0, 0, 0.04), 0px 16px 40px rgba(0, 0, 0, 0.04)",
          },
          "@bp2": {
            width: 380,
          },
        }}>
        <Text
          sx={{
            marginTop: 2,
            marginBottom: 3,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 4,
          }}>
          Apply for this job
        </Text>
        <Box
          sx={{
            position: "relative",
            width: "100%",
          }}>
          <Box
            as="div"
            sx={{
              textAlign: "center",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "3",
              marginX: "auto",
              maxWidth: 500,
            }}
            id={id}>
            {name !== "off" && (
              <Grid
                gap={3}
                sx={{
                  gridTemplateColumns: "1fr 1fr",
                  width: "100%",
                  alignItems: "center",
                }}>
                <Input
                  id="firstName"
                  sx={{
                    width: "100%",
                    marginBottom: 3,
                  }}
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  required={name === "required"}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  id="lastName"
                  sx={{ width: "100%", marginBottom: 3 }}
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  required={name === "required"}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
            )}
            {phone !== "off" && (
              <Input
                id="phone"
                sx={{
                  width: "100%",
                  marginBottom: 3,
                  marginX: 3,
                  "@media (min-width: 768px)": {
                    marginX: 4,
                  },
                }}
                name="phone"
                type="phone"
                placeholder="Phone (optional)"
                required={phone === "required"}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            )}

            <Input
              id="email"
              sx={{
                width: "100%",
                marginBottom: 3,
                marginX: 3,
                "@media (min-width: 768px)": {
                  marginX: 4,
                },
              }}
              name="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {resume !== "off" && (
              <Box
                sx={{
                  marginBottom: 3,
                  width: "100%",
                }}>
                <Box
                  sx={{
                    width: "100%",
                    cursor: "pointer",
                    p: 1,
                    marginBottom: 0,
                    height: "auto",
                    borderRadius: 6,
                    border: "1px solid rgba(0,0,0,.2)",
                  }}
                  {...getRootProps({ style })}>
                  <Box as="input" {...getInputProps()} />
                  <Box
                    as="p"
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 6,
                      border: "1px dotted rgba(0,0,0,.2)",
                      m: "0 !important",
                      fontSize: 2,
                      p: 3,
                      transition: "border .24s ease-in-out",
                      minWidth: "296px",
                      minHeight: "70px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "gray",
                    }}>
                    {loadingPdf
                      ? "Uploading..."
                      : "Drag and Drop your CV file or upload file here"}
                  </Box>
                </Box>
                {resumeFile && (
                  <Box
                    as="p"
                    sx={{
                      marginY: "$1",
                      width: "100%",
                      textAlign: "left",
                      fontSize: 1,
                      overflowWrap: "break-word",
                      paddingLeft: 0,
                    }}>
                    {resumeFile.name}
                  </Box>
                )}
              </Box>
            )}

            {coverLetter !== "off" && (
              <Textarea
                id="cover"
                sx={{
                  width: "100%",
                  boxSizing: "border-box",
                  marginBottom: 3,
                  height: 60,
                }}
                name="cover"
                placeholder="Cover Letter"
                value={cover}
                onChange={(e) => setCover(e.target.value)}
                required={coverLetter === "required"}
              />
            )}

            {answers &&
              answers.map((a, index) => (
                <Box key={index} sx={{ width: "100%", m: 0 }}>
                  <Box
                    sx={{
                      textAlign: "left",
                      marginBottom: 1,
                      fontSize: 1,
                      lineHeight: "1.5",
                    }}>
                    {a.title}
                  </Box>
                  <Input
                    sx={{
                      width: "100%",
                      marginBottom: 3,
                      marginX: 0,
                    }}
                    id={`question-${index}`}
                    name={`question-${index}`}
                    type="text"
                    placeholder="Type an answer..."
                    required
                    value={a.value}
                    onChange={(e) =>
                      onChangeAnswer(a.questionId, e.target.value)
                    }
                  />
                </Box>
              ))}

            <Box>{error}</Box>
            <Button
              sx={{ marginTop: 4, paddingX: 3, width: "100%" }}
              onClick={onClick}
              disabled={loading}>
              Submit Application
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Fade in={submitted}>
          <Text sx={{ marginTop: 3 }}>
            Thanks for reaching out! We'll get back to you shortly.
          </Text>
        </Fade>
      </Box>
    </Box>
  );
};

export default JobApplicationForm;
