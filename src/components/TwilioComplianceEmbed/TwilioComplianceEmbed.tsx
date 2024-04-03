import * as React from "react";
import { Inquiry } from "persona";
import styled from "styled-components";

interface TwilioComplianceEmbedProps {
  inquiryId: string;
  inquirySessionToken: string;
  onComplete?: () => void;
  onCancel?: () => void;
  onError?: () => void;
  onReady?: () => void;
}

export const TwilioComplianceEmbed = ({
  inquiryId,
  inquirySessionToken,
  onComplete = (): void => {},
  onCancel = (): void => {},
  onError = (): void => {},
  onReady = (): void => {},
}: TwilioComplianceEmbedProps): React.ReactElement => {
  // The Incredible Singing Cat solution for responsive iframes
  // See https://stackoverflow.com/a/29784327
  const Container = styled.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;

  return (
    <Container>
      <Inquiry
        inquiryId={inquiryId}
        sessionToken={inquirySessionToken}
        onComplete={onComplete}
        onCancel={onCancel}
        onError={onError}
        onReady={onReady}
      />
    </Container>
  );
};
