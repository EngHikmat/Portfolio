function downloadCV() {
  // Create a link element
  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/file/d/1CAAaW1B8qiPsWgADG9eW6IsMXHdL54r1/view?usp=sharing"; // Replace with the actual path to your CV file
  link.target = "_blank";
  link.download = "Hikmat Malkawi.pdf"; // Replace with the desired filename for the downloaded file

  // Simulate a click on the link element to trigger the download
  link.click();
}
