import * as React from "react";
import Inquiry from "persona-react";
import styled from "styled-components";

const PAGE_CHANGE_EVENT = "page-change";
const TWILIO_INQUIRY_COMPLETED_PAGE = "twilio_inquiry_completed";

interface TwilioComplianceEmbedProps {
  inquiryId: string;
  inquirySessionToken: string;
  onComplete?: () => void;
  onCancel?: () => void;
  onError?: () => void;
  onReady?: () => void;
  widgetPadding?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  onInquirySubmitted?: () => void;
}

export const TwilioComplianceEmbed = ({
  inquiryId,
  inquirySessionToken,
  onComplete = (): void => {},
  onCancel = (): void => {},
  onError = (): void => {},
  onReady = (): void => {},
  onInquirySubmitted = (): void => {},
  widgetPadding,
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
        widgetPadding={widgetPadding}
        onEvent={(event, metaData) => {
          if (
            event === PAGE_CHANGE_EVENT &&
            (metaData?.name as string)?.startsWith(
              TWILIO_INQUIRY_COMPLETED_PAGE
            )
          ) {
            onInquirySubmitted();
          }
        }}
      />
    </Container>
  );
};
