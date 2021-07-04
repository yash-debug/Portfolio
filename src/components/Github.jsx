import React from 'react'
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

export default function Github() {
    const colourTheme = {
        background: "transparent",
        text: "#ffffff",
        grade4: "#8400b8",
        grade3: "#b22ff4",
        grade2: "#b265f6",
        grade1: "#c084f5",
        grade0: "#ecd9fc",
      };
    return (
        <div>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <h1 className="project-heading text-center" style={{ paddingBottom: "20px", fontSize: "2.5rem" }}>
                    Days I <strong className="purple" style={{ color:'yellow', fontSize: "2.5rem" }}>Code</strong>
                </h1>
                <GitHubCalendar
                    username="yash-debug"
                    blockSize={15}
                    blockMargin={5}
                    theme={colourTheme}
                    fontSize={16}
                />
            </Row>
        </div>
    )
}
