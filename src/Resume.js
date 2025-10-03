import React from "react";

const PDF_URL = process.env.PUBLIC_URL + "/Langchen Xiang-CV-5 Lax.pdf"; // put resume.pdf in /public

export default function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>

      {/* Top toolbar */}
      <div className="resume-toolbar">
        {/* Local PDF: both can use PDF_URL; download attr triggers save dialog */}
        <a className="resume-btn" href={PDF_URL} target="_blank" rel="noopener noreferrer">
          Open in new tab
        </a>
        <a
          className="resume-btn"
          href={PDF_URL}         /* For Drive, change to DRIVE_DOWNLOAD_URL */
          download               /* Remove this attribute if using Drive */
        >
          Download PDF
        </a>
      </div>

      {/* Embed viewer */}
      <div className="resume-embed">
        <object data={PDF_URL} type="application/pdf" width="100%" height="100%">
          <iframe title="Resume" src={PDF_URL} width="100%" height="100%" />
        </object>
      </div>
    </div>
  );
}
