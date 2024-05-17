import * as React from "react";
import CTAleft from "./CTAleft";
import CTAright from "./CTAright";

function CTA() {
    return (
        <>
            <div className="flex justify-between">
                <CTAleft />
                <CTAright />
            </div>
        </>
    );
}

export default CTA;