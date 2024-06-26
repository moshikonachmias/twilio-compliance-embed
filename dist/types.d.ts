import * as React from "react";
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
export const TwilioComplianceEmbed: ({ inquiryId, inquirySessionToken, onComplete, onCancel, onError, onReady, onInquirySubmitted, widgetPadding, }: TwilioComplianceEmbedProps) => React.ReactElement;

//# sourceMappingURL=types.d.ts.map
