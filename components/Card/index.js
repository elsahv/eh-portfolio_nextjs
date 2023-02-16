import Link from "next/link";
import { urlFor } from "../../utils/image";
import {
  Sq,
  ContentPadding,
  ImgWrapper,
  WebsiteTitle,
  WebsiteDescription,
  ButtonWrapper,
  Button,
} from "./styled";

export default function Card({ website }) {
  return (
    <Sq>
      <ContentPadding>
        <b style={{ paddingRight: "7px" }}>made with:</b>
        <i>{website.tags}</i>
      </ContentPadding>

      <ImgWrapper>
        <Link href={website.projectLink}>
          <img
            src={urlFor(website.websiteImg)}
            width="100%"
            alt=""
            className="img"
          />
        </Link>
      </ImgWrapper>
      <ContentPadding>
        <WebsiteTitle>{website.websitetitle}</WebsiteTitle>
        <WebsiteDescription>{website.description}</WebsiteDescription>

        <ButtonWrapper>
          <Button>
            <Link href={website.projectLink}>visit site</Link>
          </Button>
          <Button>
            <Link href={website.codeLink}>view code</Link>
          </Button>
        </ButtonWrapper>
      </ContentPadding>
    </Sq>
  );
}
