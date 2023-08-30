const googleLoginBtn = document.getElementById("google-login");
const facebookLoginBtn = document.getElementById("facebook-login");
const githubLoginBtn = document.getElementById("github-login");
const otpSection = document.getElementById("otp-section");
const otpInput = document.getElementById("otp-input");
const otpSubmitBtn = document.getElementById("otp-submit");

// Initialize Firebase authentication
const auth = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerGithub = new firebase.auth.GithubAuthProvider();

// Google Login
googleLoginBtn.addEventListener("click", () => {
  auth.signInWithPopup(providerGoogle)
    .then((result) => {
      console.log("Google login successful:", result.user);
    })
    .catch((error) => {
      console.error("Google login error:", error);
    });
});

// Facebook Login
facebookLoginBtn.addEventListener("click", () => {
  auth.signInWithPopup(providerFacebook)
    .then((result) => {
      console.log("Facebook login successful:", result.user);
    })
    .catch((error) => {
      console.error("Facebook login error:", error);
    });
});

// GitHub Login
githubLoginBtn.addEventListener("click", () => {
  auth.signInWithPopup(providerGithub)
    .then((result) => {
      console.log("GitHub login successful:", result.user);
    })
    .catch((error) => {
      console.error("GitHub login error:", error);
    });
});

// OTP Submit
otpSubmitBtn.addEventListener("click", () => {
  const otp = otpInput.value;
  // Perform OTP authentication using Firebase's authentication mechanisms
  // This part requires integrating a third-party SMS gateway or similar service
});