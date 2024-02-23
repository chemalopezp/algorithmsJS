function numUniqueEmails(emails: string[]): number {
  const uniqueEmails = [];
  emails.map((email) => {
    console.log("Processing ", email);
    let localName = email.slice(0, email.indexOf("@"));
    const domainName = email.slice(email.indexOf("@"));
    localName = localName.replaceAll(".", "");
    if (localName.indexOf("+") > 0) {
      localName = localName.slice(0, localName.indexOf("+"));
    }
    if (!uniqueEmails.includes(localName + domainName)) {
      uniqueEmails.push(localName + domainName);
    }
  });
  return uniqueEmails.length;
}
