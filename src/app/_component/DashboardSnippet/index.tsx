import Image from "next/image";
import { Box } from "@mui/material";
import { DashboardImg } from "@/assets";
import { Container } from "@/components/mui/Container";

const DashboardSnippet = () => {
  return (
    <Container maxWidth="lg">
      <Box
        width="100%"
        position="relative"
        sx={{ aspectRatio: "16 / 9" }}
        zIndex={2}
        mb={5}
      >
        <Image
          priority
          src={DashboardImg}
          alt="snippet"
          sizes="100vw"
          fill
          style={{
            objectFit: "contain",
            opacity: 0.95,
          }}
        />
      </Box>
    </Container>
  );
};

export default DashboardSnippet;
