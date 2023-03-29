/*global fetch*/
export const handler = async(event) => {
    let issue_url = JSON.parse(JSON.stringify(event)).issue.html_url;
    const response = fetch(process.env.SLACK_URL, {
        method: "POST",
        headers: {
             "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: "Issue Created: "+ issue_url,
            }),
    })
    return response;
};
