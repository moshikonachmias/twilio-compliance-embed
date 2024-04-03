import * as React from "react";
interface TwilioComplianceEmbedProps {
    inquiryId: string;
    inquirySessionToken: string;
    onComplete?: () => void;
    onCancel?: () => void;
    onError?: () => void;
    onReady?: () => void;
}
export const TwilioComplianceEmbed: ({ inquiryId, inquirySessionToken, onComplete, onCancel, onError, onReady, }: TwilioComplianceEmbedProps) => React.ReactElement;

//# sourceMappingURL=types.d.ts.map
